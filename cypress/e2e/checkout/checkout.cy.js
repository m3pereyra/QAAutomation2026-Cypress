describe('13.0 Agregar un producto al carrito', () => {

  beforeEach(() => {
    cy.fixture('dataUsers').as('users')
  })

  it('Completar checkout con datos válidos', function () {
    cy.login(this.users.standard_user, this.users.password)
    cy.validateInventoryPage()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.validateCartPage()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Juan')
    cy.get('[data-test="lastName"]').type('Pérez')
    cy.get('[data-test="postalCode"]').type('5000')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').should('be.visible').and('contain', 'Thank you for your order!')
  })

  it('Checkout sin completar campos obligatorios', function () {
    cy.login(this.users.standard_user, this.users.password)
    cy.validateInventoryPage()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.validateCartPage()
    cy.get('[data-test="checkout"]').click()
    cy.validateCheckoutPage()
    cy.get('[data-test="continue"]').click()
    cy.get('.error-message-container').should('be.visible').and('contain', 'Error: First Name is required')
  })
})