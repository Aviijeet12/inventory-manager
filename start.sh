#!/bin/bash
./mvnw clean package -DskipTests
java -Dserver.port=$PORT -jar target/inventory-manager-0.0.1-SNAPSHOT.jar