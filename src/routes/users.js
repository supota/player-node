const Express = require('express');

const router = Express.Router();

router.get('/', (req, res) => {
    res.send('GET /users');
});

module.exports = router;