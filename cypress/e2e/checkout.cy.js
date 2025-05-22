import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user login dengan akun valid", () => {
  cy.visit("/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

Given("user telah menambahkan produk ke cart", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

When("user membuka halaman cart", () => {
  cy.get('.shopping_cart_link').click();
});

When("user klik tombol Checkout", () => {
  cy.get('[data-test="checkout"]').click();
});

When('user mengisi First Name {string}, Last Name {string}, dan Postal Code {string}', (firstName, lastName, postalCode) => {
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(postalCode);
});

When("user mengisi First Name {string} dan membiarkan Last Name dan Postal Code kosong", (firstName) => {
  cy.get('[data-test="firstName"]').type(firstName);
});

When("user klik tombol Continue", () => {
  cy.get('[data-test="continue"]').click();
});

When("user klik tombol Finish", () => {
  cy.get('[data-test="finish"]').click();
});

Then('user melihat pesan {string}', (message) => {
  cy.contains(message).should('be.visible');
});

Then('user melihat pesan error {string}', (message) => {
  cy.get('[data-test="error"]').should('have.text', message);
});
