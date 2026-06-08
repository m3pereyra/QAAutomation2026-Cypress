describe ('Rick & Morty', () => {
    it('Ver a Rick Sanchez', () => {
        cy.intercept('GET', '**/page-data**').as('docu')
        cy.visit('https://rickandmortyapi.com/')
        cy.wait('@docu').then((interception) => {
            expect(interception.response.statusCode).to.eq(200)
        })
    })
})