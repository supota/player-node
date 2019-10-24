const Express = require('express');

const router = Express.Router();

const PlayerController = require('../controllers/PlayerController');

router.get('/', PlayerController.getAllPlayers);

router.get('/:id([0-9]+)', PlayerController.getOnePlayerById);

router.post('/', PlayerController.postPlayer);

router.put('/:id([0-9]+)', PlayerController.updatePlayer);

router.delete('/:id([0-9]+)', PlayerController.deletePlayer);

module.exports = router;
