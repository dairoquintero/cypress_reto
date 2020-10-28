describe('Login', function(){
    it('Sign in', function(){
        //cy.visit('https://www.colaypola.com.co')
        cy.visit('https://www.colaypola.com.co/agegate')
        cy.get('input[data-qadp="age_gate_year_1"]',{ timeout: 10000 }).should('be.visible').type('1')
        cy.get('input[data-qadp="age_gate_year_2"]').type('9')
        cy.get('input[data-qadp="age_gate_year_3"]').type('9')
        cy.get('input[data-qadp="age_gate_year_4"]').type('3')

        //Meses
        //cy.wait('input[data-qadp="age_gate_month_1"]')
        cy.get('input[data-qadp="age_gate_month_1"]',{ timeout: 10000 }).should('be.visible').type('1')
        cy.get('input[data-qadp="age_gate_month_2"]').type('2')


        //Dia
        cy.get('input[data-qadp="age_gate_day_1"]',{ timeout: 10000 }).should('be.visible').type('1')
        cy.get('input[data-qadp="age_gate_day_2"]').type('1')
        //cy.get('input[id="edit-remember"]').click()
        cy.get('input[id="submit"]',{ timeout: 10000 }).should('be.visible').click()
        cy.wait(50000)


        //cy.get('input[type="email"]').type('qamilestone.academy@gmail.com')
        //cy.get('input[type="password"]').type('admin123')
        //cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})