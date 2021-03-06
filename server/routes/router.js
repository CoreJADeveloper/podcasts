const express = require('express');
const podcastsController = require('./controllers/podcasts');

const router = express.Router();

router.route('/podcasts').get(podcastsController.get_podcasts);

module.exports = router;
