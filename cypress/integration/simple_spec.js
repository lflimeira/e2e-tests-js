describe('My First Test', () => {
  it('Visit the kitchen sink', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })
  
  it('Find and click in an element', () => {
    cy.contains('type').click()
  })
  
  it('Make an assertion', () => {
    cy.url()
      .should('include', '/commands/actions')
  })
  
  it('Gets, types and asserts', () => {
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})
