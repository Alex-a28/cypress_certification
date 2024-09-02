export class CreateAccount {
    createAccount(startBalance, type) {
        return cy.request({
            method: "POST",
            url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/accounts/create",
            headers: {
                authorization: "Bearer " + token,
            },
            body: {
                startBalance: "1029387",
                type: "TEST",
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property("userId");
            expect(response.body.balance).to.eq(startBalance);
            expect(response.body.status).to.be.a("Active");
        });
    }
    createEmptyProfile() {
        cy.request({
            method: "PATCH",
            url: "https://tegb-backend-877a0b063d29.herokuapp.com"
        })

    }

}