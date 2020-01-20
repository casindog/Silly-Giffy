chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
    let msg = {
        txt: 'Giphy-ify All!'
    }
    chrome.tabs.sendMessage(tab.id, msg)
}