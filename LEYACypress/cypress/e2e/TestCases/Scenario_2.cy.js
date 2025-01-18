/// <reference types="cypress" />
import {searchBook, openBook} from '../GenericFunctions/genericFunctions'
const website= require("../../../cypress.env.json")
const locator= require("../Locators/locators.json")

it.only('Validate some data about the book "1984" ', () => {
 /*   Search for the book "1984."  Validate that the author is "George Orwell."  Confirm that the ISBN is "9789722071550."
Check that the number of pages is "344." Ensure that the dimensions of the book are "235 x 157 x 23 mm." */
 
    cy.visit(website.url);
    searchBook('1984');
    openBook('1984');

    //validate author
    cy.get('section.author a.nome_autor').should('have.text', 'GEORGE ORWELL')
    cy.get("h2").contains('Detalhes').parent().contains('ISBN').should('have.text', 'ISBN: 9789722071550');
    cy.get("h2").contains('Detalhes').parent().contains('Páginas').should('have.text', 'Páginas: 344');
    cy.get("h2").contains('Detalhes').parent().contains('Dimensões').should('have.text', 'Dimensões: 235 x 157 x\n 23 mm\n ');
 
    
 
});