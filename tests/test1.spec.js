import { test, expect } from '@playwright/test';

test.describe('Test with Annotations', () => {
    test('has title', {
        tag: '@slow',
        annotation: [
            { type: 'BugFix', description: 'BUGID#45443' },
            { type: 'Sprint 39', description: 'Patch Release' }
        ]
    }, 
        async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await page.waitForTimeout(5000);
        await expect(page).toHaveTitle('playwright');
    });
});