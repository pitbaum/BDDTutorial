const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
let valid;
Given(/^I am on the login page$/, () => {
  cy.visit("http://localhost:8080/#/login");
  cy.contains("Login");
});

Given(/^I enter valid credentials$/, () => {
  cy.get("[data-testid=email]").type("good@email.com");
  cy.get("[data-testid=password]").type("goodpassword");
  valid = true;
});

Given(/^I enter incorrect credentials$/, () => {
  cy.get("[data-testid=email]").type("bad@email.com");
  cy.get("[data-testid=password]").type("badpassword");
  valid = false;
});

When(/^I click on login button$/, () => {
  if (valid) {
    cy.intercept("POST", "/login", {
      statusCode: 201,
      body: {
        token: "8zwa76gtd87aotghz987uwaztdgho9p87zh",
      },
    }).as("intercept");
  } else {
    cy.intercept("POST", "/login", (req) => {
      req.reply(400);
    }).as("errintercept");
  }
  cy.get("[data-testid=loginBtn").click();
  if (valid) cy.wait("@intercept");
  else cy.wait("@errintercept");
});

Then(/^I see successfully logged in$/, () => {
  cy.contains("Successfully Logged In");
});

Then(/^I should see an error message$/, () => {
  cy.contains("Error");
});
