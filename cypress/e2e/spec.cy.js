describe('Testes para a agenda de contatos', () => {
  
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app')
  })

  it('Deve incluir, alterar e remover um contato', () => {
    // 1. INCLUSÃO - Usando seletores mais específicos
    cy.get('input[placeholder="Nome"]').type('Gian Souza')
    cy.get('input[placeholder="E-mail"]').type('gian@ebac.com.br')
    cy.get('input[placeholder="Telefone"]').type('11912345678')
    cy.get('.adicionar').click()
    
    // Verifica se o nome aparece na lista
    cy.contains('Gian Souza').should('be.visible')

    // 2. ALTERAÇÃO 
    // Nota: Verifique se a classe correta é .edit ou se o botão tem o texto "EDITAR"
    cy.get('.edit').last().click() 
    cy.get('input[placeholder="Nome"]').clear().type('Gian Souza Alterado')
    cy.get('.alterar').click()
    cy.contains('Gian Souza Alterado').should('be.visible')

    // 3. REMOÇÃO
    // Nota: Verifique se a classe correta é .delete ou se o botão diz "DELETAR"
    cy.get('.delete').last().click()
    cy.contains('Gian Souza Alterado').should('not.exist')
  })
})
