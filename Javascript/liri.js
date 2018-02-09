require('dotenv').config();

var keys_js = require('./keys.js')
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs');


var spotify = new Spotify(keys_js.spotify);
var twitter = new Twitter(keys_js.twitter);

var input = process.argv[2];
var userRequest = process.argv[3] + [4];


// Node input for App
if (input === 'my-tweets') {
  console.log(lastTweets());

} else if (input === 'spotify-this-song') {
  console.log('--------------------------');
  console.log(spotifyRequest());
  console.log('--------------------------');

} else if (input === 'movie-this') {
  console.log(OMDBMovie());

} else if (input === 'do-what-it-says') {
  console.log(fs.random.txt);

} else {
  console.log('Sorry that is not a recognozed commant. Try: ')
  console.log('\n my-tweets');
  console.log('\n spotify-this-song');
  console.log('\n movie-this');
  console.log('\n do-what-it-says');
};

// Twitter Request function
function lastTweets() {
  var params = {
    screen_name: '@andrezZoka'
  };
  twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log('------------ MY TWEETS ------------');
      for (var i = 1; i < 3; i++) {
        console.log(tweets[i].text);
        console.log(tweets[i].created_at);
        console.log('----------------------------------');
      }
    }
  })
};


// Spotify Request function
function spotifyRequest() {
  if (!userRequest === true) {
    userRequest === 'amore'
  } else
  spotify.request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
    .then(function(data) {
      console.log('Artist: ' + data.album.artists);
      console.log('Song name: ' + data.name);
      console.log('Album: ' + data.album.name);

    })
    .catch(function(err) {
      console.error('Error occurred: ' + err);
    })
};

// OMDB Movie function
function OMDBMovie() {
  var request = require('request');
  var queryUrl = 'http://www.omdbapi.com/?t=' + userRequest + '&y=&plot=short&apikey=trilogy';
   queryUrl = function (error, response, body) {
    if (!error && response.statusCode === 200) {
    console.log('-------------------OMDB!-------------------');
    console.log('error:', error);
      console.log("The movie's rating is: " + JSON.parse(body).Ratings)
      console.log("Title of the movieis: " + JSON.parse(body).Title)
      console.log("Year the movie came out: " + JSON.parse(body).Year)
      console.log("IMDB Rating of the movie: " + JSON.parse(body).Ratings[0])
      console.log("Rotten Tomatoes Rating of the movie: " + JSON.parse(body).Ratings[2])
      console.log("Country where the movie was produced: " + JSON.parse(body).Country)
      console.log("Language of the movie: " + JSON.parse(body).Language)
      console.log("Plot of the movie: " + JSON.parse(body).Plot)
      console.log("Actors in the movie: " + JSON.parse(body).Actors)

    }
  }
};
