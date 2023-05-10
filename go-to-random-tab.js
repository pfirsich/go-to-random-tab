// https://github.com/mdn/webextensions-examples/tree/main/bookmark-it
// https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js

function goToRandomTab() {
    browser.tabs.query({ active: false, currentWindow: true }).then(function(tabs) {
        let idx = Math.floor(Math.random() * tabs.length);
        browser.tabs.update(tabs[idx].id, { active: true });
    }, function(error) {
        console.log("Error: " + error);
    });
}

browser.browserAction.onClicked.addListener(goToRandomTab);
