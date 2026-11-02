
import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/product.page';

test('Tambah Product ke Keranjang', async ({ page }) => {
    const product = new ProductPage(page);

    await product.goto();
    await product.categoryMakanan.click();
    await product.selectProductMadu();

    await expect(product.buttonAddToCart).toBeVisible();

    await product.addToCart();

});
