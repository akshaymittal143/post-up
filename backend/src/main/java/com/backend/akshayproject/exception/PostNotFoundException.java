package com.backend.akshayproject.exception;

public class PostNotFoundException extends RuntimeException{
  public PostNotFoundException() {
    super();
  }

  public PostNotFoundException(final String message, final Throwable cause) {
    super(message, cause);
  }

  public PostNotFoundException(final String message) {
    super(message);
  }

  public PostNotFoundException(final Throwable cause) {
    super(cause);
  }
}
