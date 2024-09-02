import { createCustomElement } from "../helpers/custom_elements";
import { LoginPage } from "./login_page";



export class RegisterPage {
    constructor() {
        this.tegbUrlRegistration = "https://tegb-frontend-88542200c6db.herokuapp.com/register/";
        this.username = `input[placeholder='Uživatelské jméno']`;
        this.userEmail = `input[placeholder='Email']`;
        this.password = `input[placeholder='Heslo']`;
        this.registerButton = `[data-testid="submit-button"]`;
        this.backToLoginButton = `button[type='button'][class='link-button']`;


        this.usernameInput = createCustomElement("[data - testid= 'username-input']");
        this.passwordInput = "#password";
    }

    //Zaxyz
    //Zaxyz01
    //Zaxyz01@example.org
    openTegBRegistration() {
        cy.visit(this.tegbUrlRegistration);
        return this;
    }
    typeName(username) {
        cy.get(this.username).clear().type(username);
        return this;
    }
    typePassword(password) {
        cy.get(this.password).clear().type(password);
        return this;
    }
    typeEmail(userEmail) {
        cy.get(this.userEmail).clear().type(userEmail);
        cy.wait(500)
        return this;
    }
    clickRegistrationButton() {
        cy.get(this.registerButton).should("be.visible").click();
        return new LoginPage
    }
}