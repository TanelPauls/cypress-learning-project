describe('Login Page', () => {

  it('password is hidden', () => {
    cy.visit('https://tannu-auth.neiwa.eu/signin')
    cy.get('input[type=password]').should('have.attr', 'type', 'password')
  })

});