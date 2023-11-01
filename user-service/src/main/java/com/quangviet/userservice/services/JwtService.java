package com.quangviet.userservice.services;

import com.quangviet.userservice.entity.token.Token;
import com.quangviet.userservice.entity.token.TokenType;
import com.quangviet.userservice.exception.ApiExceptionType;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.function.Function;

@Service
@Getter
public class JwtService {
    @Value("${application.security.jwt.secret-key}")
    private String secretKey;
    @Value("${application.security.jwt.expiration}")
    private long jwtExpiration;
    @Value("${application.security.jwt.refresh-token.expiration}")
    private long refreshExpiration;

    // generate Token
    public Token generateAccessToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public Token generateRefreshToken(UserDetails userDetails) {
        return buildToken(new HashMap<>(), userDetails, refreshExpiration);
    }

    private Token generateToken(HashMap<String, Object> extractedClaims, UserDetails userDetails) {
        return buildToken(extractedClaims, userDetails, jwtExpiration);
    }

    private Token buildToken(HashMap<String, Object> extractedClaims, UserDetails userDetails, long expiration) {
        long current = System.currentTimeMillis();
        String token = Jwts.builder().signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .setClaims(extractedClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(current))
                .setExpiration(new Date(current + expiration))
                .compact();

        return Token.builder()
                .value(token)
                .dateExpire(new Date(current + expiration))
                .revoked(false)
                .tokenType(TokenType.bearer)
                .userDetails(userDetails)
                .build();
    }


    // Extract Claims
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(getSignInKey())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
        } catch (Exception e) {
            throw ApiExceptionType.invalidToken;
        }
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
