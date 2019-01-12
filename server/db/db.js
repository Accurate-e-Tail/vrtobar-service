const Sequelize = require('sequelize');

// const connection = new Sequelize('amazon_dev', 'root', 'student', {
//   host: 'localhost',
//   dialect: 'mysql',
//   logging: false,
// });

const connection = new Sequelize('amazon', 'root', 'student', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})


connection
  .authenticate()
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
  connection,
};
