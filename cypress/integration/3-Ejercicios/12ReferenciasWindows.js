///<reference types="Cypress"/>
Cypress.on('uncaughtException', (err,runnable)=>{
    return false;//con esta función se asegura que la página no da error
})
describe("Referencias de Windows",()=>{
    it("Validar Charset",()=>{
        cy.visit("https://demoqa.com/") 
        cy.document().should("have.property","charset").and("eq","UTF-8") 
    })
    it("Validar URL",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.url().should("include","text-box") //Validar un fragmento de URL
        cy.url().should("eq","https://demoqa.com/text-box") //Validar una URL completa.
    })

})