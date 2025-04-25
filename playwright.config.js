// @ts-check
import { defineConfig, devices } from '@playwright/test';




/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config ={
  testDir: './tests',
  expect: {
    timeout: 5000,
  },
  timeout: 30000,

  reporter: 'html',
  
  use: {
    browsername: 'chromium',
    
    headless: true,
    trace: 'on-first-retry',
  },

  
}; 
module.exports = config;
