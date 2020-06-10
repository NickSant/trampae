const path = require('path');
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'trampae_db',
      filename: '.src/database/trampae_db.sql'
    },
    migrations:{
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    }
  }
};
