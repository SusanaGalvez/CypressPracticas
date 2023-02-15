///<reference types="Cypress"/>
//Para subir y bajar la página
Cypress.on('uncaughtException', (err,runnable)=>{
    return false;//con esta función se asegura que la página no da error
})
describe("Funcion Only",()=>{   

    it.only("Solo se ejecutará esta funcion",()=>{ 
            cy.visit("https://demoqa.com/")  
    })
    
    it("esta, al no llevar el only no se ejecutara",()=>{  
        cy.visit("https://www.google.com/")  
    })
    
    })