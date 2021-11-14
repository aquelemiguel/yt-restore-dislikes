# 👎 yt-restore-dislikes

A browser extension for restoring the dislike count on YouTube videos.

⚠️ Please note that YouTube has [issued a statement](https://support.google.com/youtube/thread/134791097/update-to-youtube-dislike-counts?hl=en) explaining they are removing access to public dislike data on their API on **December 13th**. This extension is just **a temporary solution to a permanent problem** (and well, a fairly fun learning experience for me), so expect this project to get archived by then.

## Motivation

In November 2021, YouTube [published a video](https://www.youtube.com/watch?v=kxOuG8jMIgI) informing they would be making the dislike count invisible for all videos on the plaform. This was a response to "groups of viewers dislike-bombing videos usually because they don't like the creator or what they stand for".

However, the dislike button still remains the most effective crowdsourced tool to combat misinformation, scams and clickbait on YouTube. This measure received overwhelming backlash by the community and content creators alike but is still being pushed forward.

## Implementation

At the time of writing, the dislike count for any video can still be fetched by Google themselves via the [YouTube Data API v3](https://developers.google.com/youtube/v3).

What this extension does is simply request the current video's metadata and inject a little HTML to the YouTube webpage, replacing the "Dislike" label with the response - the actual count.

## Requirements

Unfortunately, the [YouTube Data API v3](https://developers.google.com/youtube/v3) isn't free and the default quota is of 10,000 requests per day. This is equivalent to clicking on 10,000 videos. While this should be more than enough for personal use, if I distribute my own key and a few dozen people install this, we'll reach the limit pretty quickly.

So, you **must provide your own API key**. Luckily, generating a key is a pretty straightforward process, just follow [YouTube's docs](https://developers.google.com/youtube/v3/getting-started#before-you-start). There is no need to add OAuth 2.0.

## Installation

Currently I don't feel like publishing this to the Chrome Web Store or Add-ons for Firefox because it'll undergo a review process, it may very well just get denied and the extension likely won't work in a month from now. So you'll need to load the extension yourself.

### Chrome

1. [Check the latest release page](https://github.com/aquelemiguel/yt-restore-dislikes/releases/latest). Download and unzip `chromium.zip`.
2. Once you've generated your API key, open `chromium/script.js` and replace the `YT_API_KEY` variable with your own key (paste between the double quotes).
3. Navigate to your browser's extensions page. It's `chrome://extensions` for Chrome and `edge://extensions` for Edge and **enable developer mode**.
4. Click **Load Unpacked** and, in your unzipped folder, select the `/chromium` directory.

More reference on how to manually install Chrome extensions [here](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest).

### Firefox

Unlike Chrome, before they can be installed, Firefox add-ons must be digitally signed by Mozilla, so this means extra work.

1. [Check the latest release page](https://github.com/aquelemiguel/yt-restore-dislikes/releases/latest). Download and unzip `firefox.zip`.
2. Once you've generated your API key, open `firefox/script.js` and replace the `YT_API_KEY` variable with your own key (paste between the double quotes).
3. Now you need to sign the extension. I suggest using [web-ext](https://github.com/mozilla/web-ext) for this step.

   3.1. After installing it via `npm`, navigate to your unzipped `/firefox` folder and run `web-ext build`. It will generate a zipped file inside a new `/web-ext-artifacts` directory.

   3.2. Generate your [addons.mozilla.org credentials](https://addons.mozilla.org/en-GB/developers/addon/api/key/) (you'll need a Firefox Account here).

   3.3. Then sign the extension by running `web-ext sign --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET`, the API key and secret parameters with your own credentials.

   3.4. After a while, a `.xpi` file (this is your signed extension) should be created inside the `/web-ext-artifacts` folder.

4. Navigate to `about:addons`, select **Install Add-on From File...** and choose the extension you've created in the previous step.
