describe('6.0 Verificar cantidad de productos en inventario', () => {

    beforeEach(() => {
        cy.fixture('dataUsers').as('users')
      })

    it('Logout desde el menú hamburguesa', function() {
        cy.login(this.users.standard_user,this.users.password)
        cy.validateInventoryPage()
        cy.get('[data-test="inventory-item"]').should('have.length', 6)
     })
})