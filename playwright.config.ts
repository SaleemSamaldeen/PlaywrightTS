// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout: 60 *1000,
  expect: { 
    timeout: 60 * 10000 
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: false,
  /* Retry on CI only */
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'],['./tests/reporters/customReporter.ts']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    video: 'on',
    screenshot: 'on',
   //headless:false,
   // geolocation: {latitude:50000, longitude: 5000},
   // permissions: ['gelocation']
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], video: 'on', headless: false, channel: 'chrome',
      viewport:{width:1920 , height:1080} }, // chrome view port size to have maximized browser window
      retries: 0
    }, 

 /**    {
       name: 'chromium', 
       use: {  ...devices['iPad Mini']}, // to run in any devices
     },**/

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
  globalSetup:`./tests/utils/globalSetup.ts`
});

