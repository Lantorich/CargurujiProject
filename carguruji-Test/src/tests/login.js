import config from "../tests/module/config"
import homepage from "../tests/module/pages/homePage"
import signinpage from "../tests/module/pages/signInPage"



let randomEmail = '';

const fixtureName = 'signIn functionality';

fixture(fixtureName)
      .page(config.Carguruji)


.beforeEach(async t => {
  await t.maximizeWindow()
  randomEmail = `golden${Math.floor(Math.random() * 1000)}@gmail.com`;
})


test( `${fixtureName} signIn to carguruji`, async t => {
  
  await signinpage.signInToCarguruji(randomEmail);
  await t.takeScreenshot();
  
});
