///<reference types="Cypress"/>
require('cypress-plugin-tab')
Cypress.on('uncaughtException', (err,runnable)=>{
    return false;//con esta función se asegura que la página no da error
})
describe("Función Tab",()=>{
    it("Uso del tabulador , para rellenar los campos de DemoQA TexBox",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").type("Susana").tab().type("sugalsi@hotmail.com").tab()
        .type("C/Navarra").tab().type("C/Navarra")
        cy.wait(2000)
    })

})