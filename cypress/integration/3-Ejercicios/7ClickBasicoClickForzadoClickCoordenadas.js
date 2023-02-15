
///<reference types="Cypress"/>
Cypress.on('uncaughtException', (err,runnable)=>{
    return false;//con esta función se asegura que la página no da error
})

it("Click básico + click forzado + click con coordenadas",()=>{  
    cy.visit("https://demoqa.com/automation-practice-form") 
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click()//un click simple sobre un elemento. 
    cy.get("#submit").click({force:true}) //el elemento está escondido, entonces con el force true se clickea de todas formas. 
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click(5,5) //le indicamos las coordenadas de donde queremos que clickee. 
  })
