describe('Village Home User Flows', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://whole-village-be.herokuapp.com/graphql', (req) => {
  if (req.body.operationName === 'village') {
    req.reply({ fixture: 'village'});
    }
  if (req.body.operationName === 'events') {
    req.reply({ fixture: 'events' })
    }
    if (req.body.operationName === 'user') {
      req.reply({ fixture: 'user' })
      }}
  )
  .visit('http://localhost:3000/villages/3')
  })

  it('Should see the app title', () => {
    cy.get('.app-title')
    .should('be.visible')
  })

  it('Should see the NavBar', () => {
    cy.get('.start-village-btn')
    .contains('Start a New Village')
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

  it('Should see upcoming events in the events section', () => {
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

  it('Should see an error and not be able to submit the form unless all required fields are filled out', () => {
    cy.get('.create-event')
    .click()
    cy.get('.name-input')
    .type('Roller Derby Night')
    .should('have.value', 'Roller Derby Night')
    cy.get('.date-input')
    .type('2022-05-05')
    .should('have.value', '2022-05-05')
    cy.get('.time-input')
    .type('11:11')
    .should('have.value', '11:11')
    cy.get('.yes-input')
    .click()
    cy.get('.submit-btn')
    .click()
    cy.get('.error-msg')
    .contains('Required field missing! Please fill out all required field and re-submit.')
  })

  it('Should be able to close the form without submitting', () => {
    cy.get('.create-event')
    .click()
    cy.get('.close-btn')
    .click()
  })

})

// describe('Village Home/Events Sad Path Testing', () => {
//   beforeEach(() => {
//     cy.intercept('POST', 'https://whole-village-be.herokuapp.com/graphql', (req) => {
//       if (req.body.operationName === 'village') {
//         req.reply({ fixture: 'village5'});
//         }
//       if (req.body.operationName === 'events') {
//         req.reply({ fixture: 'events' })
//         }
//         if (req.body.operationName === 'user') {
//           req.reply({ fixture: 'user' })
//           }}
//       )    .visit('http://localhost:3000/villages/5')
//   })
//
//   it('Should display an error message if there are no events to display', () => {
//     cy.get('.events')
//     .contains('There are no upcoming events!')
//     .should('be.visible');
//   })
// })
//
// describe('No Path User Flows', () => {
//   beforeEach(() => {
//     cy.intercept('POST', 'https://whole-village-be.herokuapp.com/graphql', (req) => {
//       if (req.body.operationName === 'events') {
//       req.reply({ fixture: 'noEvents' })
//     }
//     })
//     .visit('http://localhost:3000/villages/100')
//   })
//
//   it('Should display an error message if there are no village at the path', () => {
//
//     cy.get('.btn > p')
//     .contains('Sorry, we couldn\'t find that village! Click here to go back to your village.')
//   })
// })
