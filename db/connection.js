const mysql = require('mysql2');

//connect to Database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user:'root',
        password:'D@server@78',
        database:'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;