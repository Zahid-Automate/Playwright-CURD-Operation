const { test, expect } = require('@playwright/test');
import {paginationGoToLastPage, createRandomUser} from '../utils/common.spec';



test.describe('Employee CRUD Operations', () => {
    const randomUser = createRandomUser(); // Call the function to generate a random user

    test('Add a new employee and Verify add was successfull', async ({ page }) => {
        await page.goto('http://localhost:8000/');
        console.log("Adding New Employee Name "+ randomUser.randomName);
        console.log("Adding New Employee Phone "+ randomUser.phone);
        await page.locator("//a[contains(@href,'employees')]").first().click();
        
        //Add a new employee
        await page.locator("//a[normalize-space()='Add New Employee']").click();
        await page.getByLabel('Dept :').selectOption('2');
        await page.locator("//input[@id='name']").fill(randomUser.randomName);
        await page.locator("//input[@id='phone']").fill(randomUser.phone);
        await page.locator("//input[@id='save']").click();

        // Pass the page object to the function
        await paginationGoToLastPage(page);
        const name = await page.locator("//table[@id='tb-employee']//tbody//tr[last()]//td[2]").innerText();
        expect(name).toBe(randomUser.randomName);
        const phone = await page.locator("//table[@id='tb-employee']//tbody//tr[last()]//td[3]").innerText();
        expect(phone).toBe(randomUser.phone);

    });

    test('Update the name and phone of the employee', async ({ page }) => {
        console.log("Updated Name is "+ randomUser.randomName);
        console.log("Updated Phone is "+ randomUser.phone);
        await page.goto('http://localhost:8000/');
        await page.locator("//a[contains(@href,'employees')]").first().click();
       
        // Pass the page object to the function
        await paginationGoToLastPage(page);
    
        await page.locator("//table[@id='tb-employee']//tbody//tr[last()]//td//a[@class='btn btn-primary']").click();
        await page.locator("//input[@id='name']").fill(randomUser.randomName);
        await page.locator("//input[@id='phone']").fill(randomUser.phone);
        await page.getByLabel('Dept :').selectOption('2');
        await page.locator("//input[@id='save']").click();

        //Verify the name was updated
        await paginationGoToLastPage(page);
        const name = await page.locator("//table[@id='tb-employee']//tbody//tr[last()]//td[2]").innerText();
        expect(name).toBe(randomUser.randomName);
        const phone = await page.locator("//table[@id='tb-employee']//tbody//tr[last()]//td[3]").innerText();
        expect(phone).toBe(randomUser.phone);
    });
    
});


