describe('Main Page User Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });
  it('Should see a button', () => {
    cy.get('button')
  });

})

    // cy.visit('http://localhost:3000', { timeout: 120000 })
