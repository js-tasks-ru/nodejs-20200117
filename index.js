const app = require('./app');
const logger = require('./logger');

app.listen(3000, () => {
  logger.info('App is running on http://localhost:3000');
});
