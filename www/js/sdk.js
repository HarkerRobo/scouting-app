const ScoutingAppSDK = function(element, config) {

	config = fixConfig(config);

	element.innerHTML = ``;

	const importantQuotes = [
		"What is Red? How can you prove the Red you see is the Red others see? Its just labels",
		"The Brain to notes synapse is much faster than limited app tracking.",
		"Try doing that sheet over and over , not faster than paper, pen highlighters",
		"Whatever… not trying to counter that as its non- stuff",
		"The app is now on the back burner until they go though this entire season using our existing paper/excel /highlighter method.",
		"Do you watch sports by reviewing stats? That is Fantasy football…fantasy.",
		"Digital is 0 and 1, analog is infinite. Not that hard to understand…apps ARE digital. Human Brains are ANALOG",
		"Most of the “app stuff” is driven by smartphones and an electronic generation",
		"Look at Vegas , Vegas still wins despite card counters. Teams win for reasons other than fantastic scouting.",
		"Most tracking systems are digital, we choose analog…so do Musicians both are valid",
		"As for “scouting” :not found at all in last years Game and Season Manual",
		"60-100 teams to track…not that hard some are good some are not.",
		"I base most of our scouting off horse racing. Seems to work well.",
		"Seems like scouting award is fluff. Same for strategy. Cream rises to the top",
		"If students cant track 30-50 items without AI “help” there's a problem Houston. ",
		"weak waffle language",
		"One of the biggest issues with Apps…they are limited by design , the human brain is not limited by constraints.",
		"QR codes have been around for years not really that innovative in fact originally used in car manufacturing and everyone has seen them",
		"I know personally how hard it is for a team to win a Blue Banner",
		"There is not a single student that I have come across that sees the game like I do.",
		"These notes need to be passionate and not just entries, written by someone who gets the goals of scouting.",
		"Did Apollo use computers primarily? How about Jet travel? Or even discovering other continents ?",
		"Better than “fancy app” they worked so hard on you can place that in Chairmans or something"
    ];

    const quotes = [
    	"Qualitative scouting is a completely valid way to track teams. The sample size is well within the scout teams ability to rank teams and find ways to use partners and defeat opponents.",
        "Like any sport, you waste their time and frustrate them into fouls , while ahead then if they break you and go back to scoring 1 for 1 … you win. ",
        "― Sun Tzu, The Art of War",
        "Confirmation bias , the tendency to process information by looking for, or interpreting, information that is consistent with one's existing beliefs.",
        "Scouting is about overall performance, are they a good partner ? If foe how to defeat?",
        "A “scouting form” is actually a terrible idea.",
        "We do 100% Qualitative scouting (Excel scheds, paper, pen, highlighter and shorthand notes)",
        "Correct name , never not correct",
        "the whole thinking was app or bust . Until we spoke.",
        "Yes leaving that debate to rest. I like Citrus Dad and respect his views, I have my own.",
        "Know your own limitations and find solutions. Its simple. Observe. There is not an app for that IMO as an app has you looking down.",
        "Blue alliance has plenty of data from FMS…watching closely tells you who is good. Pen , highlighter excel with watch lists.",
        "Teams will lie, best to use you own eyes and only track what you need to form an event winning alliance",
        "If the team makes eliminations/worlds before , they are very likely to win in the future. If they never make eliminations, then they are unlikely to do so in the future.",
        "So everyone is a winner won? First robotics competition",
        "I am not going to continue to express my opinions or scouting practices in this thread as they find it “off topic” as it wasn't deemed “useful for future readers” hence the OP requested “clean up”.",
        "And attacked by @ Stryker (with 18 loves) \"individual being notorious for sharing eccentric opinions without appropriate defenses for them.\"",
        "Bye this thread enjoy your own opinions then, have at it",
        "I'll take a brain over and app…especially in a limited field size and low sample size",
        "I don't think this is at all different than sports or horse racing, same principles apply",
        "What does that mean exactly, does a number tell you “pick me”? There are many ways to do scouting, that's for certain",
        "We track all sorts of weird stuff that changes year to year. Stuff we believe in.",
        "Scouts are experienced talent evaluators who travel extensively for the purposes of watching athletes play their chosen sports and determining whether their set of skills and talents represent what is needed by the scout's organization.",
        "In the end if you do scouting well , you know your team well. Then its a matter of building the strongest alliance to have a good chance against all comers",
        "Not true if you LEAVE… seriously stop trying to win this argument",
        "Have you ever gone to a horse race with a new person that picks winners by “Cutesy Name”? It happens they pick a cute name and they win",
        "I suspect most wins at regional and championship are simple pair ups…not driven by any scouting app.",
        "Observation and notes can trump fancy new “just in” technology rich scouting app",
        "Amazing the worlds best inventions were accomplished without a single computer.",
        "Not that hard to “track” 30-50 teams in most competitions.",
        "Note 3: Not following the crowd, can be beneficial (see 2009 financial “crisis”)",
        "This scouting award will certainly be dominated by a subset of more boisterous teams",
        "Back to Horseracing, if it was easy to pick a winner don't you think with all the money involved , someone would create a program to pick a winner every time? Hasn't happened.",
        "Sure 1678 has a great record and would not have been “as great” without scouting doing its job.",
        "No amount of notes will convey what a simple conversation can convey as humans take visual cues from each other.",
        "Scouting involves luck. look at handicappers or stock brokers… its all luck finding the trend at the right time. There is no magic sauce. ",
        "Golden Worm Blasters",
        "I decided to comment based on my experience with students. No harm no foul. Sorry if a resolution was reached 3 mo ago",
        "What scouting brings is Intelligence… this bodes well in team interactions and gives you the intelligence high ground in competition or picking.",
        "The class handicapper judges the merits of a horse not by the time of his recent races, but by the type of company in which he has been competing",
        "Dealing with say 50 teams and say 10 matches to rely on data pointing the way is problematic",
        "I still dismiss your quaint notion Blue Banners don't matter!",
        "I will refine, ask away its about assembling the best pick list, right? I have much to offer there.",
        "The single most important stat in horse racing is “class” don't under estimate that quality. I've learned from experience there.",
        "Don't use apps",
        "Look at music…CD/streaming are cheap and acceptabe, yet LP albums are purer.",
        "We have [a blue banner]…strive for more every season. Not for everyone and thats fine",
        "NOT season",
        "This thread is a no win scenario and should end for the good of the game. Mods shut it down.",
        "I me thinks get a lot of silent likes and that is a-ok there are still critical thinkers here.",
        "winner winner chicken dinner",
        "Scouting apps are good programming exercise, usefulness not determined. It’s like weigh watching apps, stock apps, horoscope apps. It makes you feels good and it’s fun to program",
        "Tracking the right stuff in a game is important, does the scouting app do that? Do you trust the data? What insights are gained?",
        "Always open your mind to what is possible.",
        "But does an App track tendency? Does an App track where a robot likes to play? Does an app guarantee good data or bored scouts? Great drivers, Repair tendencies?",
        "Its not about data , its the right data",
        "Human processing blows away a computer except in certain tasks",
        "Pen + Paper + Highlighter + Excel, much more configurable. It always perplexes me why tracikng 40-60 robots requires an app? Except to give programmers something to do?"
    ]

    const MAX_QR_LENGTH = 128;

    function checkNull(object1, object2) {
    	return (object1 !== null && object1 !== undefined) ? object1 : object2;
    }

    this.escape = (string) => {
    	const escapedChars = [
			{character: "&", replacement: "&amp;"},
			{character: "<", replacement: "&lt;"},
			{character: ">", replacement: "&gt;"},
			{character: "\"", replacement: "&quot;"},
			{character: "'", replacement: "&#39;"},
		]
		if(string === null || typeof string !== 'string') {
			return string;
		}
		let result = string;
		for(let i = 0; i < escapedChars.length; i++) {
			result = result.replace(new RegExp(escapedChars[i].character, "g"), escapedChars[i].replacement);
		}
		return result;
    }

    this.normalize = (string) => {
    	const validChars = [
    		"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    		"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    		"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    		".", "!", "?", "(", ")"
    	];
    	let normalized = [];
    	for(let i = 0; i < string.length; i++) {
    		if(validChars.includes(string[i].toLowerCase())) {
    			normalized.push(string[i]);
    		} else {
    			normalized.push(" ");
    		}
    	}
    	return normalized.join("");
    }

    this.formatData = (eventCode, matchNumber, teamNumber, data) => {

    }

	this.showLoginPage = () => {
		return new Promise(async (resolve, reject) => {
			if(await this.getUser() == "") {
				element.innerHTML = `
<div class="login-window">
	<h1>Login:</h1>
	<input type="text" placeholder="Username" name="Username" /><br>
	<input type="password" placeholder="Key" name="Key" value="${this.escape(await getKey())}" /><br>
	<button>Login</button><br>
</div>`;
				element.querySelector(".login-window > button").onclick = async () => {
					let username = element.querySelector(".login-window > input[name='Username']").value;
					let key = element.querySelector(".login-window > input[name='Key']").value;
					await this.login(username, key);
					await this.showLoginPage();
				}
				element.querySelector(".login-window > input[type='password']").onkeyup = async (e) => {
					if(e.keyCode == 13) {
						element.querySelector(".login-window > button").click();
					}
				}
			} else {
				await this.showHomePage();
			}
			resolve();
		});
	}

	this.showHomePage = (_eventCode = "", _matchNumber = "", _teamNumber = "") => {
		return new Promise(async (resolve, reject) => {
			if(await this.getUser() == "") {
				await this.showLoginPage();
			} else {
				data = {};
				if(config.event.editable == false && config.event.code != "") {
					_eventCode = config.event.code;
					await this.setEventCode(_eventCode);
				}
				element.innerHTML = `
					<div class="home-window">
						<div class="button-row">
							<button class="log-out">Log Out</button>
							<button class="scan-data">Upload Data</button>
							<button class="switch-accounts">Switch Accounts</button>
						</div>
						<h1>1072 Scouting App</h1>
						<h3>Signed in as ${this.escape(await this.getUser())}</h3>
						<h2>Event Code:</h2>
						<input class="event-code" value="${this.escape(_eventCode || await this.getEventCode())}"${config.event.editable ? "" : " readonly"} />
						<h2>Match Number:</h2>
						<input class="match-number" type="number" min="0" value="${this.escape(_matchNumber)}" />
						<h2>Team:</h2>
						<select class="team">
							<option value="">Select a team...</option>
						</select>
						<button class="start">Start</button>
						<p class="boltman-quote">${this.escape(await this.getQuote())}</p>
						<p class="footer-text">Made with &lt; &gt; by <a href="https://kabirramzan.com/" target="_blank">Kabir Ramzan</a></p>
					</div>
				`;
				let eventCode = element.querySelector(".home-window > input.event-code").value;
				if(eventCode != null && eventCode != "") {
					this.setMatches(eventCode);
				}
				element.querySelector(".button-row > button.log-out").onclick = async () => {
					await this.logout();
					await this.showLoginPage();
				}
				element.querySelector(".button-row > button.switch-accounts").onclick = async () => {
					await this.logoutUser();
					await this.showLoginPage();
				}
				element.querySelector(".button-row > button.scan-data").onclick = async () => {
					await this.showScannerPage(await this.getEventCode());
				}
				element.querySelector(".home-window > button.start").onclick = async () => {
					let eventCode = element.querySelector(".home-window > input.event-code").value;
					let matchNumber = element.querySelector(".home-window > input.match-number").value;
					let teamNumber = element.querySelector(".home-window > select.team").value;
					if(eventCode != null && eventCode != "" && matchNumber != null && matchNumber != "" && teamNumber != null && teamNumber != "") {
						await this.showMatchPage(0, eventCode, matchNumber, teamNumber);
					}
				}
				element.querySelector(".home-window > input.event-code").onblur = async () => {
					let eventCode = element.querySelector(".home-window > input.event-code").value;
					await this.setEventCode(eventCode);
					this.setMatches(eventCode);
				}
				let updateTeamsList = async () => {
					element.querySelector(".home-window > select.team").innerHTML = `<option value="">Select a team...</option>`;
					let eventCode = element.querySelector(".home-window > input.event-code").value;
					let matchNumber = element.querySelector(".home-window > input.match-number").value;
					if(eventCode != "" && matchNumber != "" && !isNaN(parseInt(matchNumber))) {
						let match = await this.getMatch(eventCode, matchNumber);
						let redTeams = match.alliances.red.team_keys;
						let blueTeams = match.alliances.blue.team_keys;
						let teams = `<option value="">Select a team...</option>`;
						for(let i = 0; i < redTeams.length; i++) {
							let teamNumber = redTeams[i].replace("frc", "");
							teams += `
<option value="${this.escape(teamNumber)}"${teamNumber == _teamNumber ? " selected" : ""}>
	${this.escape(teamNumber)} (Red ${i + 1})
</option>`;
						}
						for(let i = 0; i < blueTeams.length; i++) {
							let teamNumber = blueTeams[i].replace("frc", "");
							teams += `
<option value="${this.escape(teamNumber)}"${teamNumber == _teamNumber ? " selected" : ""}>
	${this.escape(teamNumber)} (Blue ${i + 1})
</option>`;
						}
						element.querySelector(".home-window > select.team").innerHTML = teams;
					}
				}
				element.querySelector(".home-window > input.match-number").onblur = updateTeamsList;
				updateTeamsList();
			}
			resolve();
		});
	}

	this.showMatchPage = (index, eventCode, matchNumber, teamNumber) => {
		return new Promise(async (resolve, reject) => {
			if(await this.getUser() == "") {
				await this.showLoginPage();
			} else if(index < -1) {
				await this.showHomePage();
			} else if(index < 0) {
				await this.showHomePage(eventCode, matchNumber, teamNumber);
			} else {
				element.innerHTML = `
					<div class="match-window">
						${await this.compileComponent(eventCode, matchNumber, teamNumber, config.pages[index])}
					</div>
					<div class="overlay"></div>
					<div class="location-popup"></div>
				`;
				await this.runPendingFunctions();
			}
			resolve();
		});
	}

	function getQRScannerSize() {
		return Math.floor(Math.min(window.innerWidth - 200, window.innerHeight - 200));
	}

	this.showScannerPage = (eventCode) => {
		return new Promise(async (resolve, reject) => {
			if(await this.getUser() == "") {
				await this.showLoginPage();
			} else {
				element.innerHTML = `
					<div class="scanner-window">
						<div class="button-row">
							<button class="log-out">Log Out</button>
							<button class="scout">Scout</button>
							<button class="switch-accounts">Switch Accounts</button>
						</div>
						<p>&nbsp;</p>
						<div class="reader" id="reader"></div>
						<div class="upload"></div>
						<button style="display: none;" class="scan-again">Scan Again</button>
					</div>
				`;
				let reader = new Html5Qrcode("reader");
				element.querySelector(".button-row > button.log-out").onclick = async () => {
					try {
						await reader.stop()
					} catch(err) {

					}
					await this.logout();
					await this.showLoginPage();
				}
				element.querySelector(".button-row > button.switch-accounts").onclick = async () => {
					try {
						await reader.stop()
					} catch(err) {
						
					}
					await this.logoutUser();
					await this.showLoginPage();
				}
				element.querySelector(".button-row > button.scout").onclick = async () => {
					try {
						await reader.stop()
					} catch(err) {
						
					}
					await this.showHomePage();
				}
				element.querySelector("button.scan-again").onclick = async () => {
					try {
						await reader.stop()
					} catch(err) {
						
					}
					await this.showScannerPage(eventCode);
				}
				let codes = [];
				try {
					let devices = await Html5Qrcode.getCameras();
					console.log(devices);
					if(devices.length > 0) {
						reader.start(
							devices[0].id,
							{
								fps: 10,
								qrbox: {
									width: getQRScannerSize(),
									height: getQRScannerSize()
								}
							},
							async (decodedText, decodedResult) => {
								try {
									let data = JSON.parse(decodedText);
									codes[data[0]] = data[2];
									element.querySelector(".scanner-window > p").innerHTML = `${codes.filter(code => code != null).length}/${data[1]}`;
									if(codes.filter(code => code != null).length == data[1]) {
										console.log(codes.join(""));
										element.querySelector(".scanner-window > p").innerHTML = "&nbsp;";
										await reader.stop();

										try {
											element.querySelector(".scanner-window > .upload").innerHTML = "<h3>Preparing...</h3>";
											let formatted = codes.join("");
											element.querySelector(".scanner-window > .upload").innerHTML += `<h3>Uploading...</h3>`;
											let upload = await (await fetch(`${config.upload.endpoint}/upload`, {
												method: "POST",
												headers: {
													'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
												},
												body: `key=${encodeURIComponent(await getKey())}&contents=${encodeURIComponent(formatted)}&eventcode=${encodeURIComponent(eventCode)}&hash=${encodeURIComponent(await this.hash(eventCode + "::" + formatted))}`
											})).json();
											if(upload.success) {
												element.querySelector(".scanner-window > .upload").innerHTML += `<h3>Verifying...</h3>`;
												let verify = await (await fetch(`${config.upload.endpoint}/verify?key=${encodeURIComponent(await getKey())}&hash=${encodeURIComponent(await this.hash(eventCode + "::" + formatted))}`)).json();
												if(verify.success) {
													element.querySelector(".scanner-window > .upload").innerHTML += `<h3 class="primary">Success!</h3>`;
													element.querySelector(".scanner-window > button").style.display = "block";
												} else {
													element.querySelector(".scanner-window > .upload").innerHTML += `<h3 class="red">Upload Failed!<br>${verify.error || "Unable to verify upload completion."}</h3>`;
													element.querySelector(".scanner-window > button").style.display = "block";
												}
											} else {
												element.querySelector(".scanner-window > .upload").innerHTML += `<h3 class="red">Upload Failed!<br>${upload.error || "Unknown error."}</h3>`;
												element.querySelector(".scanner-window > button").style.display = "block";
											}
										} catch(err) {
											// console.error(err);
											element.querySelector(".scanner-window > .upload").innerHTML += `<h3 class="red">Upload Failed!<br>Could not connect to the server.</h3>`;
											element.querySelector(".scanner-window > button").style.display = "block";
										}
									}
								} catch(err) {

								}
								// console.log(decodedText);
								// console.log(decodedResult);
							},
							async (errorMessage) => {
								// console.error(errorMessage);
							}
						)
					}
				} catch(err) {

				}
			}
			resolve();
		});
	}

	this.showDownloadPage = (_eventCode = "") => {
		return new Promise(async (resolve, reject) => {
			if(await this.getUser() == "") {
				await this.showLoginPage();
			} else {
				if(config.event.editable == false && config.event.code != "") {
					_eventCode = config.event.code;
					await this.setEventCode(_eventCode);
				}
				element.innerHTML = `
					<div class="download-window">
						<div class="button-row">
							<button class="log-out">Log Out</button>
							<button class="scout">Scout</button>
							<button class="switch-accounts">Switch Accounts</button>
						</div>
						<h2>Event Code:</h2>
						<input class="event-code" value="${this.escape(_eventCode || await this.getEventCode())}"${config.event.editable ? "" : " readonly"} />
						<h2>Filename:</h2>
						<input class="filename" value="data.csv" />
						<button class="download-csv">Download CSV</button>
						<h3 class="red">&nbsp;</h3>
					</div>
				`;
				element.querySelector(".button-row > button.log-out").onclick = async () => {
					await this.logout();
					await this.showLoginPage();
					window.location.href = "./";
				}
				element.querySelector(".button-row > button.switch-accounts").onclick = async () => {
					await this.logoutUser();
					await this.showLoginPage();
					window.location.href = "./";
				}
				element.querySelector(".button-row > button.scout").onclick = async () => {
					await this.showHomePage();
					window.location.href = "./";
				}
				element.querySelector("button.download-csv").onclick = async () => {
					let eventCode = element.querySelector(".download-window > input.event-code").value;
					let filename = element.querySelector(".download-window > input.filename").value;
					try {
						let data = await (await fetch(`${config.upload.endpoint}/data?key=${encodeURIComponent(await getKey())}&eventcode=${encodeURIComponent(eventCode)}`)).json();
						if(data.success) {
							element.querySelector(".red").innerHTML = "&nbsp;";
							let csv = ["matchNum,teamNum,teamColor,locations,outcomes,climbLevel,initLinePassed,autonCount,humanPlayerScored,climbTime,brickTime,defenseTime,scouterName,comments"];
							let contents = data.contents;
							for(let i = 0; i < contents.length; i++) {
								csv.push(contents[i].contents);
							}
							let joined = csv.join("\r\n");
							let download = "data:text/csv;charset=utf-8," + joined;
							let link = document.createElement("a");
							link.style.display = "none";
							link.setAttribute("href", download);
							link.setAttribute("download", filename || "data.csv");
							element.appendChild(link);
							link.click();
							link.remove();
							console.log(joined);
						} else {
							element.querySelector(".red").innerHTML = data.error || "Unknown error.";
						}
					} catch(err) {

					}
				}
			}
			resolve();
		});
	}

	this.getQuote = () => {
		return new Promise(async (resolve, reject) => {
			let possibleQuotes = importantQuotes.length * 3 + quotes.length;
			let randomQuoteID = Math.floor(Math.random() * possibleQuotes);

			let boltmanQuote = "";
			if(randomQuoteID < importantQuotes.length * 3) {
				boltmanQuote = importantQuotes[Math.floor(randomQuoteID / 3)];
			} else {
				boltmanQuote = quotes[randomQuoteID - importantQuotes.length * 3];
			}
			resolve("\"" + boltmanQuote + "\" --Boltman");
		});
	}

	this.login = (username, key) => {
		return new Promise(async (resolve, reject) => {
			let hashed = await this.hash(key);
			if(config.upload.passwordHash == "" || config.upload.passwordHash == hashed) {
				localStorage.setItem("loginUsername", username);
				localStorage.setItem("loginKey", key);
			}
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
			if(localStorage.getItem("loginUsername") == null) {
				resolve("");
			} else {
				resolve(localStorage.getItem("loginUsername"));
			}
		});
	}

	const getKey = () => {
		return new Promise(async (resolve, reject) => {
			if(localStorage.getItem("loginKey") == null) {
				resolve("");
			} else {
				resolve(localStorage.getItem("loginKey"));
			}
		});
	}

	this.getEventCode = () => {
		return new Promise(async (resolve, reject) => {
			if(localStorage.getItem("eventCode") == null) {
				resolve(config.event.code);
			} else {
				resolve(localStorage.getItem("eventCode"));
			}
		});
	}

	this.setEventCode = (eventCode) => {
		return new Promise(async (resolve, reject) => {
			localStorage.setItem("eventCode", eventCode);
			resolve();
		});
	}

	this.setMatches = (eventCode) => {
		return new Promise(async (resolve, reject) => {
			try {
				let matches = await (await fetch(`${config.upload.endpoint}/matches?key=${encodeURIComponent(await getKey())}&eventcode=${encodeURIComponent(eventCode)}`)).json();
				if(matches.success) {
					localStorage.setItem(`matches::${eventCode}`, JSON.parse(JSON.stringify(matches.contents || "[]")));
					resolve(true);
				} else {
					resolve(false);
				}
			} catch(err) {
				resolve(false);
			}
		});
	}

	this.getMatches = (eventCode) => {
		return new Promise(async (resolve, reject) => {
			if(localStorage.getItem(`matches::${eventCode}`) != null) {
				resolve(JSON.parse(localStorage.getItem(`matches::${eventCode}`)));
				await this.setMatches(eventCode);
			} else {
				let set = await this.setMatches(eventCode);
				if(set) {
					resolve(JSON.parse(localStorage.getItem(`matches::${eventCode}`)));
				} else {
					resolve([]);
				}
			}
		});
	}

	this.getMatch = (eventCode, matchNumber, setNumber = 1, compLevel = "qm") => {
		return new Promise(async (resolve, reject) => {
			let matches = await this.getMatches(eventCode);
			let fallback = {
				comp_level: compLevel,
				set_number: setNumber,
				match_number: matchNumber,
				alliances: {
					red: {
						score: 0,
						team_keys: [
							"frc1r",
							"frc2r",
							"frc3r"
						],
						surrogate_team_keys: [],
						dq_team_keys: []
					},
					blue: {
						score: 0,
						team_keys: [
							"frc1b",
							"frc2b",
							"frc3b"
						],
						surrogate_team_keys: [],
						dq_team_keys: []
					}
				},
				winning_alliance: "red",
				event_key: eventCode,
				time: 0,
				predicted_time: 0,
				actual_time: 0
			}
			resolve((matches.filter(match => matchNumber == match.match_number && setNumber == match.set_number && compLevel == match.comp_level) || [fallback])[0] || fallback);
		});
	}

	let pendingFunctions = [];

	this.runPendingFunctions = () => {
		return new Promise(async (resolve, reject) => {
			await Promise.all(pendingFunctions.map(func => func()));
			pendingFunctions = [];
			resolve();
		});
	}

	let data = {};

	this.setData = (key, value) => {
		return new Promise(async (resolve, reject) => {
			if(key != null) {
				data[key] = value;
				resolve(true);
			}
			resolve(false);
			console.log(data);
		});
	}

	let timers = {};
	window.t = timers;

	this.random = () => {
		return `${Date.now()}::${parseInt(Math.random() * 1000000000).toString(16)}`;
	}

	this.timerFormat = (milliseconds) => {
		let seconds = Math.floor(milliseconds / 1000);
		return `${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? "0" : ""}${seconds % 60}.${(milliseconds % 1000) < 100 ? "0" : ""}${Math.floor((milliseconds % 1000)/10)}`;
	}

	this.showLocationPopup = (index, options, locationData) => {
		return new Promise(async (resolve, reject) => {
			locationData = [...locationData];
			element.querySelector(".location-popup").innerHTML = `
				${options.map((option) => {
					return `
						<div data-option="${this.escape(option.value)}">
							<h2>${option.label}</h2>
							<button data-increment="-1" data-value="${this.escape(option.value)}"><span>-</span></button>
							<h3>${locationData.filter(loc => loc.value == option.value && loc.index == index).length} here<br>${locationData.filter(loc => loc.value == option.value).length} total</h3>
							<button data-increment="1" data-value="${this.escape(option.value)}"><span>+</span></button>
						</div>
					`;
				}).join("")}
				<button>Save/Close</button>
			`;
			element.querySelector(".location-popup > button").onclick = async () => {
				element.querySelector(".location-popup").style.display = "none";
				element.querySelector(".overlay").style.display = "none";
				resolve(locationData);
			}
			let elements = element.querySelectorAll(".location-popup > div > button");
			for(let i = 0; i < elements.length; i++) {
				elements[i].onclick = async () => {
					let increment = parseInt(elements[i].getAttribute("data-increment"));
					for(let j = 0; j < Math.abs(increment); j++) {
						if(increment > 0) {
							locationData.push({
								value: elements[i].getAttribute("data-value"),
								index: index
							});
						} else {
							let indexToRemove = locationData.findIndex(loc => loc.value == elements[i].getAttribute("data-value") && loc.index == index);
							if(indexToRemove > -1) {
								locationData.splice(indexToRemove, 1);
							}
						}
					}
					for(let i = 0; i < options.length; i++) {
						element.querySelector(`.location-popup > div[data-option="${this.escape(options[i].value)}"] > h3`).innerHTML = `${locationData.filter(loc => loc.value == options[i].value && loc.index == index).length} here<br>${locationData.filter(loc => loc.value == options[i].value).length} total`;
					}
				}
			}
			element.querySelector(".overlay").style.display = "block";
			element.querySelector(".location-popup").style.display = "block";
		});
	}

	let fieldOrientation = 0;
	let fieldOrientationSet = false;

	this.compileComponent = (eventCode, matchNumber, teamNumber, component = {}) => {
		return new Promise(async (resolve, reject) => {
			let types = ["layout", "title", "text", "locations", "pagebutton", "checkbox", "timer", "select", "textbox", "tbaverify", "upload", "qrcode", "data"];
			let type = component.type;
			if(!types.includes(type)) {
				type = "layout";
			}
			if(component.type == "layout") {
				let directions = ["rows", "columns"];
				let direction = component.direction;
				if(!directions.includes(direction)) {
					direction = "rows";
				}
				let components = [];
				if(component.components != null && component.components instanceof Array) {
					components = component.components;
				}
				resolve(`
					<div class="component-layout-${direction}">
						${(await Promise.all(components.map(component => this.compileComponent(eventCode, matchNumber, teamNumber, component)))).join("")}
					</div>
				`);
			} else if(component.type == "title") {
				let label = "";
				if(component.label != null) {
					label = component.label.toString();
				}
				resolve(`<h1 class="component-title">${this.escape(label)}</h1>`);
			} else if(component.type == "text") {
				let label = "";
				if(component.label != null) {
					label = component.label.toString();
				}
				resolve(`<p class="component-text">${this.escape(label).replace(new RegExp("\n", "g"), "<br>")}</p>`);
			} else if(component.type == "locations") {
				let id = this.random();
				let src = "";
				if(component.src != null) {
					src = component.src.toString();
				}
				let rows = 1;
				if(typeof component.rows == "number") {
					rows = component.rows;
				}
				let columns = 1;
				if(typeof component.columns == "number") {
					columns = component.columns;
				}
				let orientation = 0;
				if(typeof component.orientation == "number") {
					orientation = component.orientation;
				}
				let options = [];
				if(component.options instanceof Array) {
					options = component.options;
				}
				let defaultValue = [];
				if(component.default instanceof Array) {
					defaultValue = component.default;
				}
				pendingFunctions.push(async () => {
					await this.setData(component.data, checkNull(data[component.data], defaultValue));
					element.querySelector(`[data-id="${this.escape(id)}"] > button`).onclick = async () => {
						let grid = element.querySelector(`[data-id="${this.escape(id)}"] > .component-locations-container > .grid`);
						if(parseInt(grid.getAttribute("data-orientation")) == 0) {
							grid.style.transform = "scaleX(-1) scaleY(-1)";
							fieldOrientation = 1;
							fieldOrientationSet = true;
							grid.setAttribute("data-orientation", 1);
						} else {
							grid.style.transform = "";
							fieldOrientation = 0;
							fieldOrientationSet = true;
							grid.setAttribute("data-orientation", 0);
						}
					}
					let gridElements = element.querySelectorAll(`[data-id="${this.escape(id)}"] > .component-locations-container > .grid > div`);
					for(let i = 0; i < gridElements.length; i++) {
						gridElements[i].onclick = async (e) => {
							let result = await this.showLocationPopup(e.target.getAttribute("data-index"), options, checkNull(data[component.data], defaultValue));
							// console.log(result);
							if(result != null) {
								await this.setData(component.data, result);
								for(let index = 0; index < (rows * columns); index++) {
									if((checkNull(data[component.data], [])).filter(loc => loc.index == index).length > 0) {
										element.querySelector(`[data-id="${this.escape(id)}"] > .component-locations-container > .grid > div[data-index="${this.escape(index)}"]`).classList.add("active");
									} else {
										element.querySelector(`[data-id="${this.escape(id)}"] > .component-locations-container > .grid > div[data-index="${this.escape(index)}"]`).classList.remove("active");
									}
								}
							}
						}
					}
				})
				resolve(`
					<div class="component-locations" data-id="${this.escape(id)}">
						<div class="component-locations-container">
							<div class="grid" data-orientation="${this.escape(fieldOrientationSet ? fieldOrientation : orientation)}" style="grid-template-rows: repeat(${this.escape(rows)}, 1fr); grid-template-columns: repeat(${this.escape(columns)}, 1fr); background-image: url(${this.escape(src)});${
							(fieldOrientationSet ? fieldOrientation : orientation) == 1 ? " transform: scaleX(-1) scaleY(-1);" : ""}">
								${[...(new Array(rows)).keys()].map((row, rowindex) => {
									return [...(new Array(columns)).keys()].map((column, columnindex) => {
										return `<div style="grid-area: ${rowindex + 1} / ${columnindex + 1} / ${rowindex + 2} / ${columnindex + 2};" data-row="${rowindex}" data-column="${columnindex}" data-index="${(rowindex * columns) + columnindex}"${(checkNull(data[component.data], [])).filter(loc => loc.index == (rowindex * columns) + columnindex).length > 0 ? ` class="active"` : ""}></div>`
									}).join("")
								}).join("")}
							</div>
						</div>
						<button>Flip</button>
					</div>
				`);
			} else if(component.type == "pagebutton") {
				let id = this.random();
				let page = -1;
				if(typeof component.page == "number") {
					page = component.page;
				}
				let label = "";
				if(component.label != null) {
					label = component.label.toString();
				}
				pendingFunctions.push(async () => {
					element.querySelector(`[data-id="${this.escape(id)}"]`).onclick = async () => {
						let timerNames = Object.keys(timers);
						for(let i = 0; i < timerNames.length; i++) {
							clearInterval(timers[timerNames[i]].interval);
							timers[timerNames[i]].running = false;
							timers[timerNames[i]].restricted = false;
							await this.setData(component.data, timers[timerNames[i]].milliseconds);
						}
						
						await this.showMatchPage(element.querySelector(`[data-id="${this.escape(id)}"]`).getAttribute("data-page"), eventCode, matchNumber, teamNumber);
					};
				});
				resolve(`<button class="component-pagebutton" data-id="${this.escape(id)}" data-page="${page}">${label}</button>`);
			} else if(component.type == "checkbox") {
				let id = this.random();
				let label = "";
				if(component.label != null) {
					label = component.label.toString();
				}
				let defaultValue = false;
				if(typeof component.default == "boolean") {
					defaultValue = component.default;
				}
				pendingFunctions.push(async () => {
					element.querySelector(`[data-id="${this.escape(id)}"] > input`).oninput = async () => {
						await this.setData(component.data, element.querySelector(`[data-id="${this.escape(id)}"] > input`).checked);
					};
					await this.setData(component.data, element.querySelector(`[data-id="${this.escape(id)}"] > input`).checked);
				});
				resolve(`
					<div class="component-checkbox" data-id="${this.escape(id)}">
						<input type="checkbox" id="${this.escape(id)}" ${(checkNull(data[component.data], defaultValue)) ? "checked" : ""} />
						<span class="checkmark"></span>
						<label for="${this.escape(id)}">${label}</label>
					</div>
				`);
			} else if(component.type == "timer") {
				let id = this.random();
				let label = "";
				if(component.label != null) {
					label = component.label.toString();
				}
				let name = "";
				if(component.name != null) {
					name = component.name.toString();
				}
				let restricts = [];
				if(component.restricts instanceof Array) {
					restricts = component.restricts;
				}
				let defaultValue = 0;
				if(typeof component.default == "number") {
					defaultValue = component.default;
				}
				if(timers[name] == null) {
					timers[name] = {};
					timers[name].running = false;
					timers[name].restricted = false;
				}
				if(timers[name].milliseconds == null) {
					timers[name].milliseconds = defaultValue;
				}
				timers[name].id = id;
				pendingFunctions.push(async () => {
					element.querySelector(`[data-id="${this.escape(id)}"] > .button-container > button.minus`).onclick = async () => {
						if(timers[name].milliseconds > 1000) {
							timers[name].milliseconds -= 1000;
						} else {
							timers[name].milliseconds = 0;
						}
						if(timers[name].milliseconds < 0) {
							timers[name].milliseconds = 0;
						}
						await this.setData(component.data, timers[name].milliseconds);
						element.querySelector(`[data-id="${this.escape(timers[name].id)}"] > h2 > span`).innerHTML = this.timerFormat(data[component.data]);
					}
					element.querySelector(`[data-id="${this.escape(id)}"] > .button-container > button.plus`).onclick = async () => {
						timers[name].milliseconds += 1000;
						await this.setData(component.data, timers[name].milliseconds);
						element.querySelector(`[data-id="${this.escape(timers[name].id)}"] > h2 > span`).innerHTML = this.timerFormat(data[component.data]);
					}
					element.querySelector(`[data-id="${this.escape(id)}"] > .button-container > button.timer`).onclick = async () => {
						if(timers[name].running) {
							timers[name].running = false;
							clearInterval(timers[name].interval);
							await this.setData(component.data, timers[name].milliseconds);
							element.querySelector(`[data-id="${this.escape(timers[name].id)}"] > h2 > span`).innerHTML = this.timerFormat(data[component.data]);
							element.querySelector(`[data-id="${this.escape(timers[name].id)}"] > .button-container > button.timer`).innerHTML = "Start";
							for(let i = 0; i < restricts.length; i++) {
								if(timers[restricts[i]] == null) {
									timers[restricts[i]] = {};
									timers[restricts[i]].running = false;
									timers[restricts[i]].restricted = false;
								}
								timers[restricts[i]].restricted = false;
								let button = element.querySelector(`[data-id="${this.escape(timers[restricts[i]].id)}"] > .button-container > button.timer`);
								if(timers[restricts[i]].id != null && button != null) {
									button.disabled = false;
								}
							}
						} else {
							for(let i = 0; i < restricts.length; i++) {
								if(timers[restricts[i]] == null) {
									timers[restricts[i]] = {};
									timers[restricts[i]].running = false;
									timers[restricts[i]].restricted = false;
								}
								if(timers[restricts[i]].id != null && element.querySelector(`[data-id="${this.escape(timers[restricts[i]].id)}"] > .button-container > button.timer`) != null) {
									element.querySelector(`[data-id="${this.escape(timers[restricts[i]].id)}"] > .button-container > button.timer`).disabled = true;
								}
								timers[restricts[i]].restricted = true;
							}
							timers[name].running = true;
							timers[name].interval = setInterval(async () => {
								timers[name].milliseconds += 50;
								await this.setData(component.data, timers[name].milliseconds);
								let text = element.querySelector(`[data-id="${this.escape(timers[name].id)}"] > h2 > span`);
								if(text != null) {
									text.innerHTML = this.timerFormat(data[component.data]);
								}
							}, 50);
							element.querySelector(`[data-id="${this.escape(timers[name].id)}"] > .button-container > button.timer`).innerHTML = "Stop";
						}
					};
					await this.setData(component.data, timers[name].milliseconds);
				});
				resolve(`
					<div class="component-timer" data-id="${this.escape(id)}">
						<h2>${this.escape(label)}: <span>${this.timerFormat(checkNull(data[component.data], defaultValue))}</span></h2>
						<div class="button-container">
							<button class="minus">&nbsp;<span>-</span></button>
							<button class="timer" ${(checkNull(checkNull(timers[name], {}).restricted, false)) ? "disabled" : ""}>${(checkNull(checkNull(timers[name], {}).running, false)) ? "Stop" : "Start"}</button>
							<button class="plus">&nbsp;<span>+</span></button>
						</div>
					</div>
				`);
			} else if(component.type == "select") {
				let id = this.random();
				let label = "";
				if(component.label != null) {
					label = component.label.toString();
				}
				let defaultValue = 0;
				if(typeof component.default == "number") {
					defaultValue = component.default;
				}
				let options = [];
				if(component.options instanceof Array) {
					options = component.options;
				}
				pendingFunctions.push(async () => {
					element.querySelector(`[data-id="${this.escape(id)}"] > select`).oninput = async () => {
						await this.setData(component.data, element.querySelector(`[data-id="${this.escape(id)}"] > select`).value);
					};
					await this.setData(component.data, element.querySelector(`[data-id="${this.escape(id)}"] > select`).value);
				});
				resolve(`
					<div class="component-select" data-id="${this.escape(id)}">
						<h2>${this.escape(label)}</h2>
						<select>
							${options.map((option, index) => {
								return `<option value="${index}" ${index == (checkNull(data[component.data], defaultValue)) ? "selected" : ""}>${this.escape(option.label)}</option>`;
							})}
						</select>
					</div>
				`);
			} else if(component.type == "textbox") {
				let id = this.random();
				let placeholder = "";
				if(component.placeholder != null) {
					placeholder = component.placeholder.toString();
				}
				let defaultValue = "";
				if(component.default != null) {
					defaultValue = component.default.toString();
				}
				pendingFunctions.push(async () => {
					element.querySelector(`[data-id="${this.escape(id)}"]`).oninput = async () => {
						await this.setData(component.data, element.querySelector(`[data-id="${this.escape(id)}"]`).value);
					};
					await this.setData(component.data, element.querySelector(`[data-id="${this.escape(id)}"]`).value);
				});
				resolve(`<textarea class="component-textbox" placeholder="${this.escape(placeholder)}" data-id="${this.escape(id)}">${this.escape(checkNull(data[component.data], defaultValue))}</textarea>`);
			} else if(component.type == "upload") {
				let id = this.random();
				pendingFunctions.push(async () => {
					try {
						let formatted = await this.formatData(eventCode, matchNumber, teamNumber, data);
						element.querySelector(`[data-id="${this.escape(id)}"]`).innerHTML += `<h3>Uploading...</h3>`;
						let upload = await (await fetch(`${config.upload.endpoint}/upload`, {
							method: "POST",
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
							},
							body: `key=${encodeURIComponent(await getKey())}&contents=${encodeURIComponent(formatted)}&eventcode=${encodeURIComponent(eventCode)}&hash=${encodeURIComponent(await this.hash(eventCode + "::" + formatted))}`
						})).json();
						if(upload.success) {
							element.querySelector(`[data-id="${this.escape(id)}"]`).innerHTML += `<h3>Verifying...</h3>`;
							let verify = await (await fetch(`${config.upload.endpoint}/verify?key=${encodeURIComponent(await getKey())}&hash=${encodeURIComponent(await this.hash(eventCode + "::" + formatted))}`)).json();
							if(verify.success) {
								element.querySelector(`[data-id="${this.escape(id)}"]`).innerHTML += `<h3 class="primary">Success!</h3>`;
							} else {
								element.querySelector(`[data-id="${this.escape(id)}"]`).innerHTML += `<h3 class="red">Upload Failed!<br>${verify.error || "Unable to verify upload completion."}</h3>`;
							}
						} else {
							element.querySelector(`[data-id="${this.escape(id)}"]`).innerHTML += `<h3 class="red">Upload Failed!<br>${upload.error || "Unknown error."}</h3>`;
						}
					} catch(err) {
						// console.error(err);
						element.querySelector(`[data-id="${this.escape(id)}"]`).innerHTML += `<h3 class="red">Upload Failed!<br>Could not connect to the server.</h3>`;
					}
				});
				resolve(`<div class="component-upload" data-id="${this.escape(id)}"><h3>Preparing...</h3></div>`);
			} else if(component.type == "qrcode") {
				let id = this.random();
				let formatted = await this.formatData(eventCode, matchNumber, teamNumber, data);
				let chunkLength = 20;
				if(typeof component.chunkLength == "number") {
					chunkLength = component.chunkLength;
				}
				let interval = 500;
				if(typeof component.interval == "number") {
					interval = component.interval;
				}
				pendingFunctions.push(async () => {
					await this.prepareQRCodes(formatted, element.querySelector(`[data-id="${this.escape(id)}"]`), chunkLength);
					await this.showQRCodes(element.querySelector(`[data-id="${this.escape(id)}"]`), interval);
				});
				resolve(`<div class="component-qrcode" data-id="${this.escape(id)}" style="display: none;"></div>`);
			} else if(component.type == "data") {
				let formatted = await this.formatData(eventCode, matchNumber, teamNumber, data);
				resolve(`<textarea class="component-textbox" readonly>${this.escape(formatted)}</textarea>`);
			}
		});
	}

	this.getTeamColor = (eventCode, matchNumber, teamNumber) => {
		return new Promise(async (resolve, reject) => {
			let match = await this.getMatch(eventCode, matchNumber);
			let redTeams = match.alliances.red.team_keys.map(team => team.replace("frc", ""));
			let blueTeams = match.alliances.blue.team_keys.map(team => team.replace("frc", ""));
			if(redTeams.includes(teamNumber)) {
				resolve("red");
			} else if(blueTeams.includes(teamNumber)) {
				resolve("blue");
			} else {
				resolve("unknown");
			}
		});
	}

	function fixConfig(configuration) {
		if(configuration.theme == null) {
			configuration.theme = {};
		}
		if(configuration.theme.backgroundColor == null || configuration.theme.backgroundColor == "") {
			configuration.theme.backgroundColor = "#e5eef4";
		}
		if(configuration.theme.contentColor == null || configuration.theme.contentColor == "") {
			configuration.theme.contentColor = "#404040";
		}
		if(configuration.theme.primaryBackgroundColor == null || configuration.theme.primaryBackgroundColor == "") {
			configuration.theme.primaryBackgroundColor = "#39547b";
		}
		if(configuration.theme.primaryContentColor == null || configuration.theme.primaryContentColor == "") {
			configuration.theme.primaryContentColor = "#e5eef4";
		}
		if(configuration.theme.primaryDarkerBackgroundColor == null || configuration.theme.primaryDarkerBackgroundColor == "") {
			configuration.theme.primaryDarkerBackgroundColor = "#2b405f";
		}
		if(configuration.theme.disabledColor == null || configuration.theme.disabledColor == "") {
			configuration.theme.disabledColor = "#747474";
		}
		document.documentElement.style.setProperty('--backgroundColor', configuration.theme.backgroundColor);
		document.documentElement.style.setProperty('--contentColor', configuration.theme.contentColor);
		document.documentElement.style.setProperty('--primaryBackgroundColor', configuration.theme.primaryBackgroundColor);
		document.documentElement.style.setProperty('--primaryContentColor', configuration.theme.primaryContentColor);
		document.documentElement.style.setProperty('--primaryDarkerBackgroundColor', configuration.theme.primaryDarkerBackgroundColor);
		document.documentElement.style.setProperty('--disabledColor', configuration.theme.disabledColor);
		if(configuration.pages == null) {
			configuration.pages = [];
		}
		if(configuration.event == null) {
			configuration.event = {};
		}
		if(configuration.event.code == null) {
			configuration.event.code = "";
		}
		if(configuration.event.editable == null) {
			configuration.event.editable = true;
		}
		if(configuration.upload == null) {
			configuration.upload = {};
		}
		if(configuration.upload.passwordHash == null) {
			configuration.upload.passwordHash = "";
		}
		if(configuration.upload.endpoint == null) {
			configuration.upload.endpoint = "";
		}
		return configuration;
	}

	function generateQR(string, target) {
		let options = {
			text: string,
			width: getQRSize(),
			height: getQRSize(),
			colorDark : config.theme.primaryDarkerBackgroundColor,
			colorLight : config.theme.backgroundColor,
			correctLevel : QRCode.CorrectLevel.H
		}

		var qrcode = new QRCode(target, options);
	}

	function getQRSize() {
		return Math.floor(Math.min(window.innerWidth * 0.9, window.innerHeight * 0.7));
	}

	this.prepareQRCodes = (string, target, chunkLength) => {
		let chunks = [];
		for(let i = 0; i < string.length; i += chunkLength) {
			chunks.push(string.substring(i, i + chunkLength));
		}
		for(let i = 0; i < chunks.length; i++) {
			generateQR(JSON.stringify([i, chunks.length, chunks[i]]), target);
		}
		console.log(chunks);
	}

	this.showQRCodes = (target, interval) => {
		let codes = target.querySelectorAll("canvas");
		for(let i = 0; i < codes.length; i++) {
			codes[i].style.display = "none";
		}
		target.appendChild(document.createElement("p"));
		let code = 0;
		target.style.display = "block";
		setInterval(() => {
			for(let i = 0; i < codes.length; i++) {
				codes[i].style.display = "none";
			}
			codes[code].style.display = "block";
			target.querySelector("p").innerHTML = `${code + 1}/${codes.length}`;
			code++;
			if(code >= codes.length) {
				code = 0;
			}
		}, interval);
	}

	/* Imported from https://github.com/TogaTech/helpful.js  */
	this.hexFromBytes = (bytes) => {
		if(bytes == null || !(bytes instanceof Uint8Array)) {
			return "";
		}
		let hex = "";
		for(let i = 0; i < bytes.length; i++) {
			if(bytes[i].toString(16).length == 0) {
				hex += "00";
			} else if(bytes[i].toString(16).length == 1) {
				hex += "0" + bytes[i].toString(16);
			} else {
				hex += bytes[i].toString(16);
			}
		}
		return hex;
	}

	this.stringToBytes = (string) => {
		return (new TextEncoder()).encode(string);
	}

	this.hash = (string) => {
		return this.hexFromBytes(sha256(this.stringToBytes(string)));
	}
}