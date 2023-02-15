///<reference types="Cypress"/>
Cypress.on('uncaughtException', (err,runnable)=>{
    return false;//con esta función se asegura que la página no da error
})
//Explicar Jonathan
describe("Each y sus usos",()=>{
    it("Función Each",()=>{
        cy.visit("https://demoqa.com/webtables")  
        cy.get(".col-12").each(($el,index,$list)=>{ // hemos codigo una tabla con varios rows. 
            let data = $el.text() //parseamos la información a texto. 
            cy.log(data) //este dato nos proporciona la localización del producto, es decir, los elementos de dicha clase.   
            cy.log(index) //es un índice donde se nos comenta la cantidad numérica de elementos con ese nombre en concreto que hay en la web.
            cy.log($list) //nos dará lo que lleva dentro la estructura como tal. 
        }) 
    })
    it("funcion Wrap",()=>{
        cy.visit("https://demoqa.com/webtables")  
        cy.get(".col-12").each(($el,index,$list)=>{ // hemos codigo una tabla con varios rows. 
            let data = $el.text() //parseamos la información a texto. 
            cy.log(data)
            if(data.includes("Text")){
                cy.wrap($el).click() //cuando aparezca el elemento "text" hará un click sobre él. 
        }
        })

})
})