package com.cts.creative.controller;

import java.time.LocalDateTime;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.cts.creative.dto.ApiResponse;
import com.cts.creative.entity.CreativeAsset;
import com.cts.creative.service.CreativeService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/creative-assets")
@RequiredArgsConstructor
public class CreativeAssetController {

    private final CreativeService service;

    @PostMapping(
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ApiResponse<?>> upload(

            @RequestParam("file")
            MultipartFile file,

            @RequestParam Long brandId,

            @RequestParam Long campaignBriefId,

            @RequestParam String assetName,

            @RequestParam Long uploadedById,

            @RequestParam CreativeAsset.AssetType assetType,

            @RequestParam Integer width,

            @RequestParam Integer height

    ) throws Exception {

        log.info("Upload request received for asset {}", assetName);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Creative Asset Uploaded Successfully",
                        service.upload(
                                file,
                                brandId,
                                campaignBriefId,
                                assetName,
                                uploadedById,
                                assetType,
                                width,
                                height
                        ),
                        LocalDateTime.now()
                )
        );
    }

    @GetMapping
    public ResponseEntity<ApiResponse<?>> getAll() {

        log.info("Fetching all creative assets");

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Assets fetched successfully",
                        service.getAllAssets(),
                        LocalDateTime.now()
                )
        );
    }

    @GetMapping("/{assetId}")
    public ResponseEntity<ApiResponse<?>> getById(
            @PathVariable Long assetId) {

        log.info("Fetching asset {}", assetId);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Asset fetched successfully",
                        service.getAsset(assetId),
                        LocalDateTime.now()
                )
        );
    }

    @PutMapping(
            value = "/{assetId}",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<ApiResponse<?>> update(

            @PathVariable Long assetId,

            @RequestParam(required = false)
            MultipartFile file,

            @RequestParam String assetName,

            @RequestParam CreativeAsset.AssetType assetType,

            @RequestParam Integer width,

            @RequestParam Integer height

    ) throws Exception {

        log.info("Updating asset {}", assetId);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Asset updated successfully",
                        service.updateAsset(
                                assetId,
                                file,
                                assetName,
                                assetType,
                                width,
                                height
                        ),
                        LocalDateTime.now()
                )
        );
    }

    @DeleteMapping("/{assetId}")
    public ResponseEntity<ApiResponse<?>> delete(
            @PathVariable Long assetId) {

        log.info("Deleting asset {}", assetId);

        service.deleteAsset(assetId);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Asset deleted successfully",
                        null,
                        LocalDateTime.now()
                )
        );
    }
}