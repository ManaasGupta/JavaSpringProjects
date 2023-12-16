package com.spring.restApp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.resource.NoResourceFoundException;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = NoResourceFoundException.class)
    protected ResponseEntity<ExceptionResponse>NoResourceFoundExceptionException(NoResourceFoundException ex){
        ExceptionResponse exceptionResponse = new ExceptionResponse(ex.getMessage()+"\n Enter Correct api-url",false);
        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }
}
