/* eslint-disable no-undef */
const express = require('express');
const config = require('./config');
const path = require('path');
// const guard = require('./helpers/guard');
const auth = require('./routes/api/auth');
const user = require('./routes/api/user');
const weather = require('./routes/api/weather');

const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

//app.use(/\/api\/.{1,}/, guard);
app.use('/api/auth', auth);
app.use('/api/user', user);
app.use('/api/weather', weather);

const env = config.ENV;
const port = config.PORT;


if(env === 'production'){
  // Serve only the static files form the dist directory
  app.use(express.static(__dirname + '/../client/build'));

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname +'/../client/build/index.html'));
  });
}


// Start the app by listening on the default Heroku port
app.listen(port, () => console.log(`Server running on ${port}`));