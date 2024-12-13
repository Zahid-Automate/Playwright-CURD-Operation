# Playwright Test Suite

## Overview
This project contains Playwright tests with custom annotations and comprehensive test scenarios, including:
- Use of annotations in your test scripts (Page title verification test case) - HTML reports will include the same in a separate section which can be used for better reporting)
<img width="770" alt="image" src="https://github.com/user-attachments/assets/71652389-cecc-4d12-8702-c1029436a082" />


- Employee CRUD (Create, Read, Update, Delete) Operations

## Prerequisites
- Node.js (version 16 or higher)
- npm
- Playwright

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Zahid-Automate/Playwright-CURD-Operation.git
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Tag
```bash
npx playwright test --grep "@slow"
```

## Test Scenarios

### 1. Page Title Verification
- **Description**: Verifies the title of the Playwright documentation page
- **Tags**: @slow
- **Annotations**: 
  - BugFix: BUGID#45443
  - Sprint 39: Patch Release

### 2. Employee CRUD Operations
- **Description**: Comprehensive test suite for Employee management
- **Test Cases**:
  1. **Add New Employee**
     - Generates a random user
     - Navigates to employees page
     - Adds a new employee
     - Verifies employee addition
  
  2. **Update Employee**
     - Locates the last added employee
     - Updates employee details
     - Verifies update was successful
  
  3. **Delete Employee**
     - Adds a new employee
     - Deletes the employee record

### Custom Utilities
- `createRandomUser()`: Generates random user data for testing
- `paginationGoToLastPage()`: Navigates to the last page of pagination

## Test Configuration
- **Base URL**: http://localhost:8000/
- **Department Selection**: Department 2
- **Timeout**: 5000ms (for some operations)

## Test Environment Setup
### Required Environment Variables
- `BASE_URL`: Base URL of the application
- `DEPARTMENT_ID`: Default department for employee creation (currently set to '2')

## Mocking and Test Data
- Random user generation for consistent but unique test data
- Supports repeatable and reliable testing scenarios

## Troubleshooting
- Ensure local server is running at http://localhost:8000/
- Check network connectivity
- Verify Playwright browser drivers are up to date
- Validate test data generation utility

## Best Practices
- Uses serial test description to ensure test order
- Implements comprehensive error checking
- Utilizes page object model principles
- Generates unique test data for each run

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Additional Notes
- Ensure all dependencies are up to date
- Run `npm test` to execute the full test suite
- Review test reports for detailed insights
