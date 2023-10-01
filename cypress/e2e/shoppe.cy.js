describe('login shoppe',() =>{

    it('shoppe login',() =>{
        cy.visit('https://shopee.co.id/')
        cy.get('.shopee-searchbar-input').type('iphon 13 promax')
        cy.get('.btn').click()
        })
})