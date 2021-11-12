# 👎 yt-restore-dislikes
A Chrome extension for restoring the dislike count on YouTube videos. Firefox in the works.

## Motivation
In November 2021, YouTube [published a video](https://www.youtube.com/watch?v=kxOuG8jMIgI) informing they would be making the dislike count invisible for all videos on the plaform. This was a response to "groups of viewers dislike-bombing videos usually because they don't like the creator or what they stand for".

However, the dislike button still remains the most effective crowdsourced tool to combat misinformation, scams and clickbait on YouTube. This measure received overwhelming backlash by the community and content creators alike but is still being pushed forward.

## Implementation
The dislike count for any video can still be fetched by Google themselves via the [YouTube Data API v3](https://developers.google.com/youtube/v3).

What this extension does is simply request the current video's metadata and inject a little HTML to the YouTube webpage, replacing the "Dislike" label with the response - the actual count.

## Requirements
Unfortunately, the [YouTube Data API v3](https://developers.google.com/youtube/v3) isn't free and the default quota is of 10,000 requests per day. This is equivalent to clicking on 10,000 videos. While this should be more than enough for personal use, if I distribute my own key and a few dozen people install this, we'll reach the limit pretty quickly.

So, you **must provide your own API key**. Luckily, generating a key is a pretty straightforward process, just follow [YouTube's docs](https://developers.google.com/youtube/v3/getting-started#before-you-start). There is no need to add OAuth 2.0.

## Installation
Currently I don't feel like publishing this to the Chrome Web Store because it'll undergo a review process and may very well just get denied. So you'll need to load the extension yourself.

1. [Download the latest release](https://github.com/aquelemiguel/yt-restore-dislikes/releases/latest) and unzip it.
2. Once you've generated your API key, open `chromium/script.js` and replace the `YT_API_KEY` variable with your own key (paste between the double quotes). _I might simplify this process in the future._
3. Navigate to your browser's extensions page. It's `chrome://extensions` for Chrome and `edge://extensions` for Edge and **enable developer mode**.
4. Click **Load Unpacked** and, in your unzipped folder, select the `/chromium` directory.

More reference on how to manually install extensions [here](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest).
