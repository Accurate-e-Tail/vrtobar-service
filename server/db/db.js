const Sequelize = require('sequelize');

const connection = new Sequelize('amazon_dev', 'root', 'student', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

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
