// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      filename: './src/database/listingBD.pg',
      user:'postgres',
      password:'postgres',
      database:'listingBD'
    },
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
