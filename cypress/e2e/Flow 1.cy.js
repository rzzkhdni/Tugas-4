/// <reference types="cypress" />

describe('OrangeHRM e2e Testing - Menambahkan Karyawan Baru', () => {
  const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php';
  
  const usernameAdmin = "Admin";
  const passwordAdmin = "admin123";

  const employeeFirstName = "John";
  const employeeMiddleName = "Michael";
  const employeeLastName = "Taylor";

  const newEmployeeName = "John Michael Taylor";
  const newUsername = "johntaylor";
  const newPassword = "test1234";

  beforeEach(() => {
    // visit url
    cy.visit(baseUrl, '/auth/login');
  })

  // 
  it('Menambahkan Karyawan Baru', () => {
    // Login dengan password salah
    cy.wait(200);
    cy.get('input[name="username"]').type("admina");
    cy.get('input[name="password"]').type(passwordAdmin);
    cy.get('button[type="submit"]').click();
    cy.wait(200);
    cy.contains("Invalid credentials").should("exist");

    // Login dengan password benar
    cy.get('input[name="username"]').type(usernameAdmin);
    cy.get('input[name="password"]').type(passwordAdmin);
    cy.get('button[type="submit"]').click();
    cy.wait(100);
    cy.contains("Dashboard").should("exist");

    //Tambah karyawan baru 
    //tanpa input nama
    cy.contains("PIM").click();
    cy.contains("Add Employee").click();
    cy.get('button[type="submit"]').click();
    cy.contains("Required").should("exist");
    cy.wait(20);
    // input nama
    cy.get('input[name="firstName"]').type(employeeFirstName);
    cy.get('input[name="middleName"]').type(employeeMiddleName);
    cy.get('input[name="lastName"]').type(employeeLastName);
    cy.get('button[type="submit"]').click();
    cy.wait(50);
    cy.contains("Personal Details").should("exist");

    // Buat akun untuk karyawan
    cy.contains("Admin").click();
    cy.contains("Add").click();
    cy.contains("Add User").should("exist");
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.contains('ESS').click()
    cy.get('.oxd-autocomplete-text-input > input').type(newEmployeeName);
    cy.contains('.oxd-autocomplete-option', newEmployeeName).click();
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.contains('Enabled').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(newUsername)
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(newPassword);
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(newPassword);
    cy.get('.oxd-button--secondary').click()
  })
})
