// try going to Yahoo.com. All images should be replaced with gifs. 
let api_key = "api_key=dc6zaTOxFJmzC"
let api = "//api.giphy.com/v1/gifs/trending?" + api_key
// giphy public api is limited to 25 gifs per get request

let images = document.getElementsByTagName("img")
console.log(`images length: ${images.length}`)

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(msg, sender, res) {
    console.log(msg.txt) 
    if (msg.txt==='Giphy-ify All!') {
        fetch(api)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                for (let i = 0; i < images.length; i++) {
                    images[i].src = data.data[i % 25].images.original.url
                }
            }) 
    }
}