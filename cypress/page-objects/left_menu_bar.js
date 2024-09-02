import { HeaderSection } from "./header_section";


export class LeftMenuBar extends HeaderSection {
    constructor() {
        super();
        this.homeMarker = "//li[contains(text(),'Domů')]";
        this.accountsMarker = "//li[contains(text(),'Účty')]";
        this.transactionsMarker = "//li[contains(text(),'Transakce')]";
        this.supportMarker = "//li[contains(text(),'Transakce')]";
    }
    homeMarkerIsVisible() {
        cy.get(this.homeMarker).should("be.visible");
        return this;
    }
    homeMarkerHasText(text) {
        cy.get(this.homeMarker).should("have.text", text);
        return this;
    }
    accountMarkerIsVisible() {
        cy.get(this.accountsMarker).should("be.visible");
        return this;
    }
    accountsMarkerHasText(text) {
        cy.get(this.accountsMarker).should("have.text", text);
        return this;
    }
    transactionMarkerIsVisible() {
        cy.get(this.transactionsMarker).should("be.visible");
        return this;
    }
    transactionsMarkerHasText(text) {
        cy.get(this.transactionsMarker).should("have.text", text);
        return this;
    }
    supportMarkerIsVIsible() {
        cy.get(this.supportMarker).should("be.visible");
        return this;
    }
    supportMarkerHasText(text) {
        cy.get(this.supportMarker).should("have.text", text);
        return this;
    }

}