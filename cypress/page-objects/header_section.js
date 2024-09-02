import { LoginPage } from "./login_page";


export class HeaderSection {
    constructor() {
        this.headerLogo = "[data-testid='logo-img']";
        this.headerTitle = ".app-title";
        this.headerLogoutButton = ".logout-link";
    }
    tegLogoIsVisible() {
        cy.get(this.headerLogo).should("be.visible");
        return this;
    }
    tegbHeaderTitleIsVisible() {
        cy.get(this.headerTitle).should("be.visible");
        return this;
    }
    tegbHeaderTitleHasText(text) {
        cy.get(this.headerTitle).should("have.text", text);
        return this;
    }
    logoutButtonIsVisible() {
        cy.get(this.headerLogoutButton).should("be.visible");
        return this;
    }
    logoutButtonHasText(text) {
        cy.get(this.headerLogoutButton).should("have.text", text);
        return this;
    }
    clickLogoutButton() {
        cy.get(this.headerLogoutButton).click();
        return LoginPage();
    }
}