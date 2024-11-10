const mysql = require("mysql");

const db = mysql.createConnection({
    host: "login-system.cxkegu28syv8.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "Sae1790!",
    database: "login_system",
});

db.connect();

module.exports = db;