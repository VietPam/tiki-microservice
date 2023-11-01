package com.quangviet.userservice.exception;

import com.quangviet.userservice.dto.response.ExceptionDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ValidiationExceptionEntity {
    private String id;
    private String message;
    private List<ExceptionDTO> details;
}
