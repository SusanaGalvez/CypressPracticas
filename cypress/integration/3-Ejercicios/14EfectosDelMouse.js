///<reference types="Cypress"/>
require("@4tw/cypress-drag-drop")

Cypress.on('uncaughtException', (err,runnable)=>{
    return false;//con esta función se asegura que la página no da error
})
describe("Efectos del Mouse",()=>{
    it("Drag and Drop",()=>{
        let tiempo = 1000
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop") // Cy.visit sirve para visitar una web. 
        cy.get("#column-a").drag("#column-b",{force:true}) //NO FUNCIONA. 
        cy.wait(3000)
})
    })

