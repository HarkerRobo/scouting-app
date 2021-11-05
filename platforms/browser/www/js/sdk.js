const ScoutingAppSDK = function(element, config) {

	config = fixConfig(config);

	this.showStartingPage = () => {
		document.querySelector("body").style.backgroundColor = config.theme.backgroundColor;
		if(getUser() == null || getUser() == "") {
			element.innerHTML = ``;
		} else {
			element.innerHTML = ``;
		}
	}

	this.login = (username) => {
		localStorage.setItem("username", username);
	}

	this.getUser = () => {
		return localStorage.getItem("username");
	}

	function fixConfig(configuration) {
		if(configuration.theme == null) {
			configuration.theme = {};
		}
		if(configuration.theme.backgroundColor == null || configuration.theme.backgroundColor == "") {
			configuration.theme.backgroundColor = "#a0c1d8";
		}
		return configuration;
	}
}