describe("Handle dropdowns", () => {
  it.skip("Test if dropdowns can be tested", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");

    //get the element, select value from the dropdown and verify
    cy.get("#zcf_address_country")
      .select("Ghana")
      .should("have.value", "Ghana");
  });
  it("Test if dropdowns can be tested", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");

    //get the element, select value from the dropdown and verify
    cy.get("#zcf_address_country")
      .select("Ghana")
      .should("have.value", "Ghana");
  });
});
