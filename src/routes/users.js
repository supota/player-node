const Express = require('express');

const router = Express.Router();

const UserController = require('../controllers/UserController');

router.get('/', UserController.getAllUsers);

module.exports = router;