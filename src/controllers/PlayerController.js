const Player = require('../models/Player');

// Execute DB manipuration here
class PlayerController {
  static getAllPlayers = async (req, res) => {
    try {
      const players = await Player.findAll();
      return res.json({
        players: players
      });
    } catch (e) {
      return res.status(500).send('Failed to get all players.');
    }
  };

  static getOnePlayerById = async (req, res) => {
    // Get id from params
    const id = req.params.id;
    if (!id) {
      return res.status(404).send('Id not found.');
    }

    try {
      // Get one player from id
      const player = await Player.findOne({
        where: {
          id: id
        }
      });

      // Check
      if (!player) {
        return res.status(404).send('No player was found.');
      }

      return res.json({
        player: player
      });
    } catch (e) {
      return res.status(500).send('Failed to get a player from ID.');
    }
  };

  static postPlayer = async (req, res) => {
    // Get post body.
    const {
      firstName,
      lastName,
      firstRoma,
      lastRoma,
      age,
      sex,
      bio,
      twitterID,
      facebookID,
      siteURL
    } = req.body;
    if (
      !(firstName && lastName && firstRoma && lastRoma && age && sex && bio)
    ) {
      return res.status(400).send('Invalid parameters.');
    }

    // Create user
    try {
      await Player.create({
        firstName: firstName,
        lastName: lastName,
        firstRoma: firstRoma,
        lastRoma: lastRoma,
        age: age,
        sex: sex,
        bio: bio,
        twitterID: twitterID,
        facebookID: facebookID,
        siteURL: siteURL
      });
      return res.status(200).send();
    } catch (e) {
      return res.status(500).send('Could not create player.');
    }
  };

  static updatePlayer = async (req, res) => {
    // Get id from params
    const id = req.params.id;
    if (!id) {
      return res.status(404).send('Id not found.');
    }

    // Get player from id
    let player;
    try {
      player = await Player.findOne({
        where: {
          id: id
        }
      });
    } catch (e) {
      return res.status(500).send('Could not get a player.');
    }

    // Get request body and edit player status
    const {
      firstName,
      lastName,
      firstRoma,
      lastRoma,
      age,
      sex,
      bio,
      twitterID,
      facebookID,
      siteURL
    } = req.body;
    try {
      await player.update({
        firstName: firstName || player.firstName,
        lastName: lastName || player.lastName,
        firstRoma: firstRoma || player.firstRoma,
        lastRoma: lastRoma || player.lastRoma,
        age: age || player.age,
        sex: sex || player.sex,
        bio: bio || player.bio,
        twitterID: twitterID || player.twitterID,
        facebookID: facebookID || player.facebookID,
        siteURL: siteURL || player.siteURL
      });
      return res.status(200).send('Sucess!');
    } catch (e) {
      return res.status(500).send('Failed to update player.');
    }
  };

  static deletePlayer = async (req, res) => {
    // Get id from params
    const id = req.params.id;
    if (!id) {
      return res.status(404).send('Id not found.');
    }

    // Get player from id
    let player;
    try {
      player = await Player.findOne({
        where: {
          id: id
        }
      });
      await player.destroy();
      return res.status(200).send('Success!');
    } catch (e) {
      return res.status(500).send('Could not get or delete a player.');
    }
  };
}

module.exports = PlayerController;
