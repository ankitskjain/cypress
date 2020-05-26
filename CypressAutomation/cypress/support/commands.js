require('cypress-xpath')
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// -- This is a parent command --
 Cypress.Commands.add("searchGoogle", (text) => { 
    cy.get('[name=q]').type(text)
    cy.get('[name=q]').type('{esc}')
    cy.get('.FPdoLc.tfB0Bf .gNO89b').click()
    cy.wait(1000) 
})

// -- This is a parent command --
 Cypress.Commands.add("searchYourItem", (text) => { 
    cy.get('#search_query_top').type(text)
    cy.get('[name=submit_search]').click()
    cy.wait(1000)
})

// -- This is a parent command --
 Cypress.Commands.add("addItemToCart", (text) => {
    cy.get('.available-now').scrollIntoView()
    cy.wait(1000)
    cy.get('[title="Add to cart"]').click()
})


 Cypress.Commands.add("proceedToCheckout", (text) => {
    cy.get('[title="Proceed to checkout"]').click()
    cy.wait(1000)
    cy.get('.button.standard-checkout').click()
    cy.wait(2000)
})
  
 Cypress.Commands.add("signIn", (text) => {
    cy.get('#email').type('ank@vmail.com')
    cy.wait(1000)
    cy.get('#passwd').type('password')
    cy.wait(1000)
    cy.get('#SubmitLogin').click();
})

 Cypress.Commands.add("checkError", (text) => {
    cy.get('#center_column .alert-danger p').should('have.text', 'There is 1 error')
    cy.get('#center_column .alert-danger li').should('have.text', 'Authentication failed.')
    cy.wait(1000)
})

 Cypress.Commands.add("selectContactUS", (text) => {
    cy.get('#contact-link').click()
    cy.url().should('include', 'index.php?controller=contact')
})

 Cypress.Commands.add("fillTheForm", (text) => {
    cy.get('#id_contact').select('Customer service')
    cy.get('#email').type('ayansh@ayansh.vom')
    cy.get('#id_order').type('1987')
    //cy.get('#uniform-fileUpload').click()
    cy.get('#message').type('this is an automation form')
    cy.wait(5000)
})

 Cypress.Commands.add("submit", (text) => {
    cy.get('#submitMessage').click()
    cy.wait(1000)
})

 Cypress.Commands.add("verificationOfSubmition", (text) => {
    cy.get('.alert.alert-success').should('have.text', 'Your message has been successfully sent to our team.')
    cy.wait(1000)
})

 Cypress.Commands.add("addItemsToCompare", (text) => {
    cy.get('#block_top_menu > ul > li:nth-child(1) > a').click()
    cy.wait(2000)
    cy.xpath('//*[@id="center_column"]/ul/li[1]/div/div[3]/div[2]/a').click()
    cy.wait(2000)
    cy.xpath('//*[@id="center_column"]/ul/li[2]/div/div[3]/div[2]/a').click()
})

  Cypress.Commands.add("compare", (text) => {
   cy.xpath('//*[@id="center_column"]/div[3]/div[2]/form/button').click()
   cy.wait(1000)
   cy.elementTextEqual('//*[@id="product_comparison"]/tbody/tr[2]/td[2]', '//*[@id="product_comparison"]/tbody/tr[2]/td[3]')
   cy.elementTextEqual('//*[@id="product_comparison"]/tbody/tr[3]/td[2]', '//*[@id="product_comparison"]/tbody/tr[3]/td[3]')
  })

   Cypress.Commands.add("elementTextEqual", (element1, element2) => {
	 cy.xpath(element1).then(($btn) => {
	 const txt = $btn.text()
     cy.xpath(element2).should(($btn2) => {
	   expect($btn2.text()).to.eq(txt)
     })
   })
     
})