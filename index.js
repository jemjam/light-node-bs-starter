var dotenv = require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.use(jsonParser);

app.post('/start', function(req, res) {
  // http://sendwithus.github.io/battlesnake/#post-start

  var width, height, game_id;
  width = req.body.width;
  height = req.body.height;
  game_id = req.body.game_id;

  console.log(game_id)
  var head_url = req.protocol + '://' + req.get('host') + '/static/snek.png';

  res.json({
    "color": "#FF0000",
    "head_url": head_url,
    "name": "Cage Snake",
    "taunt": "OH GOD NOT THE BEES"
  });
});

app.post('/move', function(req, res) {
  // http://sendwithus.github.io/battlesnake/#post-move

  // Return a random direction
  directions = ['up', 'down', 'left', 'right']
  move = {
    "taunt": "wakawaka",
    "move": directions[Math.floor(Math.random() * 4)]
  }

  res.json(move);
});

app.use('/static', express.static('static')) // Host static assets from /static

// For debugging: if you point the browser at your app this shows server returns
app.get('/', (req, res) => {
  res.send('Send POST requests to `/START` or `/MOVE` to play.')
})

var PORT = process.env.PORT ? process.env.PORT : 9000;
app.listen(PORT, function() {
  console.log("App is listening on", PORT);
});
