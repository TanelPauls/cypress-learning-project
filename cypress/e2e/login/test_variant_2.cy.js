describe('Custom login test', () => {

  it('logs in using custom command', () => {
    cy.login(Cypress.env('email'), Cypress.env('password'))
    cy.url().should('not.include', 'signin')
  })

})