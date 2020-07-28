const mysql = require("mysql");
require('dotenv').config()


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.db_pass,
    database: 'NHS',
    port: '3306'
});

connection.connect((err) => {
    if (err) throw err;
});

module.exports =  connection;