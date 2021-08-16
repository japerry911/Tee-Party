const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const { DB_URL, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: 'tee-party-development',
    url: DB_URL,
    dialect: 'postgres',
  },
};
