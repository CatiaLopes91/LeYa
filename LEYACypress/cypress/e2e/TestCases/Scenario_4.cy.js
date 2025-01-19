/// <reference types="cypress" />
import {searchBook, openBook} from '../GenericFunctions/genericFunctions'
const website= require("../../../cypress.env.json")
const locator= require("../Locators/locators.json")

it.only('Add 1 book in the basket" ', () => {
 /*  Search for the book "1984."  Add the book to the basket.  Confirm that the number of items in the basket is "1."" */
 
    cy.visit(website.url);
    searchBook('1984');
    openBook('1984');
    
    cy.get('a').contains('Comprar').should('be.visible').first().click();
    cy.get(locator.headerPage.basketIcon).parent().invoke('attr', 'data-tag').should('eq','1');
 

});