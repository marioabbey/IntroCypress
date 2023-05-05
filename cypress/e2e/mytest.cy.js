

describe('template spec', () => {
  it('passes', () => {


    cy.visit('https://www.interswitchgroup.com/')
    cy.title().should('eq','Interswitch - Electronic Payment and Digital Commerce Solutions.')


  })
})