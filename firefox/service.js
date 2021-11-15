const YT_VIDEO_URL = "https://www.youtube.com/watch?v=";

browser.webNavigation.onCompleted.addListener((details) => {
  if (details.url.includes(YT_VIDEO_URL)) {
    executeScript(details.tabId);
  }
});

browser.webNavigation.onHistoryStateUpdated.addListener((details) => {
  if (details.url.includes(YT_VIDEO_URL)) {
    executeScript(details.tabId);
  }
});

function executeScript(tabId) {
  browser.tabs.executeScript(tabId, {
    file: "script.js",
  });
}
