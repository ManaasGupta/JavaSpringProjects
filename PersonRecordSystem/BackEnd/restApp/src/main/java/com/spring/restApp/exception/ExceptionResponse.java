package com.spring.restApp.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ExceptionResponse{
    private String message;
    private boolean status;

    public ExceptionResponse(String message,Boolean status) {
        this.message = message;
        this.status = status;
    }
}
