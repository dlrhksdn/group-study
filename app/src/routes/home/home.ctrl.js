"use strict"

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login');
    },    
    join: (req, res) => {
        res.render('home/join');
    },
};

const users = {
    id: ["sehoon6295", "sehoon629515"],
    psword: ["sae1790!", "0930sehoon"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === (psword)){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "잘못된 id 및 password입니다.",
        });
    }
};
module.exports = {
    output,
    process,
}