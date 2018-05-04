describe('Kitchen Sink', function () {
  it('.should() - assert that <title> is correct', function () {
    cy.visit('https://example.cypress.io')

    cy.title().should('include', 'Kitchen Sink')
  })
})
