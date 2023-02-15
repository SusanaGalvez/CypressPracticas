///<reference types="Cypress"/>
Cypress.on('uncaughtException', (err,runnable)=>{
    return false;//con esta función se asegura que la página no da error
})
describe("Para ir hacia adelante o hacia atrás",()=>{
    it("Go back , Go Forward",()=>{
    cy.visit("https://demoqa.com/") // Cy.visit sirve para visitar una web. 
    cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg > path').click()
    cy.go("back") //Con esto volvemos un paso atrás
    cy.go("forward") //igual, pero volvemos un paso adelante. 
    })

})