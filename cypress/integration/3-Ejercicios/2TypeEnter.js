///<reference types="Cypress"/>
//Escribiremos en un TexBox de Google y luego pulsaremos enter
describe("",()=>{
    it("Rellenar en el TexBox de Google y pulsar enter",()=>{
        cy.visit("http://www.google.com")
        cy.title("eq","Google")
        cy.get("#L2AGLb > .QS5gu'").click()//Hacemos click en un elemento de la página. 
        cy.get('.gLFyf').type("google {enter}") //Hemos seleccionado con el get 
        //el texBox de google y ahora hemos escrito en él "google" y hemos pulsado enter. 
    })
    })
