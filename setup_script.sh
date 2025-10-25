#!/bin/bash
# A script to create the project structure for the Event Ticketing System

# Create the root directory
mkdir -p event-ticketing-system

# Change into the root directory
cd event-ticketing-system

# Create backend structure
mkdir -p backend/src/main/java/com/example/ticketing/config
mkdir -p backend/src/main/java/com/example/ticketing/controller
mkdir -p backend/src/main/java/com/example/ticketing/dto
mkdir -p backend/src/main/java/com/example/ticketing/model
mkdir -p backend/src/main/java/com/example/ticketing/repository
mkdir -p backend/src/main/java/com/example/ticketing/service
mkdir -p backend/src/main/resources

# Create frontend structure
mkdir -p frontend/public
mkdir -p frontend/src/components
mkdir -p frontend/src/services

echo "Project structure created successfully!"