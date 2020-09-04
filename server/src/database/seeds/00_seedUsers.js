exports.seed = async function seed(knex){
    await knex('users').insert([
        {
            id:'34e4t2',
            name:'admano',
            email:'adm@a.com',
            whatsapp:'+5511941002345',
            city:'São Bernardo do Campo',
            uf:'SP',
            password: 'SENHA_MONSTRUOSAMENTE_DIFÍCIL'
        }   
    ])
}