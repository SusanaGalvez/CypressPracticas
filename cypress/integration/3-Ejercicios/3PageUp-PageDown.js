///<reference types="Cypress"/>
//Para subir y bajar la página
Cypress.on('uncaughtException', (err,runnable)=>{
    return false;//con esta función se asegura que la página no da error
})
describe("Subir y bajar la página",()=>{
    it("",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").type("{pagedown}")//con {pagedown} la web hace scroll hacia abajo
        cy.wait(5000)
        cy.get("#userName").type("{pageup}")//con {pageup} la web hace scroll hacia arriba
        cy.get(5000)
    })
})