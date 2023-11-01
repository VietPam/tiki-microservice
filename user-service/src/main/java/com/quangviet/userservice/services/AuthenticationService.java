package com.quangviet.userservice.services;

import com.quangviet.userservice.dto.request.LoginRequestDTO;
import com.quangviet.userservice.dto.request.RegisterRequestDTO;
import com.quangviet.userservice.dto.response.LoginResponseDTO;
import com.quangviet.userservice.entity.token.Token;
import com.quangviet.userservice.entity.user.Role;
import com.quangviet.userservice.entity.user.User;
import com.quangviet.userservice.exception.ApiExceptionType;
import com.quangviet.userservice.repository.TokenRepository;
import com.quangviet.userservice.repository.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public LoginResponseDTO login(LoginRequestDTO dto, HttpServletResponse response) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        dto.username,
                        dto.password
                ));

        User user =
                userRepository.findByUserName(dto.username)
                        .orElseThrow(() -> ApiExceptionType.wrongAccount);
        var accessToken = jwtService.generateAccessToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);

        revokeAllUserTokens(user);
        tokenRepository.insert(accessToken);
        tokenRepository.insert(refreshToken);

        saveTokenToCookie(response, refreshToken);

        return LoginResponseDTO.builder()
                .accessToken(accessToken.value)
                .build();
    }

    private void saveTokenToCookie(HttpServletResponse response, Token refreshToken) {
        Cookie cookie = new Cookie("refresh_token", refreshToken.value);
        cookie.setMaxAge((int) jwtService.getRefreshExpiration() / 1000); // expires in 7 days
        cookie.setSecure(false);
        cookie.setHttpOnly(true);
        response.addCookie(cookie);
    }

    private void revokeAllUserTokens(UserDetails user) {
        List<Token> tokens = tokenRepository.findTokensByUserDetailsAndRevoked(user, false);
        tokens.forEach(token -> token.revoked = true);
        tokenRepository.saveAll(tokens);
    }

    public void register(RegisterRequestDTO dto) {
        if (userRepository.findByUserName(dto.username).isPresent()) {
            throw ApiExceptionType.usernameUsed;
        }
        if (userRepository.findByEmail(dto.email).isPresent()) {
            throw ApiExceptionType.emailUsed;
        }
        if (userRepository.findByPhoneNo(dto.phoneNo).isPresent()) {
            throw ApiExceptionType.phoneNumberUsed;
        }

        var user = User.builder()
                .userName(dto.username)
                .email(dto.email)
                .phoneNo(dto.phoneNo)
                .password(passwordEncoder.encode(dto.password))
                .role(Role.customer)
                .build();
        userRepository.save(user);
    }

    public LoginResponseDTO refreshToken(HttpServletRequest request, HttpServletResponse response) {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String bearer = "Bearer ";
        if (authHeader == null || !authHeader.startsWith(bearer)) {
            throw ApiExceptionType.invalidToken;
        }
        final String refreshTokenValue = authHeader.substring(bearer.length());
        String userName = jwtService.extractUsername(refreshTokenValue);
        Token token = tokenRepository.findTokenByValue(refreshTokenValue)
                .orElseThrow(() -> ApiExceptionType.invalidToken);
        revokeAllUserTokens(token.userDetails);

        if (token.revoked || token.dateExpire.before(new Date(System.currentTimeMillis()))) {
            throw ApiExceptionType.expiredOrRevokedToken;
        }
        if (userName == null || !userName.equals(token.userDetails.getUsername())) {
            throw ApiExceptionType.invalidToken;
        }

        var accessToken = jwtService.generateAccessToken(token.userDetails);
        var refreshToken = jwtService.generateRefreshToken(token.userDetails);

        tokenRepository.insert(accessToken);
        tokenRepository.insert(refreshToken);

        saveTokenToCookie(response, refreshToken);

        return LoginResponseDTO.builder()
                .accessToken(accessToken.value)
                .build();
    }

    public Role validateToken(String givenToken) {
        var username = jwtService.extractUsername(givenToken);
        var user = userRepository.findByUserName(username)
                .orElseThrow(() -> ApiExceptionType.badConnection);

        var token = tokenRepository.findTokenByValue(givenToken)
                .orElseThrow(() -> ApiExceptionType.invalidToken);
        if (token.revoked || token.dateExpire.before(new Date(System.currentTimeMillis()))) {
            throw ApiExceptionType.expiredOrRevokedToken;
        }

        return user.getRole();
    }
}
