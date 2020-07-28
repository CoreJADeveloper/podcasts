const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
// let public_directory = './public/images';

// require('./db/index');

app.use(bodyParser.json());

// STATIC FILES
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../client/podcasts/dist/browser')));

// ROUTES

app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, '../client/podcasts/dist/browser/index.html'))
})

// START SERVER
const port = process.env.PORT || '3001';

app.set('port', port);

const server = http.createServer(app);

server.listen(port, (req, res) => {
  console.log('Server running on port localhost:', port);
});
