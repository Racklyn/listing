require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    //"postgres://YourUserName:YourPassword@localhost:5432/YourDatabase"
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 100,
    },
    migrations:{
      directory: './src/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 100,
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
