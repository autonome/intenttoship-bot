# intenttoship-bot

Bot which posts when browser makers announce their intent to ship, change or remove features in their web engines!

* [@intenttoship@botsin.space on Mastodon](https://twitter.com/intenttoship/)
* [@intenttoship on Twitter](https://twitter.com/intenttoship/)

## Implementation

Data sources and specific implementation described below, but mostly Gmail and Zapier. A job for each source, and a sub-zap for the webhook POST to Mastodon, and something replicates that to Twitter (note to self: figure out what you did here).

## Blink

Gmail account subscribed to blink-dev, then a Zapier job which pulls out "intent to" messages, and calls sub-zap

## Gecko

Gmail account subscribed to mozilla-dev-platform, then a Zapier job which pulls out "intent to" messages, and calls sub-zap

## Webkit

Zapier job that pulls feed items from https://webkit.org/blog/category/safari-technology-preview/feed/ cand calls sub-zap

## Edge

Everything here is broken. Need new source.

## ???

What else should @intenttoship tweet about?

What other web engines should it report on?

What other features would you like to see?

File an issue in this repo!

## Archive

Original bot was code running here on Glitch:

https://glitch.com/edit/#!/intent-to-ship-bot


