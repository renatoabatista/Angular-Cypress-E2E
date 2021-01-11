describe('Seguir', () => {
    it('Seguir Usuário', () => {
        const usuario = 'usuario'+(new Date()).getTime()
        const senha = 'senha'+(new Date()).getTime()
        cy.visit('http://localhost:4200/register', { timeout: 10000})
        cy.get('[formcontrolname=username]').type(usuario)
        cy.get('[formcontrolname=email]').type(usuario+'@email.com')
        cy.get('[formcontrolname=password]').type(senha)
        cy.get('.btn').click()
        cy.wait(10000)
        cy.visit('http://localhost:4200/profile/testecypress')
        cy.contains('Follow').click()
    })
})