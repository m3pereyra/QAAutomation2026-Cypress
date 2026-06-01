describe('Login con usuario bloqueado (locked_out_user)', () => {
    it('Login con usuario bloqueado (locked_out_user)', ()=> {
        cy.login('locked_out_user','secret_sauce')
        cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Epic sadface: Sorry, this user has been locked out.')
     })
})