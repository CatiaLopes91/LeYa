/// <reference types="cypress" />
import { addListener } from 'process';
import {searchBook, openBook} from '../GenericFunctions/genericFunctions'
const website= require("../../../cypress.env.json")
const locator= require("../Locators/locators.json")

it.only('Validate if the category of the books" ', () => {
 /*  Validate if the category about "A Guerra dos Pobres" it's equal to "Romance" */
 
    cy.visit(website.url);
    searchBook('A Guerra dos Pobres');
    openBook('A Guerra dos Pobres');

    cy.get('nav[aria-label="breadcrumb"]').should('be.visible').first();
    cy.get('nav[aria-label="breadcrumb"]').find('ol').find('li').eq(2).contains('Romance');

    
 

});