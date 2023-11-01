package com.quangviet.userservice.repository;

import com.quangviet.userservice.entity.token.Token;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends MongoRepository<Token, String> {
    Optional<Token> findTokenByValue(String token);
    List<Token> findTokensByUserDetailsAndRevoked(UserDetails userDetails, Boolean revoked);
}
