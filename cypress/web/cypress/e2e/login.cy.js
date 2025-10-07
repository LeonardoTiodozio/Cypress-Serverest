describe('Aba de Login', () =>{
  it('Login com credenciais validas', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.viewport(1400,900)
  
    cy.get('[data-testid="email"]')
      .type('leonardoQA@teste.com')

    cy.get('[data-testid="senha"]')
      .type('leonardoleo123')

    cy.get('[data-testid="entrar"]')
      .click()

    cy.contains('Bem Vindo')
      .should('exist')
    
    cy.contains('Este é seu sistema para administrar seu ecommerce.')
      .should('exist')

    cy.url()
      .should('eq', 'https://front.serverest.dev/admin/home')
  })

  it.only('Login com credenciais de email invalido', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.viewport(1400,900)

    cy.get('[data-testid="email"]')
      .type('leonardo@teste.com')

    cy.get('[data-testid="senha"]')
      .type('leonardoleo123')

    cy.get('[data-testid="entrar"]')
      .click()

    cy.contains('Email e/ou senha inválidos')
      .should('exist')
  }) 
})