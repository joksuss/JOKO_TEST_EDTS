import { test, expect } from '@playwright/test';
import{formSubmit} from '../pages/form.page'; //penamaan formSubmit mengikuti di form.page
import testData from '../test-data/positive/form.json'; 

testData.positive.forEach(tc => {
    test(tc.name, async ({ page }) => {
        const forms = new formSubmit(page); //intasnsiasi untuk pemanggilan formSubmit agar bisa di gunakan
        
        // buka halaman
        await forms.goto();

        // isi form pakai data JSON
        await forms.fillForm(tc.data);

        // submit
        await forms.submit();

        // assert
       await expect(page).toHaveURL('https://formy-project.herokuapp.com/thanks')
    });
});

testData.negative.forEach(tc =>{
     test(tc.name, async ({ page }) => {
        const forms = new formSubmit(page);
        
        // buka halaman
        await forms.goto();

        // isi form pakai data JSON
        await forms.fillForm(tc.data);

        // submit
        await forms.submit();

        // assert
       await expect(page).toHaveURL('https://formy-project.herokuapp.com/thanks')
    });
});
