"use strict";

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

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //=> [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info]  = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;