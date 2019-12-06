/*

Bot that powers the @intenttoship Twitter account.

*/

var feedToTwitter = require('feed-to-tweet');

let twitterCfg = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

let botConfig = {
  minsBetweenFeedChecks: 6000,
  secsBetweenTweets: 10,
  msBetweenKeepyUppy: 280000  // just under 5 mins
}

function encodeLtGt(title) {
  return title.replace(/<|>/gm, function(i) {
    return '&#' + i.charCodeAt(0) + ';';
  });
}

var feeds = [
  {
    feedURL: 'https://groups.google.com/forum/feed/mozilla.dev.platform/topics/rss.xml?num=50',
    searches: ['^intent to '],
    formatter: function(item) {
      return 'Gecko: ' + encodeLtGt(item.title) + ' ' + item.link;
    }
  },
  {
    feedURL: 'https://groups.google.com/a/chromium.org/forum/feed/blink-dev/topics/rss.xml?num=50',
    searches: ['^intent to '],
    formatter: function(item) {
      return 'Blink: ' + encodeLtGt(item.title) + ' ' + item.link;
    }
  },
  {
    feedURL: 'https://webkit.org/feed/atom/',
    searches: ['^Release Notes for Safari Technology Preview'],
    formatter: function(item) {
      return 'Webkit: ' + encodeLtGt(item.title) + ' ' + item.link;
    }
  },
  {
    feedURL: 'https://developer.microsoft.com/en-us/microsoft-edge/platform/status/rss/',
    formatter: function(item) {
      return 'Edge: ' + encodeLtGt(item.title) + ' ' + item.link;
    }
  }
];

// Kick it off
feedToTwitter({
  debug: 1,
  feeds: feeds,
  twitterConfig: twitterCfg,
  checkIntervalMins: botConfig.minsBetweenFeedChecks,
  tweetIntervalSecs: botConfig.secsBetweenTweets
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
}, botConfig.msBetweenKeepyUppy);
