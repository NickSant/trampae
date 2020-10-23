exports.seed = async function seed(knex){
    await knex('service_providers').insert([
        {id: 1, user_id: '34e4t2', finished_works: 10}
    ]);
}