///<reference types="Cypress"/>
Cypress.on('uncaughtException', (err,runnable)=>{
    return false;//con esta función se asegura que la página no da error
})
// Esta página?preguntar como ha sacado el ins >
describe("",()=>{
    it("",()=>{
        cy.visit("https://practice.automationtesting.in/product/android-quick-start-guide/")
        cy.get("ins > .woocommerce-Price-amount").should("have.text","₹450.00")
    }) 
    it("Validar un texto dinámico",()=>{ //Me refiero a texto dinámico a aquel que nosotros introducimos y sale por pantalla. 
        let nombre = "Susana";   
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").type(nombre)
        cy.get('#submit').click()
        cy.get("#name").should("have.text","Name:"+nombre)
    })
    it("Validar una clase",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").should("have.class","mr-sm-2 form-control") //el have class te permite validar una clase asociada a un ID.
    })
    //Preguntar a Jonathan
    it.only("Validar numero de tablas con Lenght",()=>{
        cy.visit("https://www.w3schools.com/html/html_tables.asp")
        const table = cy.get("#customers")
        table.get("th").should("have.length",5)//validamos de la tabla en cuestión el th
        table.get("tr").should("have.length",18)//validamos de la tabla en cuestión el tr
    })


})