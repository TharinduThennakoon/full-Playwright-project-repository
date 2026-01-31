
Project Overview
The objective of this project is to evaluate the accuracy, stability, and real-time conversion capabilities of the SwiftTranslator system. It includes:
- **24 Positive Test Scenarios**: Verifying correct Singlish to Sinhala conversion.
- **10 Negative Test Scenarios**: Testing the system's robustness with symbols, numbers, and English words.

Tech Stack
- **Framework:** Playwright (Node.js)
- **Design Pattern:** Page Object Model (POM)
- **Browsers Tested:** Chromium, Firefox, WebKit (Safari)

Project Structure
- `pages/`: Contains the `TranslatorPage.js` (Locators and Actions).
- `tests/`: Contains the `translation.spec.js` (Test scripts).
- `playwright.config.js`: Configuration for timeouts, workers, and browser projects.
- `Assignment 1 - Test cases.xlsx`: Detailed test documentation.
Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
Clone the repository and install the necessary dependencies:

```bash
# Clone the repository
git clone (https://github.com/TharinduThennakoon/full-Playwright-project-repository.git)

# Navigate to the project folder
cd assignment

# Install Playwright and dependencies
npm install
npx playwright install
