describe('Pokemon API', () => {
  it('should return status 200', () => {
    const pokemon = cy.request('POST', 'http://pokeapi.co/api/v2/pokemon/1/')
    
    pokemon.its('status')
      .should('be.eql', 200)
    
  })

  it('should return bulbasaur', () => {
    const pokemon = cy.request('POST', 'http://pokeapi.co/api/v2/pokemon/1/')

    pokemon.its('body.forms')
      .each(value =>
        expect(value.name).to.eq('bulbasaur')
      )
  })
})
