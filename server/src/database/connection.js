import knex from 'knex';
require('dotenv').config();
const connection = knex({
    client:'mysql',
    version:process.env.DB_VERSION,//OBS -> Versão no package.json!!
    connection:{
        host: process.env.HOST,
        user: process.env.USER_DB,
        password: process.env.PASS_DB,
        database: process.env.DATABASE
    }
});
export default connection;