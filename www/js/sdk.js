const ScoutingAppSDK = function(element, config) {

	config = fixConfig(config);

	element.innerHTML = ``;

	this.showLoginPage = () => {
		document.querySelector("body").style.backgroundColor = config.theme.backgroundColor;
		if(this.getUser() == null || this.getUser() == "") {
			element.innerHTML = `
				<div class="login-window">
					<input type="text" placeholder="Username" />
					<input type="password" placeholder="Key" />
					<button>Login</button>
				</div>`;
			if(this.getKey() != null) {
				element.querySelector("input[type='password']").value = this.getKey();
			}
		} else {
			this.showHomePage();
		}
	}

	this.showHomePage = () => {

	}

	this.login = (username, key) => {
		localStorage.setItem("username", username);
		localStorage.setItem("key", key);
	}

	this.logoutUser = () => {
		localStorage.removeItem("username");
	}

	this.logoutKey = () => {
		localStorage.removeItem("username");
	}

	this.logout = () => {
		this.logoutUser();
		this.logoutKey();
	}

	this.getUser = () => {
		return localStorage.getItem("username");
	}

	this.getKey = () => {
		return localStorage.getItem("key");
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

	this.getQRCodes = (strings) => {
		let qrCodes = [];
		for (let i = 0; i < strings.length; i++) {
			let code = document.createElement("div");
			let data = JSON.stringify({
				content: strings[i],
				total: strings.length,
				index: i
			})
			new QRCode(code, data);
			qrCodes.push(code)
		}
		return qrCodes;
	}

	this.showQRCodes = (strings) => {
		let qrCodes = this.getQRCodes(strings)
		for (const code of qrCodes) {
			element.appendChild(code);
		}
	}

}