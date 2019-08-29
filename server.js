const express = require('express');
const path = require('path');

const app = express();

app.get('api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.get('api/weather', (req, res) => {
  const weather = [
    {id: 1, firstName: 'reeeee', lastName: 'Doe'}
  ];

  res.json(weather);
});


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/build'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname +'/build/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port = (process.env.PORT || 8080), () => console.log(`Server running on ${port}`));