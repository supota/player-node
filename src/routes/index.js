const Express = require('express');

const router = Express.Router();

// Import other routers
const usersRouter = require('./users');

router.get('/', (req, res) => {
  res.send('GET /');
});

router.use('/users', usersRouter);

module.exports = router;
