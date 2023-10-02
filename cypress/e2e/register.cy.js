describe('user register', () => {

    const email = `asdfn.msi@gmail.com`
    it('valid new user', () => {
        cy.visit('https://automationexercise.com/login')


        cy.get('[type="text"]').type('yusuf Testes')
        cy.get('.signup-form > form > [type="email"]').type(email)
        cy.get('.signup-form > form > .btn').click()
        cy.get('#id_gender1').click()
        cy.get('#password').type('yusufpassword')
        cy.get('#days').select(1)
        cy.get('#months').select('May')
        cy.get('#years').select('2021')
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('#first_name').type('yusuf')
        cy.get('#last_name').type('tester')
        cy.get('#company').type('RF')
        cy.get('#address1').type('street1')
        cy.get('#address2').type('street2')
        cy.get('#country').select('India')
        cy.get('#state').type('new delhi')
        cy.get('#city').type('jogjakarta')
        cy.get('#zipcode').type('3005')
        cy.get('#mobile_number').type('09812938192838')
        cy.get('.login-form > form > .btn').click()
        cy.get('b').should('have.text','Account Created!').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
    })
})