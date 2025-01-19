/// <reference types="cypress" />
import {searchBook, openBook} from '../GenericFunctions/genericFunctions'
const website= require("../../../cypress.env.json")
const locator= require("../Locators/locators.json")

it.only('Validate the author abour the book "1984" and "A Quinta dos Animais" ', () => {
 /*  Search for the book "1984." Verify that the book "A Quinta dos Animais" is authored by the same author." */
 
    var a = b =5;
    cy.log("Valor da variavel: ", b);


 cy.visit(website.url);
    searchBook('1984');
    openBook('1984');
 
    cy.get('section.author a.nome_autor').invoke('text')
    .then((bookAuthor1) =>{
   
        searchBook('A Quinta dos Animais');
        cy.get('h6.book-title').contains('A Quinta dos Animais').should('exist')
        cy.get('h6.book-title').contains('A Quinta dos Animais').click( {force: true });
   
        cy.get('section.author a.nome_autor').invoke('text')
        .then((bookAuthor2) =>{
           expect(bookAuthor1).to.equal(bookAuthor2);
        })
    })
 
});