const ScoutingAppSDK = function(element, config) {

	config = fixConfig(config);

	element.innerHTML = ``;

	this.showLoginPage = () => {
		return new Promise(async (resolve, reject) => {
			if(await this.getUser() == null || await this.getUser() == "") {
				element.innerHTML = `
					<div class="login-window">
						<h1>Login:</h1>
						<input type="text" placeholder="Username" name="Username" /><br>
						<input type="password" placeholder="Key" name="Key" /><br>
						<button>Login</button><br>
					</div>`;
				if(await this.getKey() != null) {
					element.querySelector(".login-window > input[name='Key']").value = await this.getKey();
				}
				element.querySelector(".login-window > button").onclick = async () => {
					let username = element.querySelector(".login-window > input[name='Username']").value;
					let key = element.querySelector(".login-window > input[name='Key']").value;
					await this.login(username, key);
					console.log("showingLoginPage");
					await this.showLoginPage();
				}
			} else {
				await this.showHomePage();
			}
			resolve();
		});
	}

	this.showHomePage = () => {
		return new Promise(async (resolve, reject) => {
			element.innerHTML = ``;
			resolve();
		});
	}

	this.login = (username, key) => {
		return new Promise(async (resolve, reject) => {
			localStorage.setItem("loginUsername", username);
			localStorage.setItem("loginKey", key);
			resolve();
		});
	}

	this.logoutUser = () => {
		return new Promise(async (resolve, reject) => {
			localStorage.removeItem("loginUsername");
			resolve();
		});
	}

	this.logoutKey = () => {
		return new Promise(async (resolve, reject) => {
			localStorage.removeItem("loginKey");
			resolve();
		});
	}

	this.logout = () => {
		return new Promise(async (resolve, reject) => {
			await this.logoutUser();
			await this.logoutKey();
			resolve();
		});
	}

	this.getUser = () => {
		return new Promise(async (resolve, reject) => {
			resolve(localStorage.getItem("loginUsername"));
		});
	}

	this.getKey = () => {
		return new Promise(async (resolve, reject) => {
			resolve(localStorage.getItem("loginKey"));
		});
	}

	function fixConfig(configuration) {
		if(configuration.theme == null) {
			configuration.theme = {};
		}
		if(configuration.theme.backgroundColor == null || configuration.theme.backgroundColor == "") {
			configuration.theme.backgroundColor = "#a0c1d8";
		}
		if(configuration.theme.alternateBackgroundColor == null || configuration.theme.alternateBackgroundColor == "") {
			configuration.theme.alternateBackgroundColor = "#e5eef4";
		}
		if(configuration.theme.contentColor == null || configuration.theme.contentColor == "") {
			configuration.theme.contentColor = "#404040";
		}
		document.documentElement.style.setProperty('--backgroundColor', configuration.theme.backgroundColor);
		document.documentElement.style.setProperty('--alternateBackgroundColor', configuration.theme.alternateBackgroundColor);
		document.documentElement.style.setProperty('--contentColor', configuration.theme.contentColor);
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