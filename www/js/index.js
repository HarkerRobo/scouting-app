document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    const sdk = new ScoutingAppSDK(document.querySelector("#app"), {
        theme: {
            backgroundColor: "#a0c1d8",
            
        }
    });

    sdk.showLoginPage();
    // sdk.showQRCodes(["https://robotics.harker.org/", "you -> are orz"]);
}
