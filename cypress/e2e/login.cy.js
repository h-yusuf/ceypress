describe('user login', () => {
    const email = `asdfn.msi@gmail.com`
    // const name =' Account Created!';
    const password = `yusufpassword`
    it('valid new user', () => {

        cy.visit('https://automationexercise.com/login')
        // cy.get('[data-qa="continue-button"]').click()

        // cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        // login
        cy.get('[data-qa="login-email"]').type(email)
        cy.get('[data-qa="login-password"]').type(password)
        cy.get('[data-qa="login-button"]').click()

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        // cy.get('b').should('have.text',name).should('be.visible')
        cy.get('b').should('have.text','Account Created!').should('be.visible')

    })
})
