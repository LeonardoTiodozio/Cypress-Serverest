describe('Aba de Login', () =>{
  it('Login com credenciais validas', () => {
    cy.iniciar()
    
    cy.login('leonardoQA@teste.com', 'leonardoleo123')

    cy.contains('Bem Vindo')
      .should('exist')
    
    cy.contains('Este é seu sistema para administrar seu ecommerce.')
      .should('exist')

    cy.url()
      .should('eq', 'https://front.serverest.dev/admin/home')
  })

  it('Login com credenciais de email invalido', () => {
    cy.iniciar()

    cy.login('leonardo@teste.com', 'leonardoleo123')
    
    cy.contains('Email e/ou senha inválidos')
      .should('exist')
    
    cy.url()
      .should('eq', 'https://front.serverest.dev/login')
  }) 

  it('Login com credencias de senha invalido', () => { 
    cy.iniciar()

    cy.login('leonardoQA@teste.com', 'leonardoleo')

    cy.contains('Email e/ou senha inválidos')
      .should('exist')    

    cy.url()
      .should('eq', 'https://front.serverest.dev/login')
  })
})