describe('14.0 Agregar un producto al carrito', () => {
    it('Agregar un producto al carrito', ()=> {
        cy.login('standard_user','secret_sauce')
        cy.validateInventoryPage()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.validateCartPage()
        cy.get('[data-test="checkout"]').click()
        cy.validateCheckoutPage()
        cy.get('[data-test="continue"]').click()
        cy.get('.error-message-container').should('be.visible').and('contain','Error: First Name is required')
        })
})