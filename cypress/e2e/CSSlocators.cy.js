

describe('CSS locators', () => {

    it('csslocators', () => {

        cy.visit('https://www.jumia.com.ng/')

        cy.get('#fi-q').type('T-shirts') //id was used and tag is optional

        cy.get(".btn._prim._md.-mls.-fsh0").click()

        //cy.wait(1000)

        cy.get("div[class='row'] a:nth-child(3)").contains("t-shirts") //assertion
   
   
    })



})
