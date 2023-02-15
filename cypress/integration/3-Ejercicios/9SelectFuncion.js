///<reference types="Cypress"/>
Cypress.on('uncaughtException', (err,runnable)=>{
    return false;//con esta función se asegura que la página no da error
})
describe("función Select",()=>{
    it("Select Simple",()=>{
        cy.visit("https://demoqa.com/select-menu")
        cy.get("#oldSelectMenu").select("Voilet").should("have.value","7")
    })
    it.only("Select Multiple",()=>{
        cy.visit("https://demoqa.com/select-menu")
        cy.get('#cars').select(["Saab","Opel","Audi"])
        })

})