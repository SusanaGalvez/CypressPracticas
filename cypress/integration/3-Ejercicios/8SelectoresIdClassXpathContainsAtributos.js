///<reference types="Cypress"/>
require('cypress-xpath')
Cypress.on('uncaughtException', (err,runnable)=>{
    return false;//con esta función se asegura que la página no da error
})
describe("Tipos de Selectores",()=>{
    it("Selector por ID",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").should("be.visible").type("Susana")
        cy.wait(2000)

    })
// POR LA CLASE ME DA ERROR
    it("Selector por Clase",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.get(".mr-sm-2 form-control").should("be.visible").type("Susana")
    })
    it("Selector por Atributo",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.get("[placeholder='Full Name']").should("be.visible").type("Susana")
    })
    //  PREGUNTAR A JONATAN
    it("Selector por Xpath",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.xpath("//*[@id='userName']").should("be.visible").type("pass")

    })
    it.only("Selector por Contains",()=>{
       cy.visit("https://demoqa.com/automation-practice-form")
        cy.get(".custom-control-label").contains("Female")
     })
})