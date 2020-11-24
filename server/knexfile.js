const path = require('path')
const { dbConnection } = require('./src/database/connection')
require('dotenv').config()
module.exports = {
	development: {
		client: 'mysql',
		connection: dbConnection,
		migrations: {
			directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
		},
		seeds: {
			directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
		},
	},
	production: {
		client: 'mysql',
		connection: dbConnection,
		migrations: {
			directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
		},
		seeds: {
			directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
		},
	},
}
