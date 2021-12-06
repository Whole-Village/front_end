describe('Main Page User Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });
  it('Should show header', () => {
    cy.get('header')
  });

})

    // cy.visit('http://localhost:3000', { timeout: 120000 })