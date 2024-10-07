import { faker } from '@faker-js/faker';

export async function paginationGoToLastPage(page) {
    // Wait for pagination selector to ensure elements are present
    await page.waitForSelector('.pagination');
    // Get all elements with data-dt-idx attribute
    const elements = await page.$$('[data-dt-idx]');
    if (elements.length === 0) {
        console.log('No elements with data-dt-idx found.');
        return null; // Return null if no elements are found
    } 

    const idxValues = [];

    // Extract the values of data-dt-idx and convert them to numbers
    for (const element of elements) {
        const idxValue = await element.getAttribute('data-dt-idx');
        if (idxValue !== null) {
            idxValues.push(Number(idxValue));
        }
    }

    // Find the highest value if idxValues is not empty
    let maxIdx = null;
    if (idxValues.length > 0) {
        maxIdx = Math.max(...idxValues);
        //console.log(`The highest value of data-dt-idx is: ${maxIdx}`);
    } else {
        console.log('No valid data-dt-idx values were extracted.');
        return null; // Return null if no valid values
    }
    
    // Check if maxIdx is valid before using it
    if (maxIdx !== null && !isNaN(maxIdx)) {
        const lastPage = maxIdx - 1;
        //console.log("The last page number is " + lastPage);   
        // Click on the last page link using the calculated lastPage value
        await page.locator(`//a[normalize-space(text())='${lastPage}']`).click();
    } else {
        console.log('Failed to determine the last page number.');
    }
}


export function createRandomUser() {
    return {
      userId: faker.string.uuid(),
      randomName : faker.person.fullName(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }