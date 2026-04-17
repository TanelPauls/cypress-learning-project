describe('Correct Password', () => {

  it('logs in with valid credentials', () => {
    cy.visit('https://tannu-auth.neiwa.eu/signin');

    cy.get('input[type=email]').type(Cypress.env('email'));
    cy.get('input[type=password]').type(Cypress.env('password'))
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/home');
  });

});