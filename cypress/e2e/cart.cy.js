import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user login dengan akun valid", () => {
  cy.visit("/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

When("user menambahkan produk ke cart", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

Then("cart icon menunjukkan jumlah item yang sesuai", () => {
  cy.get('.shopping_cart_badge').should('have.text', '1');
});
