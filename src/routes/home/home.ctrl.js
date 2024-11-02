"use strict"

const home = (req, res) => {
    res.render('home/index');
};

const login = (req, res) => {
    res.render('home/login');
};

const join = (req, res) => {
    res.render('home/join');
};

module.exports = {
    home,
    login,
    join,
}