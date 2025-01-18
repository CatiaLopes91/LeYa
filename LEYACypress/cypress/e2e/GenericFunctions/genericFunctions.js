const selectors= require("../Locators/locators.json")

const searchBook=(bookName) => {
    
   
    
    cy.get(selectors.headerPage.searchInput).type(bookName);
    cy.wait(1000);
   // cy.get(selectors.headerPage.searchButton, { timeout: 20000 }).should('be.visible');
    cy.get(selectors.headerPage.searchButton).click();
    cy.get(selectors.bodyPage.bookTitle, { timeout: 30000 }).contains(bookName).should('exist');
}

const openBook=(bookName) => {

    cy.log('BOOK NAME-->');
    cy.log(bookName);

    /*cy.get("h6[class='book-title']").contains(bookName).should('be.visible');
    cy.get("h6[class='book-title']").contains(bookName).click();*/
   
    
    cy.get(selectors.bodyPage.bookTitle).contains(bookName).click();
    cy.get(selectors.bodyPage.bookSinopse).should('exist');
    
    
}


export default{
    searchBook,
    openBook

};