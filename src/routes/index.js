const Express = require('express');

const router = Express.Router();

// Import other routers
const playersRouter = require('./players');

router.use('/players', playersRouter);

module.exports = router;
