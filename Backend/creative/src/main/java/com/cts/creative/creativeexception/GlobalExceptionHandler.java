package com.cts.creative.creativeexception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(
            CreativeNotFoundException.class)
    public ResponseEntity<String> handleNotFound(
            CreativeNotFoundException ex) {

        log.error(
                "Creative Not Found: {}",
                ex.getMessage());

        return ResponseEntity.badRequest()
                .body(ex.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGeneral(
            Exception ex) {

        log.error(
                "Unexpected Exception",
                ex);

        return ResponseEntity.internalServerError()
                .body(ex.getMessage());
    }
}