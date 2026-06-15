@echo off
REM Start all backend services in sequence

REM 1. Start Eureka Server
start "EurekaServer" cmd /k "cd  eurekaServer && mvnw spring-boot:run"

@REM REM 2. Start Config Server
@REM start "ConfigServer" cmd /k "cd Backend\ConfigServer && mvnw spring-boot:run"

REM 3. Start Transaction Service
start "advertiser" cmd /k "cd advertiser && mvnw spring-boot:run"

REM 4. Start Enrichment Service
start "mediaplan" cmd /k "cd mediaplan && mvnw spring-boot:run"

REM 5. Start Decision Engine Service
start "iam" cmd /k "cd iam && mvnw spring-boot:run"

REM 6. Start Alert Case Service
start "creative" cmd /k "cd creative && mvnw spring-boot:run"

REM 7. Start SAR Report Service
start "finance" cmd /k "cd finance && mvnw spring-boot:run"

REM 8. Start API Gateway
start "ApiGateway" cmd /k "cd Backend\apiGateway && mvnw spring-boot:run"

REM All services started in separate windows
