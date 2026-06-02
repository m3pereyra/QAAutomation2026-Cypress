describe('5.0 Logout desde el menú hamburguesa', () => {
    it('Logout desde el menú hamburguesa', ()=> {
        cy.login('standard_user','secret_sauce')
        cy.validateInventoryPage()
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').should('be.visible').click()
        cy.url().should('contains', 'https://www.saucedemo.com/')
     })
})