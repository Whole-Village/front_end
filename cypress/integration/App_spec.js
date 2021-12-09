describe('Main Page User Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/dashboard')
  });
  it('Should see my villages', () => {
    cy.get('h1').contains('My Villages')
  });
})
