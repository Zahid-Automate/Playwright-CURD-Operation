const { test, expect } = require('@playwright/test');


test('has title', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await page.locator("//a[contains(@href,'employees')]").first().click();
    await page.waitForSelector('.pagination');
    
    // Pass the page object to the function
    const maxIdx = await paginationLastButOnePage(page);
    let lastPage;
    // Check if maxIdx is valid before using it
    if (maxIdx !== null && !isNaN(maxIdx)) {
        const lastPage = maxIdx - 1;
        console.log("The last page number is " + lastPage);
        console.log(`//a[normalize-space(text())='${lastPage}']`);
        await page.locator(`//a[normalize-space(text())='${lastPage}']`).click();
    } else {
        console.log('Failed to determine the last page number.');
    }
    await page.pause();
});

async function paginationLastButOnePage(page) {
    // Get all elements with data-dt-idx attribute
    const elements = await page.$$('[data-dt-idx]');
    if (elements.length === 0) {
        console.log('No elements with data-dt-idx found.');
        return null; // Return null if no elements are found
    } else {
        const idxValues = [];
        // Extract the values of data-dt-idx and convert them to numbers
        for (const element of elements) {
            const idxValue = await element.getAttribute('data-dt-idx');
            if (idxValue !== null) {
                idxValues.push(Number(idxValue));
            }
        }
        // Find the highest value if idxValues is not empty
        if (idxValues.length > 0) {
            const maxIdx = Math.max(...idxValues);
            console.log(`The highest value of data-dt-idx is: ${maxIdx}`);
            return maxIdx; // Return the maxIdx value
        } else {
            console.log('No valid data-dt-idx values were extracted.');
            return null; // Return null if no valid values
        }
    }
}
