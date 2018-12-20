const Sequelize = require('sequelize');

const connection = new Sequelize('amazon_dev', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql',
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
