# Real API Automation Project

A REST API automation project built with JavaScript and Node.js to practice API testing using modern automation tools and best practices.

The project covers functional API testing, schema validation, data-driven testing, mock testing, basic performance testing, containerization with Docker, and continuous integration using GitHub Actions.

---

# Project Overview

This project tests the public JSONPlaceholder REST API and demonstrates how an API automation framework can be organized for maintainability and scalability.

The framework includes reusable utilities, separated test data, schema validation, mocked responses, Docker support, and automated test execution through GitHub Actions.

---

# Technologies

- JavaScript
- Node.js
- Supertest
- Mocha
- Chai
- AJV
- Nock
- Dotenv
- Docker
- Docker Compose
- GitHub Actions
- Grafana k6

---

# Project Structure

```text
real-api-automation-project
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── config/
│   └── config.js
│
├── data/
│   └── users.data.json
│
├── mocks/
│   └── users.mock.test.js
│
├── performance/
│   └── load-test.js
│
├── schemas/
│   └── user.schema.json
│
├── tests/
│   ├── data-driven/
│   ├── negative/
│   ├── posts/
│   └── users/
│
├── utils/
│   ├── helpers.js
│   ├── logger.js
│   ├── request.js
│   ├── retry.js
│   └── validator.js
│
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

# Test Coverage

## Users API

- Get all users
- Get user by ID
- Create a new user
- Update a user
- Delete a user

## Posts API

- Get all posts
- Get post by ID
- Create a post
- Update a post
- Partially update a post
- Delete a post

## Negative Testing

- Invalid endpoint
- Resource not found
- Mocked server error using Nock

## Schema Validation

Response validation using JSON Schema with AJV.

## Data-Driven Testing

External JSON test data is separated from the test logic to improve maintainability.

## Mock Testing

API responses are mocked using Nock to simulate different server behaviors without calling the real API.

## Performance Testing

A basic load test is implemented using Grafana k6.

Current configuration:

- 5 Virtual Users (VUs)
- 10 seconds duration
- HTTP status validation

Run the performance test:

```bash
k6 run performance/load-test.js
```

---

# Running the Project

Install dependencies

```bash
npm install
```

Run all functional tests

```bash
npm test
```

Run mock tests

```bash
npm run test:mocks
```

---

# Docker

Build the Docker image

```bash
docker build -t api-automation .
```

Run the test suite inside a container

```bash
docker run --rm api-automation
```

Run using Docker Compose

```bash
docker compose up
```

---

# Continuous Integration

GitHub Actions automatically runs the test suite on every push to the **master** branch.

The workflow performs the following steps:

- Checkout repository
- Setup Node.js
- Install project dependencies
- Execute the complete test suite

---

# Current Features

- REST API Testing
- CRUD Operations
- Positive Testing
- Negative Testing
- Data-Driven Testing
- JSON Schema Validation
- Mock API Testing
- Basic Performance Testing
- Docker Support
- Docker Compose
- GitHub Actions CI

---

# Future Improvements

- Playwright API Testing
- HTML Test Reports
- Allure Reporting
- Advanced Performance Testing
- Additional API Test Coverage

---

# Author

**Ali Ennadafy**

Software QA Tester passionate about software quality, API testing, and test automation.

GitHub:
https://github.com/coderaliennadafy

Portfolio:
https://ali-ennadafy-portfolio.netlify.app/
