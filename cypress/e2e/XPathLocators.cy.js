describe("XpathLocators", () => {
  beforeEach(() => {
    cy.visit("https://www.jumia.com.ng/");
    cy.get("#fi-q").type("T-shirts"); //id was used and tag is optional
    cy.get(".btn._prim._md.-mls.-fsh0").click();
  });

  it("Find number of products", () => {
    cy.xpath("//div[@class='-paxs row _no-g _4cl-3cm-shs']/article").should(
      "have.length.gte",
      40
    );
  });
  it("chained xpath", () => {
    cy.xpath("//div[@class='-paxs row _no-g _4cl-3cm-shs']")
      .xpath("./article")
      .should("have.length.gte", 40);
  });
});
