///<reference types="Cypress"/>
require('cypress-plugin-tab')
Cypress.on('uncaughtException', (err,runnable)=>{
    return false;//con esta función se asegura que la página no da error
})
describe("",()=>{
    it("Validación de un campo, ver si está visible",()=>{
        cy.visit("https://demoqa.com/automation-practice-form") 
        cy.get("#firstName").should("be.visible") //este assert nos permite ver si es visible un campo. 
    })
    it("Validando si está disponible un textBox",()=>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.get('#currentAddress').should("be.enabled") //comprueba si está disponible un campo. 
    })
    it("Validando un radio button",()=>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.get("#gender-radio-2").check({force:true}).should("be.checked") //comprueba si el radio button está "checked".
        cy.wait(2000)
        cy.get("#gender-radio-3").should("not.be.checked") //comprueba si el radio button no está "checked".
        cy.wait(2000)
    })
    it("Validando un checkBox",()=>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.get("#hobbies-checkbox-1").check({force:true}).should("be.checked") //Comprueba si el checkbox se encuentra "checked".
        cy.wait(5000)
        cy.get("#hobbies-checkbox-1").uncheck({force:true}).should("not.be.checked") //Comprueba si el checkbox está "unchecked".
    })
    it.only("Validando un objeto dentro de una lista",()=>{ 
        cy.visit("https://demoqa.com/select-menu")  
        cy.get("#oldSelectMenu").select("Blue").should("have.value","1")// hemos seleccionado y validado un objeto dentro de una lista. 
    })
    it.only("Validando un objeto dentro de una lista",()=>{ 
        cy.visit("https://demoqa.com/select-menu")  
        cy.get("#cars").select("Volvo").should("have.value","volvo")// hemos seleccionado y validado un objeto dentro de una lista. 
    })
})
// should("be.visible")
// should("be.enabled")
// should("be.checked")
// should("be.not.checked")
// select("Blue").should("have.value","1")selecccionamos Blue, que es la primera opción
// check({force:true}).should("be.checked")
// uncheck({force:true}).should("not.be.checked")

