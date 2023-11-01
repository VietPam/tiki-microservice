package com.quangviet.userservice.exception;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@NoArgsConstructor
public class ApiExceptionEntity extends RuntimeException {
    public String id;
    public String message;
    public HttpStatus httpStatus;
}
