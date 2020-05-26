/// <reference types="cypress" />

context('google', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
  })

  it('Checkout with wrong credentials', () => {
    cy.searchYourItem('Top')
    cy.addItemToCart('in stock')
    cy.proceedToCheckout();
    cy.signIn();
    cy.checkError();
  })

  it('Contact Us Verification', () => {
    cy.selectContactUS();
    cy.fillTheForm();
    cy.submit();
    cy.verificationOfSubmition();
  })

  it('Compare Functionality', () => {
     cy.addItemsToCompare();
     cy.compare();
  })

})
