describe('10.0 Agregar un producto al carrito', () => {
    it('Agregar un producto al carrito', ()=> {
        cy.login('standard_user','secret_sauce')
        cy.validateInventoryPage()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('contain','1')
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
        })
})