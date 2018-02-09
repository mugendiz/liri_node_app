console.log('this is loaded');

// Spotify API keys
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
  // id: '34e84d93de6a4650815e5420e0361fd3',
  // secret: '5162cd8b5cf940f48702dffe096c2acb'
};
// Twitter API keys
exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};
