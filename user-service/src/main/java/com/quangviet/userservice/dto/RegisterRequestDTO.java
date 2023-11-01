package com.quangviet.userservice.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public class RegisterRequestDTO extends LoginRequestDTO{
    @NotNull
    @NotEmpty
    public String phoneNo;
    @NotNull
    @NotEmpty
    public String email;
}
