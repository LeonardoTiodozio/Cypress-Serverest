

describe('Validações na aba de Cadastrar Usuarios', () => {
    it('Usuario Cadastro com informações valida', () => {
        cy.iniciar()
        cy.login('leonardoQA@teste.com', 'leonardoleo123')

        cy.url().should('eq', 'https://front.serverest.dev/admin/home')
        
        cy.contains('h5', 'Cadastrar Usuários')
            .should('be.visible')
            .parent()
            .find('a', 'Cadastrar')
            .click()
        
        cy.contains('Nome: *')
            .should('be.visible')
            .parent()
            .find('input')
            .type('Leonardo Tiodozio')
        
        cy.contains('Email: *')
            .should('be.visible')
            .parent()
            .find('input')
            .type('leonardo@testee.com')
            
        cy.contains('Senha: *')
            .should('be.visible')
            .parent()
            .find('input')
            .type('leo123')
        
        cy.contains('Cadastrar como administrador?')
            .should('be.visible')
            .parent()
            .find('input')
            .check()
        
        cy.get('[data-testid="cadastrarUsuario"]').click()
    })
})