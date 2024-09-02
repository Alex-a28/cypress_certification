import { LeftMenuBar } from "./left_menu_bar";

export class DashboardPage extends LeftMenuBar {
    constructor() {
        super();
        this.profileDetailHeader = "[data-testid='profile-details-title']";
        this.profileActionButton = ".profile-action";
        this.profileName = "[data-testid='name']";
        this.profileSurname = "[data-testid='surname']";
        this.profileEmail = "[data-testid='email']";
        this.profileTel = "[data-testid='phone']";
        this.profileAge = "[data-testid='age']";
        this.accountTitle = "[data - testid$='accounts-title']";
        this.accountAddButton = ".account-action";
        this.accountNumberHeader = "[data-testid='account-number-heading']";
        this.accountBalanceHeader = "[data-testid='account-balance-heading']";
        this.accountTypeHeader = "[data-testid='account-type-heading']";
        this.dashboardUrl = "https://tegb-frontend-88542200c6db.herokuapp.com/dashboard";
    }
    openDashboard() {
        cy.visit(this.dashboardUrl);
        cy.wait(500);
        return this;
    }
    profileActionButtonHasText(text) {
        cy.get(this.profileActionButton).should("have.text", text);
        return this;
    }
    profileActionButtonIsVisible() {
        cy.get(this.profileActionButton).should("be.visible");
        return this;
    }
    profileTitleHasText(text) {
        cy.get(this.profileDetailHeader).should("have.text", text);
        return this;
    }
    profileNameHasText(text) {
        cy.get(this.profileName).should("have.text", text);
        return this;
    }
    profileSurnameHasText(text) {
        cy.get(this.profileSurname).should("have.text", text);
        return this;
    }
    profileEmailHasText(text) {
        cy.get(this.profileEmail).should("have.text", text);
        return this;
    }
    profileTelHasText(text) {
        cy.get(this.profileTel).should("have.text", text);
        return this;
    }
    profileAgeHasText(text) {
        cy.get(this.profileAge).should("have.text", text);
        return this;
    }
    accountTitleHasText(text) {
        cy.get(this.accountTitle).should("have.text", text);
        return this;
    }
    accountAddButtonIsVisible() {
        cy.get(this.accountAddButton).should("be.visible");
        return this;
    }
    accountAddButtonHasText(text) {
        cy.get(this.accountAddButton).should("have.text", text);
        return this;
    }
    accountBalanceHeaderHasText(text) {
        cy.get(this.accountBalanceHeader).should("have.text", text);
        return this;
    }
    accountTypeHeaderHasText(text) {
        cy.get(this.accountTypeHeader).should("have.text", text);
        return this;
    }

}