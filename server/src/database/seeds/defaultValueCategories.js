exports.seed = async function seed(knex){
    await knex('category').insert([
        { title:'Pedreiro', id:'1' },
        { title:'Doméstico', id:'2' },
        { title:'OUTRO', id:'3' },
        { title:'OUTRO', id:'4' },
        { title:'OUTRO', id:'5' },
        { title:'OUTRO', id:'6' }
    ]);
}
//para rodar a seed: npx knex seed:run