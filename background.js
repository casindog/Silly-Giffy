console.log('background running')

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
    console.log(tab)
    console.log("button clicked")
    let msg = {
        txt: 'Giphy-ify All!'
    }
    chrome.tabs.sendMessage(tab.id, msg)
}