describe('Incorrect Password', () => {

  it('should fail with wrong password', () => {
    cy.intercept('POST', '**/accounts:signInWithPassword**').as('login')

    cy.visit('https://tannu-auth.neiwa.eu/signin')

    cy.get('input[type=email]').type('random@emailprovider.fc')
    cy.get('input[type=password]').type('wrongpass')
    cy.get('button[type=submit]').click()

    cy.wait('@login').its('response.statusCode').should('eq', 400)
  })

});