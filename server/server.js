const express = require('express');
const config = require('./config');
const path = require('path');

const guard = require('./helpers/guard');
const auth = require('./routes/api/auth');
const weather = require('./routes/api/weather');

const app = express();

//app.use(/\/api\/.{1,}/, guard);

app.use('/api/user', auth);
app.use('/api/weather', weather);


if(config.ENV === 'production'){
  // Serve only the static files form the dist directory
  app.use(express.static(__dirname + '/../client/build'));

  app.get('/*', function(req, res) {

  res.sendFile(path.join(__dirname +'/../client/build/index.html'));
  });
}


// Start the app by listening on the default Heroku port
app.listen(port = (process.env.PORT || 8080), () => console.log(`Server running on ${port}`));