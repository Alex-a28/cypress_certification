import { AutenticationApi } from "../../../page-objects/api/autentication_api";
import { faker } from '@faker-js/faker';


describe('API login tests ', () => {
    let username;
    let email;
    let password;

    beforeEach(() => {
        username = faker.internet.userName();
        password = faker.internet.password();
        email = faker.internet.email();
        username = username.toLowerCase();
        const hook = faker
    });

    context("API login test using Object API method"), () => {
        it('Login API test check 201 response', () => {
            let newUser = new AutenticationApi();
            newUser.register(email, username, password);
            newUser.login(username, password).as("login_response");
            cy.wait("@login_response").its("response.statusCode").should("eq", 201);

        });
        it('Login API test checking access token in response', () => {
            let newUser = new AutenticationApi()
            newUser.register(email, username, password);
            newUser.login(username, password).as("login_response");
            cy.wait("@login_response").its("response.body.access_token").should("exist");

        })
    }

});
