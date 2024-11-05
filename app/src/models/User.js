"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const body = this.body;
        const { id, psword } =  UserStorage.getUserInfo(body.id);

        if(id){
            if(id === body.id && psword === body.psword){
                return { success: true, msg: "로그인 되었습니다." };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다." };
        }
        return { success: false, msg: "등록되지 않은 아이디입니다." };
    }
}

module.exports = User;