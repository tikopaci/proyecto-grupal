const mysql = require('mysql') ;
const util = require('util');

let pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '',
    port: 3306,
    database: 'proyecto_grupal'
});

pool.query = util.promisify(pool.query);

module.exports = pool;
