module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'db'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'checkinvietnam'),
        username: env('DATABASE_USERNAME', 'check1Nvi3tNam'),
        password: env('DATABASE_PASSWORD', 'checkin@1325'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
