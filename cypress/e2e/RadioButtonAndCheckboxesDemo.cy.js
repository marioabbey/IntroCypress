describe("Check UI Eleements", () => {
  it("Checking Radio buttons", () => {
    cy.visit("https://verve-access-customer.k8.isw.la/corporate/signin");
    //verify radio buttons are visible
    //cy.get("input[type='checkbox']").should("be.visible");

    //Select a checkbox

    //cy.get("input[type='checkbox']").check().should('be.checked')
    //access the element above using Xpath in cypress?

    cy.xpath("//input[@type='checkbox']").check().should("be.checked");
    cy.xpath("//input[@type='checkbox']").uncheck().should("not.be.checked");

    //selecting all the check boxes
  });

  it("Checking Radio buttons", () => {
    cy.visit("https://www.jumia.com.ng/catalog/?q=T-shirts");
  //cy.get("[data-eventlabel='50-100']").check().should("be.checked")

  cy.get("[data-eventlabel='50-100']").click()
  //is blackbox working?
  //write cypress spec to test jumia.com 
  


});
});
