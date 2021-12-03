describe('Main Page User Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });
  it('Should see a header', () => {
    cy.get('.App-header')
    .should('be.visible')
  });

})