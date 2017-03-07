/*

Example usage: Bot that powers the @intenttoship Twitter account.

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

feedToTwitter({
  feeds: feeds,
  twitterConfig: twitterCfg,
  keywords: ['intent'],
  checkIntervalMins: 60,
  tweetIntervalSecs: 10
});
