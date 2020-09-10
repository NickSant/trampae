
const {hash} = require('argon2');
exports.seed = async function seed(knex){
    await knex('users').insert([
        {
            id:'34e4t2',
            name:'admano',
            email:'adm@a.com',
            whatsapp:'+5511941002345',
            city:'São Bernardo do Campo',
            uf:'SP',
            password: await hash('senha_admin_trampae')
        },
        {
            id:'34j4f2',
            name:'Vini',
            email:'viniolimpio3@gmail.com',
            whatsapp:'+5511941002333',
            city:'São Bernardo do Campo',
            uf:'SP',
            password: await hash('senha_admin_trampae')
        }   
    ])
}