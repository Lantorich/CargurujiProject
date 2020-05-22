import forgot from "./module/pages/forgotPasswordPage"
import config from "./module/config"





const fixtureName = 'Forgot Password functionality';

fixture(fixtureName)
      .page(config.Carguruji)


.beforeEach(async t => {
  await t.maximizeWindow()

})


test( `${fixtureName} User forgot Password.`, async t => {
    await forgot.forgotUserPassword(); 
});
