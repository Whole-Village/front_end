describe('Main Page User Flows', () => {

  it('Should see my villages', () => {
    cy.intercept('POST', 'https://whole-village-be.herokuapp.com/graphql', (req) => {
  if (req.body.operationName === 'user') {
    req.reply({ fixture: 'user'});
  }
})
.visit('http://localhost:3000/dashboard');



})
})
