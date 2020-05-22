import config from "./module/config"
import account from "./module/pages/accountCreationPage"
import signinpage from "./module/pages/signInPage"




let randomEmails = config.randomEmail;

const fixtureName = 'Create account functionality,';

fixture(fixtureName)
      .page(config.Carguruji)


.beforeEach(async t => {
  await t.maximizeWindow()
  
})


test( `${fixtureName}  create an account carguruji`, async t => {

  await signinpage.createAccountInCarguruji(randomEmails);
  console.log(randomEmails);
  await account.createCargujiAccount();

});
