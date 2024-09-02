import { Context, beforeEach, it } from "mocha";
import { Loginpage } from "../../../page-objects/login_page";
import { DashboardPage } from "../../../page-objects/dashboard_page";

describe('Atomic unisolated dashboard tests', { testIsolation: false }, () => {
    beforeEach(() => {
        new Loginpage()
            .openTEgB()
            .typeUserName("Zaxyz")
            .typePassword("Zaxyz01")
            .clickLogin();
        new DashboardPage().openDashboard();
    });
    context("Header of Dashboard  tests"), () => {
        it('Header logo is visible', () => {
            new DashboardPage().tegLogoIsVisible();
            return this;
        });
        it('Header title is visible', () => {
            new DashboardPage().tegbHeaderTitleIsVisible();
            return this;
        });

        it('Header title has text', () => {
            new DashboardPage().tegbHeaderTitleHasText("TEG#B Dashboard");
            return this;
        });

        it('Logout button has text', () => {
            new DashboardPage().logoutButtonHasText("Odhlásit se");
        });

        it('Logout button is visible', () => {
            new DashboardPage().logoutButtonIsVisible();
            return this;
        });
        it('Logout is clickable', () => {
            new DashboardPage().clickLogoutButton();
            return this;
        });
    }

    context("Left menu test with future expansion"), () => {
        it('Left menu home marker is visible ', () => {
            new DashboardPage().homeMarkerIsVisible();
        });
        it('Left enu home marker has text', () => {
            new DashboardPage().homeMarkerHasText("Domů");
            return this;
        });
        it('Account marker is visible', () => {
            new DashboardPage().accountAddButtonIsVisible();
            return this;
        });
        it('Account marker has text', () => {
            new DashboardPage().accountsMarkerHasText("Účty");
            return this;
        });
        it('Transaction Marker is visible', () => {
            new DashboardPage().transactionMarkerIsVisible();
            return this;
        });
        it('Translaction Marker has text', () => {
            new DashboardPage().transactionsMarkerHasText("Transakce");
            return this;
        });
        it('Support marker is visible', () => {
            new DashboardPage().supportMarkerIsVIsible();
            return this;
        });
        it('Support marker is has text', () => {
            new DashboardPage().supportMarkerHasText("Podpora");
            return this;
        });

    }

    context("Profile part of Dashboard  tests"), () => {
        it('Action profile button is visible', () => {
            new DashboardPage().accountAddButtonIsVisible();
        });

        it('Action profile button has text', () => {
            new DashboardPage().accountAddButtonHasText("Upravit profil");
        });

        it('Profile title has name', () => {
            new DashboardPage().profileTitleHasText("Detaily profilu");
        });

        it('Profile name has text', () => {
            new DashboardPage().profileNameHasText("Jméno");
        });

        it('Profil surname has text', () => {
            new DashboardPage().profileSurnameHasText("Příjmení");
        });

        it('Profil email has text ', () => {
            new DashboardPage().profileEmailHasText("Email");
        });

        it('Profile age has text ', () => {
            new DashboardPage().profileAgeHasText("Věk");
        });

        it('Profile telephone has text', () => {
            new DashboardPage().profileTelHasText("Telefon");
        });

    }

    context("Accounts part of Dashboard  tests"), () => {
        it('Account title has text', () => {
            new DashboardPage().accountTitleHasText("Účty");
        });
        it('Add button has text', () => {
            new DashboardPage().accountAddButtonHasText("Přidat účet");
        });

        it('Add button is visible', () => {
            new DashboardPage().accountAddButtonIsVisible();
        });
        it('Account Balance has text', () => {
            new DashboardPage().accountBalanceHeaderHasText("Zůstatek");
        });
        it('Account type has text', () => {
            new DashboardPage().accountTypeHeaderHasText("Typ účtu");
        });
    }
});