package com.quangviet.userservice.exception;

import org.springframework.http.HttpStatus;

public class ApiExceptionType {
    public static final ApiExceptionEntity badConnection = new ApiExceptionEntity("ER001", "Bad Network Connection", HttpStatus.BAD_REQUEST);
    public static final ApiExceptionEntity requestTimeOut = new ApiExceptionEntity("ER002", "Request Timeout", HttpStatus.REQUEST_TIMEOUT);
    public static final ApiExceptionEntity missingField = new ApiExceptionEntity("ER003", "Please enter this field", HttpStatus.UNPROCESSABLE_ENTITY);
    public static final ApiExceptionEntity validationFail = new ApiExceptionEntity("ER004", "Please enter phone number / email", HttpStatus.UNPROCESSABLE_ENTITY);
    public static final ApiExceptionEntity detailExistance = new ApiExceptionEntity("ER005", "This username / email / phone number is already used", HttpStatus.CONFLICT);
    public static final ApiExceptionEntity productMissing = new ApiExceptionEntity("ER006", "There are no products matched", HttpStatus.NOT_FOUND);
    public static final ApiExceptionEntity wrongAccount = new ApiExceptionEntity("ER007", "Your username or password is incorrect", HttpStatus.UNAUTHORIZED);
    public static final ApiExceptionEntity blankField = new ApiExceptionEntity("ER008", "This field is required. Please fill in this field", HttpStatus.UNPROCESSABLE_ENTITY);
    public static final ApiExceptionEntity invalidToken = new ApiExceptionEntity("ER009", "Your token is invalid", HttpStatus.FORBIDDEN);
    public static final ApiExceptionEntity invalidPhoneNumber = new ApiExceptionEntity("ER013", "Phone number is invalid", HttpStatus.UNPROCESSABLE_ENTITY);
    public static final ApiExceptionEntity invalidEmail = new ApiExceptionEntity("ER014", "Email is invalid", HttpStatus.UNPROCESSABLE_ENTITY);
    public static final ApiExceptionEntity usernameUsed = new ApiExceptionEntity("ER015", "This username is already used", HttpStatus.CONFLICT);
    public static final ApiExceptionEntity emailUsed = new ApiExceptionEntity("ER016", "This email is already used", HttpStatus.CONFLICT);
    public static final ApiExceptionEntity phoneNumberUsed = new ApiExceptionEntity("ER017", "This phone number is already used", HttpStatus.CONFLICT);
    public static final ApiExceptionEntity invalidUsername = new ApiExceptionEntity("ER018", "Username is invalid", HttpStatus.UNPROCESSABLE_ENTITY);
    public static final ApiExceptionEntity invalidPassword = new ApiExceptionEntity("ER019", "Password is invalid", HttpStatus.UNPROCESSABLE_ENTITY);

    public static final ApiExceptionEntity expiredOrRevokedToken = new ApiExceptionEntity("ER010", "Your token is expired or revoked", HttpStatus.UNAUTHORIZED);
    public static final ApiExceptionEntity createAccountSuccessful = new ApiExceptionEntity("MS001", "Your account has been created successfully. Please verify your email", HttpStatus.CREATED);
    public static final ApiExceptionEntity createShopSuccessful = new ApiExceptionEntity("MS002", "New shop has been created successfully", HttpStatus.CREATED);

}
