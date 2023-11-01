package com.quangviet.userservice.dto.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public class LoginRequestDTO {
    @NotNull(message = "Please enter userName field")
    @NotEmpty(message = "Please enter userName field")
    public String username;
    @NotNull(message = "Please enter password field")
    @NotEmpty(message = "Please enter password field")
//    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$")
    public String password;

}
