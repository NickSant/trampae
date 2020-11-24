const knex = require('knex')
const mysql = require('mysql')
require('dotenv').config()

const dbConnection = {
    host: process.env.DB_HOST,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DATABASE
}

const connection = knex({
    client:'mysql',
    version:process.env.DB_VERSION,//OBS -> Versão no package.json!!
    connection: dbConnection
})


async function tryMysqlConnection(){
    console.log(dbConnection, 'dbConnection')
    const con = mysql.createConnection(dbConnection)
    con.connect(function(err){
        if(err) throw err
    })
}

module.exports = {
    connection,
    tryMysqlConnection, 
    dbConnection
}
