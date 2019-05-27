function changeCookie() {
    console.log('changed');
    var timeNow = new Date().getTime();
    chrome.cookies.set(
        {
            url: 'https://www.ign.com',
            name: 'ccpref',
            domain: '.ign.com',
            value: 'US',
            expirationDate: timeNow / 1000 + 60 * 60 * 24 * 365 * 2
        },
        function (cookie) {
            console.log(JSON.stringify(cookie));
            console.log(chrome.extension.lastError);
            console.log(chrome.runtime.lastError);
        }
    );
}


chrome.runtime.onInstalled.addListener(function () {
    console.log("I am installed");
    changeCookie();
});

chrome.runtime.onStartup.addListener(function () {
    console.log("I started up!");
    changeCookie();
});






