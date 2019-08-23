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

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/../client/build'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname +'/../client/build/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port = (process.env.PORT || 8080), () => console.log(`Server running on ${port}`));