# UI Testing Playground — Playwright POM Examples

[![CI](https://github.com/fernandokuriabbat/uiTestingPlayground/actions/workflows/playwright.yml/badge.svg)](https://github.com/fernandokuriabbat/uiTestingPlayground/actions/workflows/playwright.yml)
![Node](https://img.shields.io/badge/node-%E2%89%A520.x-339933?logo=node.js&logoColor=white)
[![Playwright devDep](https://img.shields.io/github/package-json/dependency-version/fernandokuriabbat/uiTestingPlayground/dev/%40playwright%2Ftest?label=playwright)](https://www.npmjs.com/package/@playwright/test)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

A comprehensive Playwright + TypeScript test suite implemented using the **Page Object Model (POM)** pattern against [UITestingPlayground](http://uitestingplayground.com). This repository is a learning and portfolio project demonstrating practical UI automation skills including locators, assertions, handling overlays/offscreen elements, AJAX, delayed loads, progress bars, dialogs, Shadow DOM, file uploads, and more.

---

## 🎯 Purpose

This project demonstrates practical UI automation skills using Playwright and TypeScript. It showcases my ability to:

- Write maintainable, scalable test automation code
- Implement industry-standard design patterns (Page Object Model)
- Handle complex UI testing scenarios (dynamic content, async operations, cross-browser compatibility)
- Set up and maintain CI/CD pipelines
- Write clear, readable, and well-documented test code

**Perfect for**: Junior QA Automation Engineer positions requiring Playwright/TypeScript experience.

---

## 🛠️ Technologies & Skills Demonstrated

- **Test Framework**: Playwright with TypeScript
- **Design Pattern**: Page Object Model (POM)
- **CI/CD**: GitHub Actions
- **Testing Concepts**:
  - Web-first assertions and auto-waiting
  - Cross-browser testing (Chrome, Firefox, Safari)
  - Handling dynamic content, AJAX, and delays
  - Dialog/alert handling (alert, confirm, prompt)
  - Shadow DOM traversal
  - Element visibility and overlap detection
  - Clipboard operations
  - Scroll and viewport management
  - File upload handling (browse and drag-drop)
  - Iframe interaction

---

## 📊 Status & Progress

- ✅ **23 out of 23 scenarios completed** (100% complete)
- Playwright + TypeScript with Page Object Model pattern
- CI/CD: GitHub Actions workflow with automated test execution
- Cross-browser testing: Chromium, Firefox, WebKit (Safari)
- Test coverage: Dynamic elements, AJAX, delays, dialogs, Shadow DOM, file uploads, and more

### Scenario Checklist

| # | Scenario | Status |
|---|----------|:------:|
| 1 | ✅ Dynamic ID | Complete |
| 2 | ✅ Class Attribute | Complete |
| 3 | ✅ Hidden Layers | Complete |
| 4 | ✅ Load Delay | Complete |
| 5 | ✅ AJAX Data | Complete |
| 6 | ✅ Client Side Delay | Complete |
| 7 | ✅ Click | Complete |
| 8 | ✅ Text Input | Complete |
| 9 | ✅ Scrollbars | Complete |
| 10 | ✅ Dynamic Table | Complete |
| 11 | ✅ Verify Text | Complete |
| 12 | ✅ Progress Bar | Complete |
| 13 | ✅ Visibility | Complete |
| 14 | ✅ Sample App | Complete |
| 15 | ✅ Mouse Over | Complete |
| 16 | ✅ Non-Breaking Space | Complete |
| 17 | ✅ Overlapped Element | Complete |
| 18 | ✅ Shadow DOM | Complete |
| 19 | ✅ Alerts | Complete |
| 20 | ✅ File Upload | Complete |
| 21 | ✅ Animated Button | Complete |
| 22 | ✅ Disabled Input | Complete |
| 23 | ✅ Auto Wait | Complete |
| | **Total** | **23/23 (100%)** |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation & Setup

1. **Clone the repository and enter the folder:**

```powershell
git clone https://github.com/fernandokuriabbat/uiTestingPlayground.git
cd uiTestingPlayground
```

2. **Install dependencies and Playwright browsers:**

```powershell
npm ci
npx playwright install --with-deps
```

3. **Run the full test suite:**

```powershell
npx playwright test
```

4. **Run a single spec file or filter by test name:**

```powershell
npx playwright test tests/homePage.spec.ts
npx playwright test -g "visibility"
```

5. **View the HTML report after a run:**

```powershell
npx playwright show-report
```

### Quick Demo

- **Local execution**: Follow the steps above
- **CI/CD results**: Check the latest test runs in [GitHub Actions](https://github.com/fernandokuriabbat/uiTestingPlayground/actions)

---

## 📁 Project Layout

```
ui-testing-playground/
├── playwright.config.ts      # Playwright configuration (projects, timeouts, reporter)
├── package.json              # devDependencies and metadata
├── tests/                    # Test specs
│   └── homePage.spec.ts     # Main test file
├── page-objects/            # Page Object Model classes (one per tested page)
│   ├── basePage.ts          # Base page with common functionality
│   ├── pageManager.ts       # Centralized page object manager
│   └── [PageName]Page.ts    # Individual page objects
├── utils/                   # Utility helper functions
│   └── fileHelpers.ts       # File creation and cleanup utilities
└── .github/workflows/       # CI workflow
    └── playwright.yml       # GitHub Actions configuration
```

---

## 💻 How the Code is Organized

- **Page Objects** follow a consistent pattern: locators (private), constructor(page), public actions, then private helpers
- **Tests** use a `PageManager` to obtain page objects and call their public actions
- **Assertions** prefer Playwright `Locator` APIs and web-first assertions like `toBeVisible`, `toHaveText`, and `toHaveAttribute`
- **Geometric checks** (offscreen/overlap) use `getBoundingClientRect()` via `locator.evaluate(...)`
- **Utility functions** are extracted to `utils/` for reusability across tests

### Code Example

This example demonstrates the style used in this repo (POM + web-first assertion):

```ts
import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async({page}) => {
    await page.goto('https://www.uitestingplayground.com/')
})

test('navigate to dynamic ID page and click on button with dynamic ID', async ({page}) => {
    const pm = new PageManager(page);
    await pm.onHomePage().navigateToDynamicIdPage();
    await page.waitForURL(/\/dynamicid$/);
    await pm.onDynamicIdPage().clickOnButtonWithDynamicId();  
})
```

---

## ✨ Best Practices Used

- ✅ Use descriptive page object names: `HomePage`, `VisibilityPage`, `ProgressBarPage`, etc.
- ✅ Keep locators in one place (constructor) and mark them `private readonly`
- ✅ Favor `expect(locator).toHaveText()` / `toHaveAttribute()` which auto-wait for updates
- ✅ Use small, deterministic tests that each assert one behavior
- ✅ Extract common helpers (e.g., `isOffscreen`, `isCovered`) to `BasePage` or `utils/` when shared
- ✅ Follow consistent naming conventions and code structure
- ✅ Implement proper cleanup in test hooks (e.g., `test.afterAll()`)

---

## 🔄 CI/CD

The GitHub Actions workflow runs on every push and pull request, executing the full test suite across multiple browsers.

**Features:**
- Automated test execution on push/PR
- Cross-browser testing (Chromium, Firefox, WebKit)
- HTML report generation and artifact upload
- Screenshots and traces for failed tests
- Retry logic for flaky tests (2 retries on CI)

**View Results:**
- Check the [Actions tab](https://github.com/fernandokuriabbat/uiTestingPlayground/actions) for latest runs
- Download `playwright-report` artifact for detailed HTML reports
- Review trace files for debugging failed tests

---

## 📈 Test Results

- **Total Tests**: 23 scenarios
- **Browsers Tested**: Chromium, Firefox, WebKit
- **CI Status**: [![CI](https://github.com/fernandokuriabbat/uiTestingPlayground/actions/workflows/playwright.yml/badge.svg)](https://github.com/fernandokuriabbat/uiTestingPlayground/actions/workflows/playwright.yml)
- **Test Execution**: Automated via GitHub Actions on every push/PR
- **Reports**: HTML reports with screenshots and traces for failed tests

---

## 📝 Notes for Hiring Managers

This repository serves as a **portfolio demonstration** of my Playwright automation skills. Key highlights:

- ✅ **Production-ready code**: Follows Playwright best practices and industry standards
- ✅ **Maintainable architecture**: Clean Page Object Model implementation
- ✅ **CI/CD integration**: Fully automated test execution pipeline
- ✅ **Cross-browser coverage**: Tests run on all major browsers
- ✅ **Real-world scenarios**: Covers common UI testing challenges (AJAX, delays, dynamic content, file uploads)

**Known Limitations:**
- The "Click" scenario is intentionally skipped on WebKit due to anti-automation design in the demo application (documented in test code)
- All other UITestingPlayground scenarios are fully automated and validated across supported browsers

**Next Steps**: Continue monitoring CI results, refreshing dependencies, and expanding test data/edge cases as the site evolves.

---

## 🤝 How to Contribute / Extend

- **To add a new page object**: Create `page-objects/YourPageNamePage.ts` with locators, actions, and helpers
- **To add a new test**: Create a spec in `tests/` (consider one file per page/feature for scalability)
- **Best practices**: Keep tests readable and small. Use `PageManager` to access page objects from tests

---

## 📧 Contact & Portfolio

- **GitHub**: [@fernandokuriabbat](https://github.com/fernandokuriabbat)
- **Repository**: [ui-testing-playground](https://github.com/fernandokuriabbat/uiTestingPlayground)
- **CI/CD Status**: [GitHub Actions](https://github.com/fernandokuriabbat/uiTestingPlayground/actions)

---

**Looking for opportunities**: Open to Junior QA Automation Engineer roles. This project demonstrates my commitment to learning and applying best practices in test automation.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
