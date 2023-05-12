describe("Handle dropdowns", () => {
  it.skip("Test if dropdowns can be tested", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");

    //get the element, select value from the dropdown and verify
    cy.get("#zcf_address_country")
      .select("Ghana")
      .should("have.value", "Ghana");
  });

  it.skip("dropdowns can be tested", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

    //get the element, select value from the dropdown and verify
    cy.get("#select2-billing_country-container").click();
    cy.get(".select2-search__field").type("Japan").type("{enter}");
    cy.get("#select2-billing_country-container").should("have.text", "Japan");
  });

  it.skip("Auto suggest dropdown", () => {
    cy.visit("https://www.wikipedia.org/");

    //get the element, select value from the dropdown and verify
    cy.get("#searchInput").type("Nigeria");
    cy.get(".suggestion-title")
      .contains("Nigeria national football team")
      .click();
  });

  it("Dynamic dropdown", () => {
    cy.visit("https://www.google.com/");

    //get the element
    cy.get("#APjFqb").type("Nigeria");
    cy.wait(3000)

    cy.get("div.wM6W7d>span").should("have.length", 12);
    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      if ($el.text() === "nigeria news") {
        cy.wrap($el).click();
      }
    });
    cy.get("#APjFqb").should("have.value", "nigeria news");
    cy.reload()
  });

});
