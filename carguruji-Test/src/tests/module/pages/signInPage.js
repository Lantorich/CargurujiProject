import { t, Selector } from "testcafe";
import homepage from "../pages/homePage";
import testData from "../testData";

class SignInPage{

    selectCreateEmailField = Selector('[id="email_create"]');
    selectCreateAnAccountButton = Selector('span').withText('Create an account');
    selectSignInEmailAddressField = Selector('[id="email"]');
    selectSignInPasswordField = Selector('[id="passwd"]');
    selectSignInLink = Selector('a').withText('Sign in');
    selectForgotPasswordLink = Selector('a').withText('Forgot your password?');
    selectAuthenticationButton = Selector('a').withText('Authentication');
    selectReturnToHomeButton = Selector('a').withText('Return to Home');
    selectSignButton = Selector ('span').withText('Sign in');
    wrongPassword = Selector('.alert.alert-danger')
    wrongEmail = Selector('.alert.alert-danger')
    blankEmailAndPassword = Selector('.alert.alert-danger')

    async createAccountInCarguruji(randomEmail){
    await t.click(this.selectSignInLink)
           .wait(2000)
           .typeText(this.selectCreateEmailField, randomEmail)
           .click(this.selectCreateAnAccountButton)
           console.log('User email created successfully')  
    }

    async signInToCarguruji (){
        await t  
               .click(this.selectSignInLink) 
               .typeText(this.selectSignInEmailAddressField, testData.Email)
               .typeText(this.selectSignInPasswordField, testData.Password)
               .click(this.selectSignButton)
               console.log('User logged in Successfully');
    }
    async useWrongPassword(){
        await t
              .click(this.selectSignInLink)
              .typeText(this.selectSignInEmailAddressField, testData.Email1)
              .click(this.selectSignButton) 
              .expect(this.wrongPassword.exists).ok();
              console.log('User logged in with wrong password');
    } 
    async   useWrongEmail(){
        await t
              .click(this.selectSignInLink)
              .typeText(this.selectSignInPasswordField, testData.Password)
              .click(this.selectSignButton)
              .expect(this.wrongEmail.exists).ok();
              console.log('User logged in with wrong email');
    }
    async useBlankEmailAndPassword(){
        await t
              .click(this.selectSignInLink)
              .click(this.selectSignButton)
              .expect(this.blankEmailAndPassword.exists).ok();
              console.log('User logged in with blank Crediential');
            

        }
}
export default new SignInPage
