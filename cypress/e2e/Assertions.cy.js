describe("Assertions Try", () => {
  it("Impilicit Assertion", () => {
    cy.visit("https://verve-access-customer.k8.isw.la/corporate/signin");
    //use should and for implicit assertions
    //cy.url().should('include','corporate')
    //cy.url().should('eq', 'https://verve-access-customer.k8.isw.la/corporate/signin')
    //cy.url().should('contain', 'access')

    cy.url()
      .should("include", "corporate")
      .and("eq", "https://verve-access-customer.k8.isw.la/corporate/signin")
      .and("contain", "access")
      .and("not.contain", "accesss");

    cy.title()
      .should("include", "Access")
      .and("eq", "Verve Access")
      .and("contain", "Verve");

    cy.get(".mobile-header").should("be.visible").and("exist"); //check logo exist

    cy.xpath("//a").should("have.length", "2"); //check number of links

    cy.get("input[type='email']").type("njoku102@qa.team"); //provide the right value
    cy.get("input[type='email']").should("have.value", "njoku102@qa.team"); //checks if the typed value is right
  });

  it("Explicit Assertion", () => {
    cy.visit("https://verve-access-customer.k8.isw.la/corporate/signin");
    //use should and for implicit assertions
    //cy.url().should('include','corporate')
    //cy.url().should('eq', 'https://verve-access-customer.k8.isw.la/corporate/signin')
    //cy.url().should('contain', 'access')

    cy.get("input[type='email']").type("njoku102@qa.team");
    cy.get("input[name='password']").type("Password13@");
    cy.get(".cmy-1.u-case.custom-button").click();
    cy.wait(10000);
    cy.xpath(
      "//div[@class='sub-container d-flx al-i-c j-c-fe']//div[2]//span[1]//*[name()='svg']"
    ).click();

    let expEmail = "njoku102@qa.team";

    cy.get(".ant-dropdown-menu > :nth-child(1)").then((x) => {
      let actEmail = x.text();
      //BDD style
      expect(actEmail).to.equal(expEmail);
      //TDD Style
      assert.equal(actEmail, expEmail);
    });
  });
});
