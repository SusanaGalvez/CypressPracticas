///<reference types="Cypress"/>
Cypress.on('uncaughtException', (err,runnable)=>{
    return false;//con esta función se asegura que la página no da error
})
//Se le han colado cosass, tiene que reformar el archivo
// y no me funciona
describe("Función Then ",()=>{
    it("",()=>{
        cy.get("#oldSelectMenu").should("be.visible").then(()=>{ //Hemos especificado de que si es visible el menu de selección, que seleccione el color blue. 
            cy.get("#oldSelectMenu").select("Blue")
        })
    })

})