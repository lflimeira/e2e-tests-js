describe('Training Center - Site', () => {
  describe('Title', () => {
    it('should assert that title is correct', () => {
      cy.visit('https://trainingcenter.io/')

      cy.get('.main-content__title')
        .contains('Training Center')
    })
  })

  describe('Participe', () => {
    it('should assert that the item Participe exist on menu', () => {
      cy.contains('Participe').click()
    })
    
    it('should ensure that the Participe item has slack and github link', () => {
      cy.url().should('include', '#come')

      cy.get('.come__title')
        .contains('Participe da nossa comunidade')

      const participe = '.come__nav'

      cy.contains(participe, 'chat (Slack)')
      cy.contains(participe, 'encontros presenciais regionais')
    })
  })

  describe('Projetos', () => {
    it('should assert that the item Projetos exist on menu', () => {
      cy.contains('Projetos').click()
    })
    
    it('should ensure that the Projetos item has all projects', () => {
      cy.url().should('include', '#initiatives')

      cy.get('.initiatives__box__title')
        .contains('Nossas iniciativas')
      
      const projects = '.initiatives__items'
      
      cy.contains(projects, 'Mentoria')
      cy.contains(projects, 'Grupos de estudos')
      cy.contains(projects, 'Revisão de código')
      cy.contains(projects, 'Encontros locais')
    })
  })

  describe('Blog', () => {
    it('should ensure that the Blog item is linked with the correctly url', () => {
      cy.get('.nav-menu__list > li:nth-child(4) > a')
        .should('have.attr', 'href').and('include', 'https://medium.com/trainingcenter')
    })
  })

  describe('Apoie', () => {
    it('should ensure that the Apoie item is linked with the correctly url', () => {
      cy.get('.nav-menu__list > li:nth-child(1) > a')
        .should('have.attr', 'href').and('include', 'https://apoia.se/training-center')
    })
  })
})


