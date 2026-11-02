import { Page} from '@playwright/test';
import { test, expect } from '@playwright/test';

export class modal{
    constructor(private page:Page){}

    async goto(){
        await this.page.goto('https://formy-project.herokuapp.com/')

        await this.page.getByRole('link', { name: 'Modal' }).click();

        await expect(this.page).toHaveURL('https://formy-project.herokuapp.com/modal');
    }
    async clickBtnModal() {
        await this.page.locator('#modal-button').click();
        await this.page.getByText('Close').click();
        
    }
}
