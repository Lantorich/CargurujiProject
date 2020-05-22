import config from "../tests/module/config"
import homepage from "../tests/module/pages/homePage"
import testData from "../tests/module/testData"


const fixtureName = 'search functionality';

fixture(fixtureName)
      .page(config.Carguruji)


.beforeEach(async t => {
  await t.maximizeWindow()

})


test( `${fixtureName} Search for product`, async t => {
  await homepage.searchForProduct(testData.product);
  await t.takeScreenshot();
  
});

test('hdhfhfh',async t =>{

})