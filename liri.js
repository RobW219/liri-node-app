var inquirer = require("inquirer");
var Twitter = require("twitter");
var twitterKeys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotifyKey = require("./keys.js");

inquirer.prompt([
  {
    type: "list",
    name: "commandList",
    message: "Choose from the below search options.",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"]
  }
]).then(function(user) {
  
  if (user.commandList === "my-tweets") {
    console.log("==============================================");
    twitterKeys.get('favorites/list', {screen_name: process.argv[2], count: 5}, function(error, tweets, response) {
      if(error) throw error;
      console.log(JSON.stringify(tweets, null, 2)); 
    });
    console.log("==============================================");
  }
  
  else if (user.commandList === "spotify-this-song") {
    console.log("==============================================");
    spotifyKey.search({ type: 'track', query: process.argv[2]}, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      console.log(JSON.stringify(data, null, 2)); 
    });
    console.log("==============================================");
  }
  else if (user.commandList === "movie-this") {
    console.log("==============================================");
    console.log(movieTitle);
    console.log(movieYear);
    console.log(movieRating);
    console.log(movieTomatoe);
    console.log(movieCountry);
    console.log(movieLanguage);
    console.log(moviePlot);
    console.log(movieCast);
    console.log("==============================================");
  }else if (user.commandList === "do-what-it-says") {
    console.log("==============================================");
    console.log("default spotify");
    console.log("==============================================");
  } 
  else {
    console.log("==============================================");
    console.log("I'm so confused.");
    console.log("==============================================");;
  }
});

var request = require("request");
var nodeArgs = process.argv;
var movieName = "";
var movieTitle = "";
var movieYear = "";
var movieRating = "";
var movieTomatoe = "";
var movieCountry = "";
var movieLanguage = "";
var moviePlot = "";
var movieCast = "";

for (var i = 2; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  }
  else {
    movieName += nodeArgs[i];
  }
}
var movieUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
console.log(movieUrl);
request(movieUrl, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    movieTitle = ("Title: " + JSON.parse(body).Title);
    movieYear = ("Release Year: " + JSON.parse(body).Year);
    movieRating = ("IMDB Rating: " + JSON.parse(body).imdbRating);
    movieTomatoe = ("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1]);
    movieCountry = ("Country:" + JSON.parse(body).Country);
    movieLanguage = ("Language: " + JSON.parse(body).Language);
    moviePlot = ("Plot: " + JSON.parse(body).Plot);
    movieCast = ("Cast: " + JSON.parse(body).Actors);
  }
});