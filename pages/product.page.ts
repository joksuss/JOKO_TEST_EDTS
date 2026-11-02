
import { Page, Locator } from '@playwright/test';

export class ProductPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Getter
    get categoryMakanan(): Locator {
        return this.page.locator("[href='/xpress/category/makanan'] > .max-h-sm");
    }
    get closeModal(): Locator {
        return this.page.locator("[color='#151823']");
    }

    get productMadu(): Locator {
        return this.page.locator(".cursor-pointer[href='/xpress/madurasa-madurasa-madu-jahe-merah-btl-160g'] .md-0");
    }

    get buttonAddToCart(): Locator {
        return this.page.locator("//button[@class='bg-primary  flex items-center gap-2 rounded-[20px] p-3 text-h2 text-white']");
    }

    // Function
    async goto(): Promise<void> {
        await this.page.goto('https://www.klikindomaret.com/');
    }

    async selectMakanan(): Promise<void> {
        await this.closeModal.click()
        await this.categoryMakanan.click();
    }

    async selectProductMadu(): Promise<void> {
        await this.productMadu.click();
    }

    async addToCart(): Promise<void> {
        await this.buttonAddToCart.click();
    }
}
