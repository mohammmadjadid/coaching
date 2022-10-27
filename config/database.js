// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });



module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      // host: env('DATABASE_HOST', '184.168.99.170'),
      // port: env.int('DATABASE_PORT', 3306),
      // database: env('DATABASE_NAME', 'strapi'),
      // user: env('DATABASE_USERNAME', 'strapiuser'),
      // password: env('DATABASE_PASSWORD', 'Medo###1996'),
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', ''),
      ssl:false
    },
    debug: false,
  },
});





