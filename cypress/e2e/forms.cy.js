describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").as("subscibe-input");
    cy.get("@subscibe-input").type("testuser@gmail.com");
    cy.contains(/Successfully subbed: testuser@gmail.com!/i).should(
      "not.exist"
    );
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: testuser@gmail.com!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: testuser@gmail.com!/i).should(
      "not.exist"
    );

    cy.get("@subscibe-input").type("testuser@gmail.io");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email: testuser@gmail.io!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Invalid email: testuser@gmail.io!/i).should("not.exist");

    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail!/i).should("exist");
    cy.wait(3000);
    cy.contains(/fail!/i).should("not.exist");
  });
});
