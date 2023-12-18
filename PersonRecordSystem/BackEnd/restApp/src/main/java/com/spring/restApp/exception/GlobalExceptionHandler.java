package com.spring.restApp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = NoResourceFoundException.class)
    protected ResponseEntity<ExceptionResponse> NoResourceFoundExceptionHandler(NoResourceFoundException ex){
        ExceptionResponse exceptionResponse = new ExceptionResponse(ex.getMessage()+"\n Enter Correct api-url",false);
        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(value = MethodArgumentTypeMismatchException.class)
    protected ResponseEntity<ExceptionResponse> MethodArgumentTypeMismatchExceptionHandler(MethodArgumentTypeMismatchException ex){
        ExceptionResponse response = new ExceptionResponse(ex.getMessage()+"\n Enter correct argument type",false);
        return new ResponseEntity<>(response,HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(value = Exception.class)
    protected ResponseEntity<ExceptionResponse> RuntimeExceptionExceptionHandler(Exception ex){
        ExceptionResponse response = new ExceptionResponse(ex.getMessage()+"\n No Records Found",false);
        return new ResponseEntity<>(response,HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
