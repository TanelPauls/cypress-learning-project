describe('Login Page', () => {

  it('shows validation for emaill fields', () => {
    cy.visit('https://tannu-auth.neiwa.eu/signin')
    cy.get('input[type=email]').type('notemail')
    cy.get('input[type=password]').type('123456')
    cy.get('button[type=submit]').click()
    cy.get('input[type=email]').then(el => {
        expect(el[0].validationMessage).to.not.be.empty
    })
  })

});