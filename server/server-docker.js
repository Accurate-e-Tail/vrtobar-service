setTimeout(() => {
  console.log('30 seconds....');
  require('./db/seed');

  setTimeout(() => {
    console.log('30 seconds + 15 seconds ...');
    const app = require('./app');

    const PORT = 3003;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }, 15000);
}, 30000);
