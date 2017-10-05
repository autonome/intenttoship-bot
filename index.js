/*

Bot that powers the @intenttoship Twitter account.

*/

var feedToTwitter = require('feed-to-tweet');

var twitterCfg = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

var feeds = [
  {
    feedURL: 'https://groups.google.com/forum/feed/mozilla.dev.platform/topics/rss.xml?num=50',
    formatter: function(item) {
      return 'Gecko: ' + item.title + ' ' + item.link;
    }
  },
  {
    feedURL:'https://groups.google.com/a/chromium.org/forum/feed/blink-dev/topics/rss.xml?num=50',
    formatter: function(item) {
      return 'Blink: ' + item.title + ' ' + item.link;
    }
  }
];

// Kick it off
feedToTwitter({
  feeds: feeds,
  twitterConfig: twitterCfg,
  searches: ['^intent to '],
  checkIntervalMins: 60,
  tweetIntervalSecs: 10
});

// Pingable page
var express = require('express');
var app = express();
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// Keepy uppy
const http = require('http');
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);