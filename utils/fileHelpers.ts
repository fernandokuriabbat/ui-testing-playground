import { Locator, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Helper function to create a test file and return its absolute path
 * @param fileName - Name of the file to create
 * @param content - Content to write to the file
 * @returns Absolute path to the created file
 */
export function createTestFile(fileName: string, content: string): string {
    const testDir = path.join(__dirname, '..', 'test-files');
    
    // Create test-files directory if it doesn't exist
    if (!fs.existsSync(testDir)) {
        fs.mkdirSync(testDir, { recursive: true });
    }
    
    const filePath = path.join(testDir, fileName);
    fs.writeFileSync(filePath, content);
    
    return filePath;
}

/**
 * Helper function to clean up test files
 * @param filePath - Path to the file to delete
 */
export function deleteTestFile(filePath: string): void {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
}

/**
 * Helper function to clean up the entire test-files directory
 */
export function cleanupTestFiles(): void {
    const testDir = path.join(__dirname, '..', 'test-files');
    if (fs.existsSync(testDir)) {
        const files = fs.readdirSync(testDir);
        files.forEach(file => {
            const filePath = path.join(testDir, file);
            if (fs.statSync(filePath).isFile()) {
                fs.unlinkSync(filePath);
            }
        });
    }
}

export class WebHelper {
  /**
   * Wait until a locator's text equals the expected value.
   */
  async waitForText(
    locator: Locator,
    expectedText: string,
    timeout = 15000 
  ): Promise<void> {
    await expect(locator).toHaveText(expectedText, { timeout });
  }

  async waitForTextToChange(
    locator: Locator,
    initialText: string,
    timeout = 15000
  ): Promise<void> {
    await expect(locator).not.toHaveText(initialText, { timeout });
  }

  async waitForEnabled(locator: Locator, timeout = 15000): Promise<void> {
    await expect(locator).toBeEnabled({ timeout });
  }

}

  

