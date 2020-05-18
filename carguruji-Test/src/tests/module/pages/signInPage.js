import { t, Selector } from "testcafe";
import homepage from "../pages/homePage";

class SignInPage{

    selectCreateEmailField = Selector('[id="email_create"]');
    selectCreateAnAccountButton = Selector('span').withText('Create an account');
    selectEmailAddressField = Selector('[id="email"]');
    selectPasswordField = Selector('[id="passwd"]');
    selectSignInLink = Selector('a').withText('Sign in');
    selectForgotPasswordLink = Selector('a').withText('Forgot your password?');
    selectAuthenticationButton = Selector('a').withText('Authentication');
    selectReturnToHomeButton = Selector('a').withText('Return to Home');


    async signInToCarguruji(randomEmail){
    await t.click(this.selectSignInLink)
           .wait(5000)
           .typeText(this.selectCreateEmailField, randomEmail)
           .click(this.selectCreateAnAccountButton)  
    }
    
}
export default new SignInPage
