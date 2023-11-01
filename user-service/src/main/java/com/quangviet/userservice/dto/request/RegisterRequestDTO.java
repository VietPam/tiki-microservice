package com.quangviet.userservice.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public class RegisterRequestDTO extends LoginRequestDTO{
    @NotNull(message = "Please enter phoneNo field")
    @NotEmpty(message = "Please enter phoneNo field")
    @Pattern(regexp="(^$|[0-9]{10,11})")
    public String phoneNo;
    @NotNull(message = "Please enter email field")
    @NotEmpty(message = "Please enter email field")
    @Email
    public String email;
}
