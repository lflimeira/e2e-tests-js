describe('Login into the administrative area.', () => {
  it('Visit Magento\'s admin', () => {
    cy.visit('/admin')
    cy.wait(5000) 
  })

  it('Informs the username and password', () => {
    cy.get('#username')
      .type('admin')
    
    cy.get('#login')
      .type('magentorocks1')

    cy.get('input[name="form_key"]')
      .should('have.value')
  })
  
  it('Find and click in the button', () => {
    cy.contains('Sign in').click()
  })

  it('Successfully access the admin area',() => {
    cy.contains('Dashboard')
  })  
})
