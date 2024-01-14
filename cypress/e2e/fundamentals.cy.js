describe("Fundamentals test ", () => {
  it("Contains correct header text", () => {
    cy.visit("/fundamentals");
    // cy.get('[dta-test="fundamentals-header"]').contains(
    //   /Testing Fundamentals/i
    // );
    cy.get('[dta-test="fundamentals-header"]').should(
      "contain.text",
      "Testing Fundamentals"
    );
  });
});
