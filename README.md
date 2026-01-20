# User Registration System

This project is a user registration system designed to support secure and efficient user onboarding with compliance to financial regulations. It integrates with CRM and KYC/AML systems.

## Architecture

- **Frontend**: React.js
- **Backend**: Spring Boot with Java
- **Database**: Azure SQL
- **API Gateway**: Spring Cloud Gateway
- **Authentication**: OAuth 2.0/OpenID Connect

## Setup Instructions

### Prerequisites

- Node.js and npm
- Java 17 or later
- Maven
- Azure SQL Database

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Update `src/main/resources/application.properties` with your Azure SQL Database credentials.
3. Build and run the application:
   ```bash
   mvn spring-boot:run
   ```

### Testing

- Run backend tests:
  ```bash
  mvn test
  ```

## Deployment

- Use Azure DevOps for CI/CD pipeline setup.
- Deploy the backend to Azure App Service.
- Ensure the database is accessible from the App Service.

## Security

- Ensure TLS 1.3 is enabled for all communications.
- Use Azure AD for RBAC and OAuth 2.0 for authentication.

## Compliance

- Ensure the system complies with PCI DSS, NIST Cybersecurity Framework, and ISO 27001/27002 standards.
```

This setup includes a complete implementation of the frontend, backend, database configuration, and deployment instructions, covering all aspects of the architecture document.