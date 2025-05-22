/// <reference types="cypress" />

describe('OrangeHRM e2e Testing - Menambahkan Karyawan Baru', () => {
  const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php';
  
  const usernameAdmin = "Admin";
  const passwordAdmin = "admin123";

  const newEmployeeName = "John Michael Taylor";

  beforeEach(() => {
    // visit url
    cy.visit(baseUrl, '/auth/login');
  })

  // 
  it('Menambahkan Cuti Karyawan', () => {
    // Login
    cy.get('input[name="username"]').type(usernameAdmin);
    cy.get('input[name="password"]').type(passwordAdmin);
    cy.get('button[type="submit"]').click();
    cy.wait(100);
    cy.contains("Dashboard").should("exist");

    // Tambah cuti karyawan
    // tanpa isi daata
    cy.contains("Leave").click();
    cy.contains("Entitlement").click();
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click();
    cy.get('.oxd-dropdown-menu').contains('Add Entitlements').click()
    cy.get('button[type="submit"]').click();
    cy.contains('Required').should("exist");
    // isi data
    cy.get('.oxd-autocomplete-text-input > input').type(newEmployeeName);
    cy.contains('.oxd-autocomplete-option', newEmployeeName).click();
    cy.get('.oxd-autocomplete-dropdown').should('be.visible');
    cy.get('.oxd-autocomplete-option').eq(0).click();
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    cy.get('.oxd-select-dropdown').contains('CAN - Personal').click();
    cy.get('button[type="submit"]').click();
  })
})
