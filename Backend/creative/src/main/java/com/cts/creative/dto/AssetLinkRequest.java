package com.cts.creative.dto;

import jakarta.validation.constraints.NotNull;

public record AssetLinkRequest(

        @NotNull
        Long assetId,

        @NotNull
        Long lineItemId

) {
}