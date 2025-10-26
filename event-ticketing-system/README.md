# Event Ticketing System (Full Stack)

![Java](https://img.shields.io/badge/Java-17-blue)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.1.5-brightgreen)
![React](https://img.shields.io/badge/React-18.2-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-informational)
![Docker](https://img.shields.io/badge/Docker-blue)
![NGINX](https://img.shields.io/badge/NGINX-green)

A full-stack, containerized event ticketing platform built with Spring Boot, React.js, and PostgreSQL. This project is designed to be a high-performance, secure, and scalable solution for managing and selling event tickets online.

This repository provides the foundational structure for a system capable of handling complex booking logic, secure payments, and high-concurrency user traffic, all containerized with Docker for easy deployment and local simulation.

---

##  Features

* **Full Stack Architecture:** A decoupled Spring Boot 3 backend and React.js frontend.
* **Secure Authentication:** JWT (JSON Web Token) based authentication to secure RESTful endpoints.
* **Role-Based Access Control (RBAC):** Spring Security implementation differentiating between `USER` and `ADMIN` roles.
* **Containerized Environment:** The entire application (backend, frontend, database) runs in isolated Docker containers, orchestrated with `docker-compose`.
* **Reverse Proxy:** NGINX is configured as a reverse proxy to serve the React frontend and forward API requests to the Spring Boot backend, all from a single port (`localhost:80`).
* **RESTful API:** A clean API for event and user management.

### Future Goals (from Project Description)
* **Stripe Integration:** Integrate Stripe sandbox API for secure and successful payment processing.
* **High Concurrency:** Optimize for 5,000+ concurrent users during peak releases.
* **Real-time Updates:** Implement WebSocket for real-time seat availability updates, reducing booking completion time.
* **Complete Test Coverage:** Achieve 95%+ pass rate on Postman test suites for all endpoints.

---

##  Tech Stack

* **Backend:**
    * Java 17
    * Spring Boot 3 (Web, Data JPA, Security)
    * PostgreSQL
    * JJWT (for JSON Web Token handling)
* **Frontend:**
    * React.js
    * React Router (for client-side routing)
    * Axios (for API requests)
* **DevOps / Infrastructure:**
    * Docker & Docker Compose
    * NGINX (as reverse proxy)

---

##  Getting Started

You only need **Docker** and **Docker Compose** installed to run this entire project. You do not need to install Java, Maven, Node.js, or PostgreSQL locally.

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/event-ticketing-system.git](https://github.com/your-username/event-ticketing-system.git)
    cd event-ticketing-system
    ```

2.  **Build and Run with Docker Compose:**
    From the root directory (where `docker-compose.yml` is located), run:
    ```bash
    docker-compose up --build
    ```
    This command will:
    * Build the Spring Boot application's Docker image.
    * Build the React application's Docker image.
    * Pull the PostgreSQL image.
    * Start all three containers and connect them on a private network.

3.  **Access the Application:**
    Once all containers are running, you can access the application in your browser:
    * **Frontend:** `http://localhost`
    * **Backend API (Direct):** `http://localhost:8080` (useful for Postman testing)
    * **Database (Direct):** `localhost:5432` (accessible with a tool like DBeaver)

---

##  How to Use

1.  **Register a User:**
    * Navigate to `http://localhost/register`.
    * Create a new user (e.g., `user` / `password`). This account will be created with `ROLE_USER`.
    * You will be redirected to the login page.

2.  **Log In:**
    * Log in with your newly created credentials.
    * You will be redirected to the "Events" page. A JWT token is now saved in your browser's local storage.

3.  **View Events:**
    * The "Events" page fetches data from the public `/api/events` endpoint.

4.  **Test Admin Functionality (Manual Step):**
    * To test `ADMIN` functionality (like creating events), you must manually grant a user the `ADMIN` role.
    * **How:** Connect to the `eventdb` database (running on `localhost:5432`) and add an entry to the `user_role` table for your user's ID:
        ```sql
        -- Find your user's ID
        SELECT * FROM app_user WHERE username = 'your_username';
        
        -- Insert the ADMIN role (assuming your user_id is 1)
        INSERT INTO user_role (user_id, role) VALUES (1, 'ADMIN');
        ```
    * Log out and log back in. Your token will now contain the `ADMIN` role, and you can access protected endpoints (like `POST /api/events`).

---

