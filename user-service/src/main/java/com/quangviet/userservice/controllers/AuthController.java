package com.quangviet.userservice.controllers;

import com.quangviet.userservice.dto.request.LoginRequestDTO;
import com.quangviet.userservice.dto.request.RegisterRequestDTO;
import com.quangviet.userservice.dto.response.LoginResponseDTO;
import com.quangviet.userservice.entity.user.Role;
import com.quangviet.userservice.services.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import jakarta.servlet.http.Cookie;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticationService service;
    @PostMapping("login")
    public ResponseEntity<LoginResponseDTO> login(@Valid @RequestBody LoginRequestDTO dto, HttpServletResponse response) {
        LoginResponseDTO responseDTO = service.login(dto, response);
        return ResponseEntity.ok(responseDTO);
    }

    @PostMapping("register")
    public ResponseEntity<Object> register(@Valid @RequestBody RegisterRequestDTO dto) {
        service.register(dto);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .status(HttpStatus.CREATED)
                .build();
    }

    @PostMapping("refresh-token")
    public ResponseEntity<LoginResponseDTO> refreshToken(HttpServletRequest request, HttpServletResponse response) {
        LoginResponseDTO responseDTO = service.refreshToken(request, response);
        return ResponseEntity.ok(responseDTO);
    }

    @GetMapping("validate-token")
    public ResponseEntity<Role> validateToken(@RequestParam String token) {
        Role userRole = service.validateToken(token);
        return ResponseEntity.ok(userRole);
    }
}
