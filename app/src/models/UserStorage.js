"use strict"

class UserStorage{
    static #users = {
        id: ["sehoon6295", "sehoon629515", "hoon62"],
        psword: ["sae1790!", "0930sehoon", "ljc7522"],
        name: ["이세훈", "훈세리", "훈이"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;