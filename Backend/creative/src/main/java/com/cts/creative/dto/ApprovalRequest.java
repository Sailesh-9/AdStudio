package com.cts.creative.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ApprovalRequest(

        @NotNull
        Long reviewerId,

        @NotBlank
        String decision,

        String feedback

) {
}