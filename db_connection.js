const mysql = require('mysql');

const host = process.env.host
const user = process.env.user
const password = process.env.password
const database = process.env.database

const con = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
})

con.connect(function(err) {
    if(err) throw err;
    console.log('db connected!')
})

module.exports = con;