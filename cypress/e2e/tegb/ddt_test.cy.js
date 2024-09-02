import newAccountsData from "../../fixtures/new_accounts_data.json";
import { AccountApi } from "../../page-objects/api/accounts_api";
import { AutenticationApi } from "../../page-objects/api/autentication_api";
import { LoginPage } from "../../page-objects/login_page";

describe('Data driven tests ', () => {
    let accssToken;
    let accountId;
    let account;
    beforeEach(() => {
        let user = new AutenticationApi();
        account = new AccountApi();
        user.login(username, password).as("login_response");
        cy.get("@login_response").then((response) => {
            accssToken = response.body.access_token;
        });
        account.getAccounts(accssToken).as("account_response");
        cy.get("@account_response").then((response) => {
            accountId = response.body.accountId;
        })

    })


    newAccountsData.forEach(accountsData => {
        it(`DDT add balance for: ${accountsData.name_prefix}`, () => {
            const amount = accountsData.amount;
            account.addBalanceToAccount(accssToken, accountId, amount);
            account.getAccounts(accssToken).as("get_accounts_response");
            cy.get("@get_accounts_response").then((response) => {
                const matchingAccount = response.body.find((account) => {
                    return account.accountId === accountId;
                })
                cy.wrap(Number(matchingAccount.balance)).should("eq", amount);
            });
        });
    });
});