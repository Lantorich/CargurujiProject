import { t, Selector } from "testcafe";
import signinpage from "../pages/signInPage" 
import testData from "../testData";



class ForgotPassword{

    selectForgotEmailField = Selector('[id="email"]');
    selectRetreivePasswordButton = Selector('span').withText('Retrieve Password');
    selectBackToLoginButton = Selector('span').withText('Back to Login');
    selectErrorEmailAddress = Selector('li').withText('There is no account registered for this email address.');
    verifyForgotConfirmationEmail = Selector('.alert.alert-success');
   


    async forgotUserPassword(){
    await t 
          .click(signinpage.selectSignInLink)
          .click(signinpage.selectForgotPasswordLink)
          .typeText(this.selectForgotEmailField, testData.Email1)
          .click(this.selectRetreivePasswordButton)
          .wait(2000)
          await t.expect(this.verifyForgotConfirmationEmail.exists).ok
          console.log('User change Password Successfully');

    }
}
export default new ForgotPassword