let index = 0;

function changeTabNumber() {
  browser.tabs.query({audible: true}).then(changeBadge, onError);
}

function changeBadge(tabs) {
  const nTabs = tabs.length;
  browser.tabs.update(tabs[(++index) % nTabs].id, {active: true});

  browser.browserAction.setBadgeBackgroundColor({color: "rgb(128,43,53)"});
  browser.browserAction.setBadgeText({text: nTabs.toString()});
}

function onError(error) {
  console.log(`Error: ${error}`);
}


browser.browserAction.onClicked.addListener(changeTabNumber);