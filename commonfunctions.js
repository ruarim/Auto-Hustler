function setBearer() {
    (async function () {
        let bearer = await getCookie();

        //save in local storage
        chrome.storage.sync.set({ bearer }, function () {
        });
    })();
}

async function getCookie() { //get depop bearer from logged in user
    const cookies = await chrome.cookies.getAll({ "name": "access_token" });
    return cookies[0].value;
}

//var buttons = document.getElementsByTagName('button');

// document.getElementsByTagName('button').forEach(item => {
//     item.addEventListener('onMouseOver', event => {
//         element.bgcolor='#A9A9A9';
//     })
//   })