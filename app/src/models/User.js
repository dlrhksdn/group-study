"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
       const { id, psword } = await UserStorage.getUserInfo(client.id);

        if(id){
            if(id === client.id && psword === client.psword){
                return { success: true, msg: "로그인 되었습니다." };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다." };
        }
        return { success: false, msg: "등록되지 않은 아이디입니다." };
    }

    async join(){
        const client = this.body;
        try{ 
            const response = await UserStorage.save(client);
            return response;
        } catch(err){
            return { success: false, msg: err }
        }
    }
}

module.exports = User;