describe('Training Center - Site', function () {
  describe('Title', function () {
    it('should assert that title is correct', function () {
      cy.visit('https://trainingcenter.io/')

      cy.get('.main-content__title')
        .contains('Training Center')
    })
  })

  describe('Participe', function () {
    it('should assert that the item Participe exist on menu', function () {
      cy.contains('Participe').click()
    })
    
    it('should ensure that the Participe item has slack and github link', function () {
      cy.url().should('include', '#come')

      cy.get('.come__title')
        .contains('Participe da nossa comunidade')

      const participe = '.come__nav'

      cy.contains(participe, 'chat (Slack)')
      cy.contains(participe, 'encontros presenciais regionais')
    })
  })

  describe('Projetos', function () {
    it('should assert that the item Projetos exist on menu', function () {
      cy.contains('Projetos').click()
    })
    
    it('should ensure that the Projetos item has all projects', function () {
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
    it('should ensure that the Blog item is linked with the correctly url', function () {
      cy.get('.nav-menu__list > li:nth-child(4) > a')
        .should('have.attr', 'href').and('include', 'https://medium.com/trainingcenter')
    })
  })

  describe('Apoie', () => {
    it('should ensure that the Apoie item is linked with the correctly url', function () {
      cy.get('.nav-menu__list > li:nth-child(1) > a')
        .should('have.attr', 'href').and('include', 'https://apoia.se/training-center')
    })
  })
})


