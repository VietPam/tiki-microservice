package com.quangviet.userservice.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public class LoginRequestDTO {
    @NotNull
    @NotEmpty
    public String userName;
    @NotNull
    @NotEmpty
    public String password;

}
