describe('Main Page User Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/dashboard')
  });
  it('Should see a button', () => {
    cy.get('h1')
    .should('be.visible')
  });

})

    // cy.visit('http://localhost:3000', { timeout: 120000 })
