import knex from 'knex';
import mysql from 'mysql'
require('dotenv').config();

const dbConnection = {
    host: process.env.HOST,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DATABASE
}

const connection = knex({
    client:'mysql',
    version:process.env.DB_VERSION,//OBS -> Versão no package.json!!
    connection: dbConnection
});

export default connection;

async function tryMysqlConnection(){
    const con = mysql.createConnection(dbConnection)
    con.connect(function(err){
        if(err) throw err
    })
}

export { tryMysqlConnection }