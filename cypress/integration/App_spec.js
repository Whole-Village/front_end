describe('Dashboard User Flows', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://whole-village-be.herokuapp.com/graphql', (req) => {
  if (req.body.operationName === 'user') {
    req.reply({ fixture: 'user'});
    }}
  )
  .visit('http://localhost:3000/dashboard')
  })

  it('Should see a header', () => {
  cy.get('h1').contains('My Villages')
})

  it('Should see navigation links', () => {
    cy.get('.navigation-bar').first().contains('Start Village')
})

  it('Should display a user\'s villages', () => {
    cy.get('.village-container').first().contains('[TEST] Soccer team')
})

  it('Should display a form to start a villege', () => {
    cy.get('.start-village-btn').click()
    cy.get('.new-village-form-modal').should('be.visible');
    cy.get('.village-name-input').type('Example Village')
    .should('have.value', 'Example Village')
    cy.get('.village-description-input').type('Example Description')
    .should('have.value', 'Example Description')
    cy.get('.village-email-input').type('ExampleInvitee@example.com')
    .should('have.value', 'ExampleInvitee@example.com')
  })

  it("Should be able to show village invitee list", () => {
      cy.get('.start-village-btn').click()

          cy.get('.village-email-input')
          .type('ExampleInvitee@example.com')
          .get('.add-member-btn')
          .click()
          .get('.roster')
          .contains('ExampleInvitee@example.com')
  })

  // it("Should be able to delete a invitee from invitee list", () => {
  //     cy.get('.start-village-btn')
  //     .click()
  //       cy.get('.village-email-input')
  //       .type('ExampleInvitee@example.com')
  //         .get('.add-member-btn')
  //         .click()
  //           cy.get('.remove-member-btn > .material-icons')
  //           .wait(700)
  //           .click()
  //             .get('.added-villagers')
  //             .should('be.empty');
  // })

    it("Should be able to close the start village form", () => {
      cy.get('.start-village-btn').click()
      .get('.close-btn').click()
      .get('h1').contains('My Villages')
  })

    it('Should take a user to a village', () => {
    cy.get('[href="/villages/3"] > .village-card').click()
    .get('.events-sub')
    .contains('Village Events')
})
})
