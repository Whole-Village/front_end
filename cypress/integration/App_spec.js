describe('Main Page User Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });
  it('Should see an input', () => {
    cy.get('input')
  });

})

    cy.visit('http://localhost:3000', { timeout: 120000 })