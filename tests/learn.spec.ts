import { test, expect } from '@playwright/test';
import { link } from 'node:fs';

test("learn pw on website formy project", async ({ page }) => {
    // Arrange:
    await page.goto('https://formy-project.herokuapp.com/')
    
    // Act:
    // await page.locator('[href="/autocomplete"]').nth(1).click() //sama aja
    await page.getByRole('link',{name: "Autocomplete"}).click()
    await page.waitForTimeout(3000)
    
    // Assert:
    await expect(page).toHaveURL('https://formy-project.herokuapp.com/autocomplete')
    // await page.pause();
    

    //Menggunakan locator dari Playwright UI
    // id => #autocomplete
    // class => .autocomplete
    // attr => [id="autocomplete"] or [type="submit"]
    // class => .box -> 2 duplicate ? page.locator(".box").last(); // .first()
   //  await page.getByRole('textbox', { name: 'Address', exact: true }).fill('Jakarta Pusat') //sama aja tapi kalo web nya bahasa indo ga ke baca
    await page.locator('[id="autocomplete"]').fill('Jakarta Pusat')
    await page.getByRole('textbox', { name: 'Street address', exact: true }).fill('Jalan Penegak')
    await page.getByRole('textbox', { name: 'Street address 2' })
    await page.getByRole('textbox', { name: 'City' }).fill('Klaten')
    await page.getByRole('textbox', { name: 'State' }).fill('Klaten')
    await page.getByRole('textbox', { name: 'Zip code' }).fill('Klaten')
    await page.getByRole('textbox', { name: 'Country' }).fill('Klaten')



    
});