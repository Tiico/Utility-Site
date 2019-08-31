const express = require('express');
const path = require('path');
const fetch = require("node-fetch");

const API = 'ea9613e7a78b33977a6bbe6d3b0ff271';

const app = express();

app.get('/api/weather', (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${API}`
  fetch(url)
  .then(res => res.json())
  .then((data) => {
    res.json(data);
  })
  .catch(console.log)
});

//process.env.NODE_ENV = 'production'

if(process.env.NODE_ENV === 'production'){
  // Serve only the static files form the dist directory
  app.use(express.static(__dirname + '/client/build'));
  console.log()

  app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname +'/client/build/index.html'));
  });
}


// Start the app by listening on the default Heroku port
app.listen(port = (process.env.PORT || 8080), () => console.log(`Server running on ${port}`));