const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/router');
const cors = require('cors');
const podcastsMiddlewares = require('./routes/middlewares/podcasts');
const app = express();

global.__basedir = __dirname;

require('./db/index');

app.use(bodyParser.json());

// CORS
app.use(cors({origin:true,credentials: true}));

// ROUTES
app.use('/api', podcastsMiddlewares.dummyPodcasts, routes);

// START SERVER
const port = process.env.PORT || '3001';

app.set('port', port);

const server = http.createServer(app);

server.listen(port, (req, res) => {
  console.log('Server running on port localhost:', port);
});
