describe('Anywhere fitness tests', function() {
    it('navigates between home and login', function(){
        cy.visit('http://localhost:3000')
        cy.get('[data-test-id="browse-classes"]').should('exist')
        cy.get('[data-test-id="login"]').click()
        cy.get('[data-test-id="login-h1"]').should('exist')
        cy.get('[data-test-id="home"]').click()
        cy.get('[data-test-id="browse-classes"]').should('exist')
    })
})