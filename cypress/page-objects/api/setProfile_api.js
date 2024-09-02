export class SetProfileApi {
    constructor() { }
    allFields(token, userId, name, surname, age, email, phone) {
        return cy.request({
            method: "PATCH",
            url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/profile",
            headers: {
                authorization: "Bearer " + token,
            },
            body: {
                userId: userId,
                name: name,
                surname: surname,
                age: age,
                email: email,
                phone: phone,
            },
        });
    }
    emptyProfile(token) {
        return cy.request({
            method: "PATCH",
            url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/profile",
            headers: {
                authorization: "Bearer " + token,
            },
            body: {},
        })
    }
}