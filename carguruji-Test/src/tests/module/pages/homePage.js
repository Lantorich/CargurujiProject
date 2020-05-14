import { t, Selector } from "testcafe";


 class HomePage {

   
    selectSearchField = Selector('[name="search_query"]');
    selectSearchButton = Selector('[name="submit_search"]');
    selectdisplayResult = Selector('.heading-counter');
    selectSelectWomen = Selector('a').withText('Women');
    selectDresses = Selector('a').withText('Dresses');
    selectTshirts = Selector('a').withText('T-shirts');
    selectCart = Selector('[title="View my shopping cart"]');
    selectSign = Selector('[title="Log in to your customer account"]');
    selectContactUs = Selector('a').withText('Contact us');


    

    async searchForProduct(searchTerm){
    await t
    .typeText(this.selectSearchField, searchTerm)
     .click(this.selectSearchButton)
     .expect(this.selectdisplayResult.visible).ok();
     //.expect(Selector(this.selectdisplayResult).innerText).eql('1 result has been found.')
     console.log(searchTerm);
     console.log('1 result has been found');
    

}}
export default new HomePage()