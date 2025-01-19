const selectors= require("../Locators/locators.json")

const searchBook=(bookName) => {
    cy.get(selectors.headerPage.searchInput).type(bookName);
    cy.wait(1000);
   // cy.get(selectors.headerPage.searchButton, { timeout: 20000 }).should('be.visible');
    cy.get(selectors.headerPage.searchButton).click();
    cy.get(selectors.bodyPage.bookTitle, { timeout: 30000 }).contains(bookName).should('exist');
}

const openBook=(bookName) => {
  
    cy.get(selectors.bodyPage.bookTitle).contains(bookName).click();
    cy.get(selectors.bodyPage.bookSinopse).should('exist');

}

const openLateralMenu=(menuName) => {

    cy.get(selectors.headerPage.menuBurger).should('exist').click();
    cy.get("div[class='offcanvas-body']").contains(menuName).click();
}

const applyFilter=(filterName, filterValue) => {

    cy.get(selectors.bodyPage.filterOption).should('exist').click();
    
    cy.get('div').contains(filterName).get('div').contains(filterValue).click();

    cy.get(selectors.bodyPage.filterApplyed).contains(filterValue).should('exist')
}

export default{
    searchBook,
    openBook,
    openLateralMenu,
    applyFilter

};