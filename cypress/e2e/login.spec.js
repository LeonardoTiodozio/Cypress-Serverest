describe('Aba de Login', () => {
  it('Login com Credenciais Validas', () =>{
    cy.fixture('users').then((users) =>{
      cy.visit('https://front.serverest.dev/login')
      cy.get('[data-testid="email"]').type(users.valid.email)
      cy.get('[data-testid="senha"]').type(users.valid.password)
      cy.get('[data-testid="entrar"]').click()
    })
  })
})