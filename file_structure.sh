#!/bin/bash
# A script to create all the empty files for the project

# Navigate into the project's root directory
cd event-ticketing-system

echo "Creating root files..."
touch docker-compose.yml
touch .gitignore

echo "Creating backend files..."
# Backend root
touch backend/pom.xml
touch backend/Dockerfile

# Backend resources
touch backend/src/main/resources/application.properties

# Backend java files
touch backend/src/main/java/com/example/ticketing/TicketingApplication.java
touch backend/src/main/java/com/example/ticketing/config/JwtAuthenticationFilter.java
touch backend/src/main/java/com/example/ticketing/config/SecurityConfig.java
touch backend/src/main/java/com/example/ticketing/controller/AuthController.java
touch backend/src/main/java/com/example/ticketing/controller/EventController.java
touch backend/src/main/java/com/example/ticketing/dto/AuthRequest.java
touch backend/src/main/java/com/example/ticketing/dto/AuthResponse.java
touch backend/src/main/java/com/example/ticketing/model/User.java
touch backend/src/main/java/com/example/ticketing/model/Event.java
touch backend/src/main/java/com/example/ticketing/repository/UserRepository.java
touch backend/src/main/java/com/example/ticketing/repository/EventRepository.java
touch backend/src/main/java/com/example/ticketing/service/JwtService.java
touch backend/src/main/java/com/example/ticketing/service/UserDetailsServiceImpl.java

echo "Creating frontend files..."
# Frontend root
touch frontend/package.json
touch frontend/Dockerfile
touch frontend/nginx.conf

# Frontend public
touch frontend/public/index.html

# Frontend src
touch frontend/src/index.js
touch frontend/src/App.js
touch frontend/src/services/api.js
touch frontend/src/services/auth.service.js
touch frontend/src/components/Login.js
touch frontend/src/components/Register.js
touch frontend/src/components/Events.js

echo "All files created successfully!"