import { Page} from '@playwright/test';
import { test, expect } from '@playwright/test';

export class autocompletePage{
    constructor(private page:Page){}

    async goto(){
        await this.page.goto('https://formy-project.herokuapp.com/')

        await this.page.getByRole('link',{name: "Autocomplete"}).click()
        await this.page.waitForTimeout(3000)
            
        // Assert:
        await expect(this.page).toHaveURL('https://formy-project.herokuapp.com/autocomplete')
    }

    async fillAddress(address: string){
        await this.page.locator('#autocomplete').fill(address)
    }

    async fillStreetAddress(street: string){
        await this.page.locator('#street_number').fill(street)
    }

    async fillStreetAddressDua(route: string){
        await this.page.locator('#route').fill(route)
    }
    async clickSubmit(){
        await this.page.locator('.btn').click()
    }

    async fillCity(city: string){
        await this.page.locator('#locality').fill(city)
    }

    async fillState(state:string) {
        await this.page.locator('#administrative_area_level_1').fill(state)
    }

    async fillZipCode(zipCode: string){
        await this.page.locator('#postal_code').fill(zipCode)
    }
    async verifyThankyouPage(){
        await expect(this.page).toHaveURL('https://formy-project.herokuapp.com/thanks');
    }



    
}