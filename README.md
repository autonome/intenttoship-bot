# intenttoship-bot

Bot which posts when browser makers announce their intent to ship, change or remove features in their web engines!

* [@intenttoship.dev on Bluesky](https://bsky.app/profile/intenttoship.dev)
* [@intenttoship.dev@bsky.brid.gy on Mastodon](https://fed.brid.gy/bsky/intenttoship.dev)
* [@intenttoship on Twitter](https://twitter.com/intenttoship/)
* [RSS feed](https://bsky.app/profile/did:plc:cs3zn3kikj5kwzljlvyr55sg/rss)

Made by [@autonome](https://github.com/autonome/).

## Implementation

Data sources are described in the Data Sources section below.

Posting is done via Zapier.

- Configure Zapier access to the email account, get notified on new messages or feed items
- Zapier job for each source, with a single sub-zap that does the posting
- Bluesky: The posting action executes [the JS in this gist](https://gist.github.com/autonome/96c809b1774651d5bbb2dcf07e38833e)
- Mastodon: The posting action does webhook POST to botsin.space
- RSS: Pulled from Bluesky at https://bsky.app/profile/did:plc:cs3zn3kikj5kwzljlvyr55sg/rss
- Twitter: Something pipes the RSS to Twitter (note to self: try and remember what you did here...)

## Data Sources

- Blink: Gmail account subscribed to blink-dev
- Gecko: Gmail account subscribed to mozilla-dev-platform
- Webkit: https://webkit.org/blog/category/safari-technology-preview/feed/ cand calls sub-zap
- Edge: Everything here is broken. Need new source.

## Diagrammata

![CleanShot 2024-08-30 at 09 57 33@2x](https://github.com/user-attachments/assets/b77583f5-046e-434b-981c-89927608bffd)

## ???

What else should @intenttoship tweet about?

What other web engines should it report on?

What other features would you like to see?

File an issue in this repo!

## Archive

Original bot was code running here on Glitch:

https://glitch.com/edit/#!/intent-to-ship-bot


