import { test, expect } from '@playwright/test';
import{autocompletePage} from '../pages/autocomplete.page';
import autocomplete from '../test-data/autocomplete.json';

test("Submit Form autocomplete", async ({ page }) => {
    // Arrange:
    const form = new autocompletePage(page)
    
    // Act:
    await form.goto()
    await form.fillAddress(autocomplete.address)
    await form.fillStreetAddress(autocomplete.street)
    await form.fillStreetAddressDua(autocomplete.streetDua)
    await form.fillCity(autocomplete.city)
    await form.fillState(autocomplete.state)
    await form.fillZipCode(autocomplete.zipCode)
        
    // Assert:
    
});

test("Submit address Auto complate", async ({ page }) => {
    // Arrange:
    const form = new autocompletePage(page)
    
    // Act:
    await form.goto()
    await form.fillAddress(autocomplete.address)
    // Assert:
    
});

