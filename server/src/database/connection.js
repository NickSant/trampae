import knex from 'knex';

const connection = knex({
    client:'mysql',
    version:'2.18',//OBS -> Versão no package.json!!
    connection:{
        host:'localhost',
        user:'root',
        password:'',
        database:'trampae_db'
    }
});
export default connection;