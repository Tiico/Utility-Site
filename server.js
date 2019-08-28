const express = require('express');
const path = require('path');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.get('/api/weather', (req, res) => {
  fetch('https://samples.openweathermap.org/data/2.5/weather?zip=16453,se&appid=b6907d289e10d714a6e88b30761fae22')
  .then(result => res.json())

  res.json(result);
});

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/build'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname +'/build/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port = (process.env.PORT || 8080), () => console.log(`Server running on ${port}`));