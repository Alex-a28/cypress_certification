export class AccountApi {
    constructor() { }
    createAccount(token, startBalance, type, userId) {
        return cy.request({
            method: "POST",
            url: " https://tegb-backend-877a0b063d29.herokuapp.com/tegb/accounts/create",
            headers: {
                authorization: "Bearer " + token,
            },
            body: {
                startBalance: startBalance,
                type: type,
                userId: userId
            },
        });
    }
    addBalanceToAccount(token, accountId, amount) {
        return cy.request({
            method: "POST",
            url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/accounts/change-balance",
            headers: {
                authorization: "Bearer " + token,
            },
            body: {
                accountId: accountId,
                amount: amount,
            },
        });
    }
    getAccounts(token) {
        return cy.request({
            method: "GET",
            url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/accounts",
            headers: {
                authorization: "Bearer " + token,
            },
            body: {

            },
        });
    }
}
