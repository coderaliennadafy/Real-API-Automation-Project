#  Real API Automation Framework

A professional REST API automation framework built with JavaScript, Supertest, Mocha, Chai, and AJV.

The project demonstrates a scalable API testing framework with reusable utilities, schema validation, data-driven testing, negative testing, and basic performance testing using Grafana k6.

---

#  Features

- ✅ REST API Functional Testing
- ✅ Positive Test Scenarios
- ✅ Negative Test Scenarios
- ✅ Data-Driven Testing
- ✅ JSON Schema Validation
- ✅ Request Helper Utilities
- ✅ Retry Mechanism
- ✅ Logging Utilities
- ✅ Environment Configuration
- ✅ Basic Performance Testing (k6)

---

#  Tech Stack

- JavaScript (ES6)
- Node.js
- Supertest
- Mocha
- Chai
- AJV
- Dotenv
- k6

---

#  Project Structure

```text
real-api-automation-project
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── cd.yml
│
├── config/
│   └── config.js
│
├── data/
│   └── users.data.json
│
├── mocks/
│   └── users.mock.js
│
├── performance/
│   └── load-test.js
│
├── reports/
│   └── mochawesome-report/
│
├── schemas/
│   └── user.schema.json
│
├── tests/
│   ├── data-driven/
│   │   └── users.data.test.js
│   │
│   ├── negative/
│   │   └── negative.test.js
│   │
│   ├── posts/
│   │   └── posts.test.js
│   │
│   └── users/
│       ├── users.schema.test.js
│       └── users.test.js
│
├── utils/
│   ├── helpers.js
│   ├── logger.js
│   ├── request.js
│   ├── retry.js
│   └── validator.js
│
├── .env
├── .gitignore
├── docker-compose.yml
├── package.json
├── package-lock.json
└── README.md
```

---

#  Functional Testing

The framework validates REST APIs by testing:

- HTTP Status Codes
- Response Body
- Response Headers
- CRUD Operations
- Positive Test Cases
- Negative Test Cases

---

#  Schema Validation

AJV is used to validate API responses against predefined JSON Schemas to ensure contract consistency.

---

#  Data-Driven Testing

Test data is separated from test logic using external JSON files, making test cases easier to maintain and extend.

---

#  Retry Mechanism

Reusable retry utilities help reduce flaky tests by automatically retrying temporary request failures.

---

#  Logging

Custom logging utilities provide cleaner debugging and better visibility during test execution.

---

#  Performance Testing

Basic API load testing is implemented using Grafana k6.

Current configuration:

- 5 Virtual Users
- 10 Seconds Duration
- Status Code Validation
- Response Time Monitoring

Run Performance Test:

```bash
k6 run performance/load-test.js
```

---

# ▶ Installation

```bash
npm install
```

---

# ▶ Run Functional Tests

```bash
npm test
```

---

#  Future Improvements

- Playwright API Testing
- GitHub Actions CI/CD
- Docker Integration
- Allure Reporting
- Advanced Performance Testing
- AI-assisted Test Automation

---

# 👨‍💻 Author

Ali Ennadafy

Software QA Tester passionate about building reliable and maintainable API automation frameworks.

Skills:

- Manual Testing
- API Testing
- API Automation
- Performance Testing
- JavaScript
- Supertest
- Mocha
- Chai
- AJV
- k6
