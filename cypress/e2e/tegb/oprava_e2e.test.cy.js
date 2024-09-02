import { AccountApi } from "../../page-objects/api/accounts_api";
import { AutenticationApi } from "../../page-objects/api/autentication_api";
import { SetProfileApi } from "../../page-objects/api/setProfile_api";

import { faker } from '@faker-js/faker';

describe('Correction register, login test', () => {
    let username;
    let password;
    let email;
    let accssToken;
    let randomName;
    let randomSurname;
    let randomAge;
    let randomPhone;



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
        randomAge = faker.number.int({ max: 100 });
        randomPhone = faker.phone.number();
    })
    it('E2e flow', () => {
        let amount = 6500;
        let typeAccount = "Test";
        let userId;
        let user = new AutenticationApi();
        let profile = new SetProfileApi();
        let account = new AccountApi();

        user.register(email, username, password).as("register_response");
        cy.get("@register_response").then((response) => {
            expect(response.status).to.eq(201);
            userId = response.body.userId;
            cy.wrap(response.body.userId).as("user_id");
        });

        user.login(username, password).as("login_response");
        cy.get("@login_response").then((response) => {
            expect(response.status).to.eq(201);
            cy.wrap(response.access_token).as("access_token");
            accssToken = response.body.access_token;
            cy.wait(1000);
            cy.setCookie("access_token", accssToken);
            cy.get("@user_id").then((userId) => {
                profile.allFields(accssToken, userId, randomName, randomSurname, randomAge, email, randomPhone);
                cy.wait(500);
                account.createAccount(accssToken, amount, typeAccount, userId);
            });

            cy.visit("https://tegb-frontend-88542200c6db.herokuapp.com/dashboard");
            cy.get("[data-testid= 'username-input']").type(username);
            cy.get("[data-testid= 'password-input']").type(password);
            cy.get("[data-testid='submit-button']").click();
            cy.wait(500);
            cy.get("[data-testid='surname']").should("contain.text", "Příjmení: " + randomSurname);
            cy.get("[data-testid='phone']").should("contain.text", randomPhone);
            cy.get("[data-testid='age']").should("contain.text", randomAge);
            cy.get("[data-testid='account-balance-heading']").should("be.visible");
            cy.get("[data-testid='account-balance']").should("contain.text", amount);
            cy.get('.logout-link').click();
        });


    });
});