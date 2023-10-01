describe('search auto',() => {
    it('browsing',() => {
        cy.visit('https://www.google.com')
        cy.get('#APjFqb').type('https://pf-yusuf.netlify.app/{enter}')
    
    })
})