

export class AutenticationApi {
    constructor() { }
    register(email, username, password) {
        return cy.request({
            method: "POST",
            url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/register",
            body: {
                email: email,
                username: username,
                password: password,
            },
        });
    }
    login(username, password) {
        return cy.request({
            method: "POST",
            url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/login",
            body: {
                username: username,
                password: password,
            },
        });
    }
    profile(token) {
        return cy.request({
            method: "GET",
            url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/profile",
            headers: {
                authorization: "Bearer " + token,
            },
            body: {

            },
        });
    }
}