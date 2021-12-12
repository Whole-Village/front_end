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

  it('Should see the app title', () => {
    cy.get('.app-title')
    .should('be.visible')
  })

  it('Should see the NavBar', () => {
    cy.get('.start-village-btn')
    .contains('Start Village')
    .should('be.visible')
    cy.get('.my-events-btn')
    .contains('My Events')
    .should('be.visible')
    cy.get('.my-dashboard-btn')
    .contains('My Dashboard')
    .should('be.visible')
    cy.get('.my-account-btn')
    .contains('Manage Account')
    .should('be.visible')
  })

  it('Should see a header', () => {
    cy.get('h2')
    .contains('Welcome to Skate After School!')
    .should('be.visible')
  })

  it('Should see a sub header', () => {
    cy.get('.events-sub')
    .contains('Village Events')
    .should('be.visible')
    cy.get('.villagers-sub')
    .contains('Villagers')
    .should('be.visible')
  })

  it('Should see an events section', () => {
    cy.get('.events')
    .should('be.visible')
  })

  it('Should see all upcoming events in the events section', () => {
    cy.get(':nth-child(1) > .event-date')
    .contains('2022-06-29')
    .should('be.visible')
    cy.get(':nth-child(1) > .event-card')
    .should('be.visible')
    cy.get(':nth-child(1) > .event-card > :nth-child(1)')
    .contains('Event: Anna\'s Birthday Bonanza')
    .should('be.visible')
    cy.get(':nth-child(1) > .event-card > :nth-child(2)')
    .contains('Date: 2022-06-29')
    .should('be.visible')
    cy.get(':nth-child(1) > .event-card > :nth-child(3)')
    .contains('Description: Anna\'s Birthday Party!')
    .should('be.visible')
    cy.get(':nth-child(1) > .event-card > :nth-child(4)')
    .contains('Start time: 20:00')
    .should('be.visible')
    cy.get(':nth-child(1) > .event-card > :nth-child(5)')
    .contains('Parent Presence Required')
    .should('be.visible')
    cy.get(':nth-child(2) > .event-date')
    .contains('2022-11-11')
    .should('be.visible')
    cy.get(':nth-child(2) > .event-card')
    .should('be.visible')
    cy.get(':nth-child(2) > .event-card > :nth-child(1)')
    .contains('Event: Taylor Swift Album Release Party')
    .should('be.visible')
    cy.get(':nth-child(2) > .event-card > :nth-child(2)')
    .contains('Date: 2022-11-11')
    .should('be.visible')
    cy.get(':nth-child(2) > .event-card > :nth-child(3)')
    .contains('Description: Let\'s get together to listen to T Swift\'s new ablum and cry togehter!')
    cy.get(':nth-child(2) > .event-card > :nth-child(4)')
    .contains('Start time: 11:00')
    cy.get(':nth-child(2) > .event-card > :nth-child(5)')
    .contains('Parent Presence Required')
  })

  it('Should see a villagers section', () => {
    cy.get('.villagers')
    .should('be.visible')
  })

  it('Should see a create new event button', () => {
    cy.get('.create-event')
    .should('be.visible')
  })

  it('Should see a new event form when the new event button is clicked', () => {
    cy.get('.create-event')
    .click()
    cy.get('.create-event')
    .should('be.visible')
  })

})
