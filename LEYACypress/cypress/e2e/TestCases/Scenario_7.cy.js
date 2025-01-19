/// <reference types="cypress" />
import { addListener } from 'process';
import {searchBook, openBook, openLateralMenu, applyFilter} from '../GenericFunctions/genericFunctions'
const website= require("../../../cypress.env.json")
const locator= require("../Locators/locators.json")

it.only('Validate the filter price" ', () => {
 /*  Validate the filter price about books. You need select Livros Menu option, add the filter < 10€. 
 Validate if the filter is added and the first 10 books price is <10€" */
 
    cy.visit(website.url);
    
    openLateralMenu('Livros');
    applyFilter('Preço','<€10');
    
    cy.get("div[class*='book-card-container']").should('exist');
    cy.get("div[class*='book-card-container']").find('.single-book-price').each(( $bookElement, index ) => {
        
        if (index <= 9) {
            const bookPrice = $bookElement.find('h6').filter(':visible').clone().find('span.cut-price').remove().end().text().trim();
            const bookFinalPriceCompare= bookPrice.replaceAll('€','').trim();
            const final= parseFloat(bookFinalPriceCompare);
            expect(final).to.be.lessThan(10);
        }
    });
});

