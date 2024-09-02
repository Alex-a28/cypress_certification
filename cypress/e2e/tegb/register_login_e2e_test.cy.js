import { AccountApi } from "../../page-objects/api/accounts_api";
import { AutenticationApi } from "../../page-objects/api/autentication_api";
import { SetProfileApi } from "../../page-objects/api/setProfile_api";
import { DashboardPage } from "../../page-objects/dashboard_page";
import { LoginPage } from "../../page-objects/login_page";

import { faker } from '@faker-js/faker';
import { RegisterPage } from "../../page-objects/register_page";

describe('Complete E2E testing TEGB', { testIsolation: false }, () => {
    let username;
    let password;
    let email;
    let userId;
    let accountId;
    let accssToken;

    before(() => {
        username = faker.internet.userName();
        password = faker.internet.password();
        email = faker.internet.email();
        username = username.toLowerCase();
        randomName = faker.internet.userName({
            firstName: 'Elizabeth'
        });
        randomSurname = faker.internet.userName({
            lastName: 'Donneck'
        });
        randomAge = faker.string.numeric(1);
        randomPhone = faker.phone.number();
    });
    it('Register new user', () => {
        new RegisterPage()
            .openTegBRegistration()
            .typeName(username)
            .typePassword(password)
            .typeEmail(email)
            .clickRegistrationButton();

    });
    it.only('Create profile & account via API', () => { //not possible in application
        let amount = 6500;
        let accountType = "Test";
        let user = new AutenticationApi();
        let profile = new SetProfileApi(); //XYES
        let account = new AccountApi();
        user.register(email, username, password);
        user.login(username, password).as("login_response");
        cy.get("@login_response").then((response) => {
            accssToken = response.body.access_token;
        });
        cy.setCookie("access_token", accssToken);
        user.profile(accssToken).as("login_userId");
        cy.wait("@login_userId").then((response) => {
            userId = response.body.userId;
        });
        profile.allFields(accssToken, randomName, randomSurname, randomAge, email, randomPhone).as("profile_response");
        cy.wait("@profile_response").its("response.statusCode").should("eq", 200);

        account.createAccount(accssToken, amount, accountType, userId).as("account_response");
        cy.get("@account_response").then((response) => {
            accountId = response.body.accountId;
        })
    });
    it('Log into application as user, check amount and logout', () => {
        new LoginPage()
            .openTEgB()
            .typeUserName(username)
            .typePassword(password)
            .clickLogin();
        new DashboardPage()
            .openDashboard()
            .accountBalanceHeaderIsVisible()
            .accountTypeHeaderHasText(amount)
            .clickLogoutButton();
    });
});