import { DashboardPage } from "./dashboard_page";


export class LoginPage {
    constructor() {
        this.username = "[data - testid= 'username-input']";
        this.password = "[data - testid= 'password-input']";
        this.errorMessage = "/div[class= 'error-message']";
        this.loginButton = "[data-testid='submit-button']";
        this.lostPasswordButton = "/button[data-testid='registration - link']";
        this.tegbLoginPage = "https://tegb-frontend-88542200c6db.herokuapp.com/";
        this.registerButton = "[data - testid= 'register-button']";
        this.loginTegbLogo = "[data - testid= 'logo-img']";
        this.successfullRegMessage = "[data - testid= 'success-message']";
    }
    openTEgB() {
        cy.visit(this.tegbLoginPage);
        return this;
    }
    usernameHasPlaceholder(placeHolderText) {
        cy.get(this.username).should(
            "have.attr",
            "placeholder",
            placeHolderText
        );
        return this;
    }
    typeUserName(username) {
        cy.get(this.username).should("be.visible").type(username);
        return this;
    }
    typePassword(password) {
        cy.get(this.password).should("be.visible").type(password);
        return this;
    }
    clickLogin() {
        cy.get(this.loginButton).should("be.visible").click();
        cy.wait(500);
        return new DashboardPage();
    }
    usernameHasPlaceholder(placeHolderText) {
        cy.get(this.username).should(
            "have.attr",
            "placeholder",
            placeHolderText
        );
        return this;
    }
    passwordHasPlaceholder(placeholderText) {
        cy.get(this.password).should(
            "have.attr",
            "placeholder",
            placeholderText
        );
        return this;
    }
    rememberMeHasText(rememberMeText) {
        cy.get(this.rememberMeCheckbox).should("contain.text", rememberMeText);
        return this;
    }
    paswordLostHasText(elementText) {
        cy.get(this.lostPasswordButton).should("have.text", elementText);
        return this;
    }
    passwordLostIsVisible() {
        cy.get(this.lostPasswordButton).should("be.visible");
        return this;
    }
    registerButtonHasText(elementText) {
        cy.get(this.registerButton).should("have.text", elementText);
        return this;
    }
    registerButtonIsVisible() {
        cy.get(this.registerButton).should("be.visible");
        return this;
    }
    logoIsVisible() {
        cy.get(this.loginTegbLogo).should("be.visible");
        return this;
    }
    alertNotExist() {
        cy.get(this.errorMessage).should("not.exist");
        return this;
    }



}