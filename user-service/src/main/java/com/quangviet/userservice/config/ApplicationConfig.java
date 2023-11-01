package com.quangviet.userservice.config;

import com.quangviet.userservice.exception.ApiExceptionType;
import com.quangviet.userservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    private final UserRepository userRepository;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config)
            throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        return new AuthenticationProvider() {
            @Override
            public Authentication authenticate(Authentication authentication) throws AuthenticationException {
                if (authentication.isAuthenticated()) {
                    return authentication;
                }
                if (authentication.getCredentials() == null) {
                    throw ApiExceptionType.wrongAccount;
                }

                final String username = authentication.getPrincipal().toString();
                final String password = authentication.getCredentials().toString();

                UserDetails userDetails = userRepository.findByUserName(username)
                        .orElseThrow(() -> ApiExceptionType.wrongAccount);

                if (!passwordEncoder().matches(password, userDetails.getPassword())) {
                    throw ApiExceptionType.wrongAccount;
                }

//                authentication.setAuthenticated(true);
//                return authentication;
                Authentication newAuth = new UsernamePasswordAuthenticationToken(username, password, userDetails.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(newAuth);
                return newAuth;
            }

            @Override
            public boolean supports(Class<?> authentication) {
                return authentication.equals(UsernamePasswordAuthenticationToken.class);
            }
        };
    }
}
