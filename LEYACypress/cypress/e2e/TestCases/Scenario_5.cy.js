/// <reference types="cypress" />


const website= require("../../../cypress.env.json")
 

it.only('Validate the environment in dark mode" ', () => {
 /*  Change the background to dark mode. Check if the dark mode has been successfully applied to the website." */
 
 cy.visit(website.url);

 cy.get('div[id="darkmode"]').should('be.visible').click();   
 cy.get('body').should('have.css', 'background-color', 'rgb(30, 31, 30)'); 

/* cy.get('link[data-role="darktheme"]').invoke('removeAttr', 'disabled');
 cy.get('link[data-role="darktheme"]').should('not.have.attr', 'disable');
 cy.get('body').should('have.css', 'background-color', 'rgb(30, 31, 30)'); 
 */

});