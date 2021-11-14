(function () {
  const YT_API_KEY = "AIzaSyDersCEiKcblvUp6FS9wWl7j-JmLxTh_Oo";
  const BASE_ENDPOINT = "https://www.googleapis.com/youtube/v3";

  async function run() {
    fetchDislikes()
      .then((dislikeNo) => editDislikes(dislikeNo))
      .catch((err) => console.error(err));
  }

  async function fetchDislikes() {
    const videoId = new URLSearchParams(window.location.search).get("v");
    const endpoint = `${BASE_ENDPOINT}/videos?key=${YT_API_KEY}&id=${videoId}&part=statistics`;

    return fetch(endpoint)
      .then((r) => r.json())
      .then((r) => parseInt(r.items[0].statistics.dislikeCount));
  }

  function editDislikes(dislikeNo) {
    // Fetch the dislike label
    const selector =
      "ytd-menu-renderer.ytd-video-primary-info-renderer > div > :nth-child(2) yt-formatted-string";
    const dislikeLabel = document.querySelector(selector);

    // Update the label with the new dislike count
    const formattedDislikes = convertToYTThousands(dislikeNo);
    dislikeLabel.textContent = formattedDislikes;
  }

  function convertToYTThousands(num) {
    if (num < 1000) {
      return num;
    }
    if (num < 1000000) {
      return `${Math.round((num / 1000) * 10) / 10}K`;
    }

    return `${Math.round((num / 1000000) * 10) / 10}M`;
  }

  run();
})();
