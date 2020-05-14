import { t, Selector } from "testcafe";
 class homePage {

   constructor(){
    this.SearchField = Selector('[name="search_query"]');
    this.SearchButton = Selector('[name="submit_search"]');
    this.displayResult = Selector('span').withText('Skirt')
    this.SelectWomen = Selector('a').withText('Women');
    this.selectDresses = Selector('a').withText('Dresses');
    this.selectTshirts = Selector('a').withText('T-shirts');
    this.selectCart = Selector('[title="View my shopping cart"]');
    this.selectSign = Selector('[title="Log in to your customer account"]');
    this.selectContactUs = Selector('a').withText('Contact us');


    }

    async searchForProduct(searchTerm){
    await t
    .typeText(this.SearchField, searchTerm)
     .click(this.SearchButton)
     //.expect(this.displayResult.visible).ok();
     

    }

}


export default new homePage()