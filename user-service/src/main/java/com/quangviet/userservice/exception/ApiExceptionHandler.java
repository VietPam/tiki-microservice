package com.quangviet.userservice.exception;

import com.quangviet.userservice.dto.response.ExceptionDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
public class ApiExceptionHandler {
    @ExceptionHandler(value = {ApiExceptionEntity.class})
    public ResponseEntity<Object> handleRequestException(ApiExceptionEntity apiExceptionEntity) {
        return ResponseEntity
                .status(apiExceptionEntity.httpStatus)
                .body(ExceptionDTO.builder()
                                .id(apiExceptionEntity.id)
                                .message(apiExceptionEntity.message)
                        .build());
    }

//    @ExceptionHandler(MethodArgumentNotValidException.class)
//    public ResponseEntity<Object> handleValidationExceptions(MethodArgumentNotValidException ex) {
//        List<ExceptionDTO> dtos = new ArrayList<>();
//        ValidiationExceptionEntity res = new ValidiationExceptionEntity("","",null);
//        List<ObjectError> errors = ex.getBindingResult().getAllErrors();
//        errors.forEach((error) -> {
//            String fieldName = ((FieldError) error).getField();
//            String errorMessage = error.getDefaultMessage();
//
//            if (errorMessage != null &&
//                    res.getId().isBlank() &&
//                    (errorMessage.toLowerCase().contains("null") ||
//                        errorMessage.toLowerCase().contains("empty"))) {
//                res.setId(ApiExceptionType.missingField.id);
//                res.setMessage(ApiExceptionType.missingField.message);
//            }
//            dtos.add(ExceptionDTO.builder()
//                            .id(fieldName)
//                            .message(errorMessage)
//                    .build());
//        });
//        if (dtos.size() == 1) {
//            return ResponseEntity
//                    .status(HttpStatus.BAD_REQUEST)
//                    .body(dtos.stream().findFirst().get());
//        }
//        res.setDetails(dtos);
//        return ResponseEntity
//                .status(ApiExceptionType.missingField.httpStatus)
//                .body(res);
//    }

    private class ListValidiationExceptionEntity {
        public List<ExceptionDTO> errors;

        private ListValidiationExceptionEntity(List<ExceptionDTO> errors) {
            this.errors = errors;
        }
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ListValidiationExceptionEntity> handleValidationExceptions(MethodArgumentNotValidException ex) {
        List<ExceptionDTO> dtos = new ArrayList<>();
        List<ObjectError> errors = ex.getBindingResult().getAllErrors();

        checkErrorExist(errors, dtos, ApiExceptionType.invalidUsername);
        checkErrorExist(errors, dtos, ApiExceptionType.invalidEmail);
        checkErrorExist(errors, dtos, ApiExceptionType.invalidPhoneNumber);
        checkErrorExist(errors, dtos, ApiExceptionType.invalidPassword);

        return ResponseEntity
                .status(ApiExceptionType.invalidUsername.httpStatus)
                .body(new ListValidiationExceptionEntity(dtos));
    }

    private void checkErrorExist(List<ObjectError> errors, List<ExceptionDTO> dtos, ApiExceptionEntity type) {

        for (ObjectError error : errors) {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();

            if (type.equals(ApiExceptionType.invalidUsername) && fieldName.equals("username")) {
                var entity = new ExceptionDTO();
                entity.setId(ApiExceptionType.invalidUsername.id);
                entity.setMessage(ApiExceptionType.invalidUsername.message);
                dtos.add(entity);
                break;
            } else if (type.equals(ApiExceptionType.invalidEmail) && fieldName.equals("email")) {
                var entity = new ExceptionDTO();
                entity.setId(ApiExceptionType.invalidEmail.id);
                entity.setMessage(ApiExceptionType.invalidEmail.message);
                dtos.add(entity);
                break;
            } else if (type.equals(ApiExceptionType.invalidPhoneNumber) && fieldName.equals("phoneNo")) {
                var entity = new ExceptionDTO();
                entity.setId(ApiExceptionType.invalidPhoneNumber.id);
                entity.setMessage(ApiExceptionType.invalidPhoneNumber.message);
                dtos.add(entity);
                break;
            } else if (type.equals(ApiExceptionType.invalidPassword) && fieldName.equals("password")) {
                var entity = new ExceptionDTO();
                entity.setId(ApiExceptionType.invalidPassword.id);
                entity.setMessage(ApiExceptionType.invalidPassword.message);
                dtos.add(entity);
                break;
            }
        }
    }
}
