const express = require('express');

// Create out app
var app = express();

// Redirect pages to same index file. Front-end routing will handle the path
function handlePage(req, res){
  res.sendFile(__dirname + '/public/index.html');
}
app.get("/", handlePage);
app.get("/about", handlePage);

// For other requests, statically serve public folder
app.use(express.static('public'));

app.listen(3000, function()
{
  console.log('Express server is up on port 3000');
});