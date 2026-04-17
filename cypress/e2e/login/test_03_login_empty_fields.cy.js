describe('Login empty fields', () => {

  it('shows validation for empty fields', () => {
    cy.visit('https://tannu-auth.neiwa.eu/signin')

    cy.get('button[type=submit]').click()

    cy.get('input[type=email]').then(el => {
        expect(el[0].validationMessage).to.not.be.empty
    })
  })

});