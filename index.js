const isTwitchUrl = window.location.href.includes("twitch.tv");

function collectPoints() {
  if (isTwitchUrl) {
    const element = document.querySelector('[aria-label="Claim Bonus"]');
    if (element) {
      element.click();
    }
  }
}

new MutationObserver(collectPoints).observe(document.body, {
  childList: true,
  subtree: true,
});
