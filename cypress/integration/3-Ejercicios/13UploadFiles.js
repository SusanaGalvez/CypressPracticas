///<reference types="Cypress"/>
require('cypress-file-upload')
Cypress.on('uncaughtException', (err,runnable)=>{
    return false;//con esta función se asegura que la página no da error
})
describe("Cargar archivos desde Cypres",()=>{
    it("Cargar imagen",()=>{
        let img = "imagen.jpg" //La imagen está en fixtures
    cy.visit("https://demoqa.com/automation-practice-form") 
    cy.get("#uploadPicture").attachFile(img) //Hemos seleccionado el botón para subir una imagen y hemos cargado una imagen. 
    cy.wait(3000)
})
 })
