describe('Testes na Agenda de Contatos', () => {
  it('Deve carregar a página da agenda com sucesso', () => {
    // Aqui usamos o link que você me passou
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve verificar se a tabela de contatos existe', () => {
    cy.get('table').should('exist')
  })
})
