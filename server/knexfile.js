const path = require('path');
require('dotenv').config();
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : process.env.HOST,
      user : process.env.USER_DB,
      password : process.env.PASS_DB,
      database : process.env.DATABASE,
      filename: '.src/database/trampae_db.sql'
    },
    migrations:{
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds:{
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    }
  }
};
