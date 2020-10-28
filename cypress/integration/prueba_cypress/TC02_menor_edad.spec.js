describe('Login', function(){
    it('Sign in', function(){
        //cy.visit('https://www.colaypola.com.co')
        cy.visit('https://www.colaypola.com.co/agegate')
        cy.get('input[data-qadp="age_gate_year_1"]',{ timeout: 10000 }).should('be.visible').type('2')
        cy.get('input[data-qadp="age_gate_year_2"]').type('0')
        cy.get('input[data-qadp="age_gate_year_3"]').type('0')
        cy.get('input[data-qadp="age_gate_year_4"]').type('8')
        cy.wait(5000)
        cy.url().should('include', 'https://www.tapintoyourbeer.com/')

    })
})