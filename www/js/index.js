document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    const sdk = new ScoutingAppSDK(document.querySelector("#app"), {
        theme: {
            backgroundColor: "#a0c1d8",
            
        }
    });

    sdk.showStartingPage();
}
