describe('Village Home User Flows', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://whole-village-be.herokuapp.com/graphql', (req) => {
  if (req.body.operationName === 'village') {
    req.reply({ fixture: 'village'});
    }
  if (req.body.operationName === 'events') {
    req.reply({ fixture: 'events' })
    }}
  )
  .visit('http://localhost:3000/villages/5')
  })

  it('Should see a header', () => {
    cy.get('h2').contains('Welcome to Skate After School!')
  })
})
