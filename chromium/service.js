const YT_VIDEO_URL = "https://www.youtube.com/watch?v=";

chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.url.includes(YT_VIDEO_URL)) {
    executeScript(details.tabId);
  }
});

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  if (details.url.includes(YT_VIDEO_URL)) {
    executeScript(details.tabId);
  }
});

function executeScript(tabId) {
  chrome.scripting.executeScript({
    target: { tabId },
    files: ["script.js"],
  });
}
