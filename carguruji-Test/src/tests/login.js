import config from "./module/config"
import account from "./module/pages/accountCreationPage"
import signinpage from "./module/pages/signInPage"
import testData from "./module/testData";
import signInPage from "./module/pages/signInPage";



const fixtureName = 'signIn functionality';

fixture(fixtureName)
      .page(config.Carguruji)


.beforeEach(async t => {
  await t.maximizeWindow()

})


test( `${fixtureName} signIn to carguruji`, async t => {
    await signinpage.signInToCarguruji();
});

test( `wrong Password and correct email.`, async t => {
    await signinpage.useWrongPassword();
    
});

test( `wrong email and correct password.`, async t => {
    await signinpage.useWrongEmail();
    
});

test( `blank email and password.`, async t => {
    await signinpage.useBlankEmailAndPassword();

});

