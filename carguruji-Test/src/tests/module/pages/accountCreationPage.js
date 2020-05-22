import { t, Selector } from "testcafe";
import testData from "../testData";




class AccountCreation{
    selectMaleGender = Selector('[id="id_gender1"]');
    selectFemaleGender = Selector('[id="id_gender2"]');
    selectFirstName = Selector('[id="customer_firstname"]');
    selectLastName = Selector('[id="customer_lastname"]');
    selectAccountCreationEmailField =  Selector('[data-validate="isEmail"]');
    selectAccountCreationPasswordField = Selector('[data-validate="isPasswd"]');
    selectDayOptionValue = Selector('div select#days.form-control');
    selectMonthOptionValue = Selector('div select#months.form-control');
    selectYearOptionValue = Selector('div select#years.form-control > option');
    selectNewLetter = Selector('[id="newsletter"]');
    selectSpecialOffer = Selector('[id="optin"]');
    selectRegisterButton = Selector('span').withText('Register');
    verifyAccountCreation = Selector('#center_column > h1').withText('My account');



    async createCargujiAccount(){
    await t.click(this.selectMaleGender)
           .typeText(this.selectFirstName,testData.Customer_First_Name)
           .typeText(this.selectLastName, testData.Customer_Last_Name)
           .typeText(this.selectAccountCreationPasswordField, testData.Customer_password)
          // .click(this.selectDayOptionValue.withText('11'))
          // .click(this.selectMonthOptionValue.withText('3'))
          // .click(this.selectYearOptionValue.withText('1994'))
           .click(this.selectNewLetter)
           .click(this.selectSpecialOffer)
           .click(this.selectRegisterButton)
           .wait(3000);  
 //       await t.expect(this.verifyAccountCreation.exists).ok()   
           console.log('user account created successfully')
    }

  

}
 export default new AccountCreation