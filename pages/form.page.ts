import { Page} from '@playwright/test';
import { test, expect } from '@playwright/test';
import { educationMap, sexMap,experienceMap } from '../pages/helper/locator-map'; //Panggil untuk digunakan dropdownnya

export class formSubmit{
    constructor(private page:Page){}

     async goto(){
        await this.page.goto('https://formy-project.herokuapp.com/')

        await this.page.getByRole('link', { name: 'Form', exact: true }).click()
        await this.page.waitForTimeout(3000)
        
        // Assert:
        await expect(this.page).toHaveURL('https://formy-project.herokuapp.com/form')
    }

    async fillFirstName(FirstName: string){
        await this.page.locator('#first-name').fill(FirstName)

    }
    async fillLastName(LastName: string){
        await this.page.locator('#last-name').fill(LastName)

    }
    async fillJobTitle(jobTitle: string){
        await this.page.locator('#job-title').fill(jobTitle)

    }

    async radioHighSchool(){
        await this.page.locator('#radio-button-1').click

    }

    async fillForm(data: any) {
        await this.page.locator('#first-name').fill(data.firstName);
        await this.page.locator('#last-name').fill(data.lastName);
        await this.page.locator('#job-title').fill(data.jobTitle);
        await this.page.locator(educationMap[data.education]).check();
        await this.page.locator(sexMap[data.sex]).check();
        await this.page.locator('#select-menu').selectOption(data.experience);
        await this.page.locator('#datepicker').fill(data.date);

        await this.page.waitForTimeout(3000);
    }
    async submit() {
        await this.page.getByRole('button', { name: 'Submit' }).click();

    }







}