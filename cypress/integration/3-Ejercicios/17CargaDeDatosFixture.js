///<reference types="Cypress"/>
Cypress.on('uncaughtException', (err,runnable)=>{
    return false;//con esta función se asegura que la página no da error
})
describe("Cargando datos desde archivo Json ubicado en Fixture",()=>{
    before(function(){ //No se puede hacer sin el before. 
        cy.fixture("example").then(function(data){ //cargamos el archivo Json dentro de nuestra variable data.
            globalThis.data=data;
        })
    })
    it("Prueba para cargar los datos desde la página DemoQa",()=>{
        cy.visit("https://demoqa.com/text-box") 
        cy.get("#userName").type(data.name).tab().type(data.email)
    })

})