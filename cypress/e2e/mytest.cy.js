

describe('Testing Interswitch group page', () => {
  it('confirmes the title', () => {
    cy.visit('https://www.interswitchgroup.com/')
    cy.title().should('eq','Interswitch - Electronic Payment and Digital Commerce Solutions.')
  })


  
})