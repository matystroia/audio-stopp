  function changeTabNumber() {
    var querying = browser.tabs.query({audible: true});
    querying.then(changeBadge, onError);
  }

  function changeBadge(tabs) {
    var ntabs = tabs.length;
    browser.tabs.update(tabs[(++index) % ntabs].id, {active: true});

    browser.browserAction.setBadgeBackgroundColor({color: "rgb(128,43,53)"});
    browser.browserAction.setBadgeText({text: ntabs.toString()});
  }
  
  function onError(error) {
    console.log(`Error: ${error}`);
  }
  
  var index = 0;
  browser.browserAction.onClicked.addListener(changeTabNumber);