Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://tannu-auth.neiwa.eu/signin')
  cy.get('input[type=email]').type(email)
  cy.get('input[type=password]').type(password)
  cy.get('button[type=submit]').click()
})