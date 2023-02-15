//Aquí validamos el título de la página
///<reference types="Cypress"/>
describe("Validamos el título de la página",()=>{
    it("Validar el título de la web DemoQA",()=>{
        cy.visit("https://demoqa.com/")
        cy.title().should("eq","ToolsQA")
    })
})