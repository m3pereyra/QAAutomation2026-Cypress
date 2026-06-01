describe('Verificar cantidad de productos en inventario', () => {
    it('Logout desde el menú hamburguesa', ()=> {
        cy.login('standard_user','secret_sauce')
        cy.get('[data-test="inventory-item"]').should('have.length', 6)
     })
})