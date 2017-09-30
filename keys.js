console.log('Twitter Keys file is loaded');

var Twitter = require("twitter");
var twitterKeys = new Twitter({
  consumer_key: 'hRfQxr78rJ9xggROsTtBCWVMy',
  consumer_secret: 'TqZFhcC0in5HlLFqNdgu23MJ67BNkqscAT8TaQwFD4Ye0hL4m4',
  access_token_key: '777266953098362881-dJtjvAX8gudXFHuS7AGVXVAws70qlyu',
  access_token_secret: 'JvOWEJDESckq5UdE0lYtApJro6zzcgujIsIrHhORCP00X',
})

var Spotify = require("node-spotify-api");
var spotifyKey = new Spotify({
  id: "66b1dd0cf299455b9feb0b3df2b4d9e4",
  secret: "8fd2137a46994ca697ce7395897016f9",
})

module.exports = twitterKeys;
module.exports = spotifyKey;