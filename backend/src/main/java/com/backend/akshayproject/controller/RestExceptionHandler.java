package com.backend.akshayproject.controller;

import com.backend.akshayproject.exception.PostIdMismatchException;
import com.backend.akshayproject.exception.PostNotFoundException;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

  public RestExceptionHandler() {
    super();
  }

  @ExceptionHandler(PostNotFoundException.class)
  protected ResponseEntity<Object> handleNotFound(Exception ex, WebRequest request) {
    return handleExceptionInternal(ex, "Post not found", new HttpHeaders(), HttpStatus.NOT_FOUND, request);
  }

  @ExceptionHandler({
      PostIdMismatchException.class,
      ConstraintViolationException.class,
      DataIntegrityViolationException.class
  })
  public ResponseEntity<Object> handleBadRequest(Exception ex, WebRequest request) {
    return handleExceptionInternal(ex, ex
        .getLocalizedMessage(), new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
  }
}
