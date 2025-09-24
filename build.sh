#!/bin/bash
# Build the application
./mvnw clean package -DskipTests

# Start the application
java -Dserver.port=$PORT -jar target/inventory-manager-0.0.1-SNAPSHOT.jar