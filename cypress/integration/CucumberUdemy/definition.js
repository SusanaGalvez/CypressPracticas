require('cypress-plugin-tab')
import "cypress-file-upload"
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
Given ('Abrir el navegador principal',()=>{
    cy.visit("https://demoqa.com/text-box")
    
})

When ('Cargando el nombre {word}',(name)=>{
    cy.get("#userName").type(name)
    cy.wait(2000)
})

When ('Cargando el email {word}',(email)=>{
    cy.get("#userEmail").type(email)
    cy.wait(2000)
})

And ('Cargando la dirección {word}',(dir)=>{
    cy.get("#currentAddress").type(dir)
    cy.wait(2000)
})
And ('Cargando la dirección dos {word}',(dir2)=>{
    cy.get("#permanentAddress").type(dir2)
    cy.wait(2000)
})
And("Click en Botón",()=>{
    cy.get("#submit").click({force:true})
})

Then ('Validar el nombre de la página',()=>{
    cy.title().should("eq","ToolsQA")
    cy.wait(2000)
})
