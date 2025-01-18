/// <reference types="cypress" />
import {searchBook, openBook} from '../GenericFunctions/genericFunctions'
const website= require("../../../cypress.env.json")
const locator= require("../Locators/locators.json")

it.only('Search and confirm the description about the O Triunfo dos Porcos book', () => {
    /*Search for George.
        Verify that the book "O Triunfo dos Porcos" is displayed on the list.
        Confirm that the book description contains the words "Quinta Manor"
    */
 
    cy.visit(website.url);
    searchBook('George');
    openBook('O Triunfo dos Porcos');

    cy.get(locator.bodyPage.bookSinopse).should('include.text', 'Quinta Manor');
});