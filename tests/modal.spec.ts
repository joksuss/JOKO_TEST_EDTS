import { test, expect } from '@playwright/test';
import testData from '../test-data/positive/form.json';
import { modal } from '../pages/modal.page'; //penamaan modal sama dengan di modal.page

test("Test Modal", async ({ page }) => {
    // Arrange:
    const modals = new modal(page); //intansiasi dari pemanggilan modal agar bisa di gunakan
    
    // Act:
    await modals.goto();
    await modals.clickBtnModal();
    // Assert:
    await expect(page.getByRole('heading', { name: 'Modal title' })).toBeHidden();
});
