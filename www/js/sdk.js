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
						<input class="event-code" value="${this.escape(_eventCode || await this.getEventCode())}" />
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
				element.querySelector(".button-row > button.log-out").onclick = async () => {
					await this.logout();
					await this.showLoginPage();
				}
				element.querySelector(".button-row > button.switch-accounts").onclick = async () => {
					await this.logoutUser();
					await this.showLoginPage();
				}
				element.querySelector(".button-row > button.scan-data").onclick = async () => {
					await this.showScannerPage();
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

	this.showUploadPage = () => {
		return new Promise(async (resolve, reject) => {
			if(await this.getUser() == "") {
				await this.showLoginPage();
			} else {
				element.innerHTML = ``;
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
			// TODO: check authentication
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
				resolve("");
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
			// TODO: fetch from TBA
			localStorage.setItem(`matches::${eventCode}`, []);
			resolve();
		});
	}

	this.getMatches = (eventCode) => {
		return new Promise(async (resolve, reject) => {
			// TODO: force fetch from TBA
			if(localStorage.getItem(`matches::${eventCode}`) == null) {
				// resolve([]);
			} else {
				// resolve(localStorage.getItem(`matches::${eventCode}`));
			}
			resolve([{"actual_time": 1648198406, "alliances": {"blue": {"dq_team_keys": [], "score": 35, "surrogate_team_keys": [], "team_keys": ["frc6918", "frc3257", "frc8048"]}, "red": {"dq_team_keys": [], "score": 34, "surrogate_team_keys": [], "team_keys": ["frc3669", "frc3189", "frc1662"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm1", "match_number": 1, "post_result_time": 1648198664, "predicted_time": 1648224000, "score_breakdown": {"blue": {"adjustPoints": 0, "autoCargoLowerBlue": 1, "autoCargoLowerFar": 1, "autoCargoLowerNear": 0, "autoCargoLowerRed": 0, "autoCargoPoints": 4, "autoCargoTotal": 2, "autoCargoUpperBlue": 0, "autoCargoUpperFar": 0, "autoCargoUpperNear": 0, "autoCargoUpperRed": 0, "autoPoints": 10, "autoTaxiPoints": 6, "cargoBonusRankingPoint": true, "endgamePoints": 0, "endgameRobot1": "None", "endgameRobot2": "None", "endgameRobot3": "None", "foulCount": 1, "foulPoints": 0, "hangarBonusRankingPoint": false, "matchCargoTotal": 20, "quintetAchieved": false, "rp": 3, "taxiRobot1": "Yes", "taxiRobot2": "Yes", "taxiRobot3": "Yes", "techFoulCount": 0, "teleopCargoLowerBlue": 4, "teleopCargoLowerFar": 5, "teleopCargoLowerNear": 1, "teleopCargoLowerRed": 1, "teleopCargoPoints": 25, "teleopCargoTotal": 18, "teleopCargoUpperBlue": 3, "teleopCargoUpperFar": 0, "teleopCargoUpperNear": 2, "teleopCargoUpperRed": 2, "teleopPoints": 25, "totalPoints": 35}, "red": {"adjustPoints": 0, "autoCargoLowerBlue": 0, "autoCargoLowerFar": 0, "autoCargoLowerNear": 0, "autoCargoLowerRed": 0, "autoCargoPoints": 4, "autoCargoTotal": 1, "autoCargoUpperBlue": 1, "autoCargoUpperFar": 0, "autoCargoUpperNear": 0, "autoCargoUpperRed": 0, "autoPoints": 8, "autoTaxiPoints": 4, "cargoBonusRankingPoint": false, "endgamePoints": 10, "endgameRobot1": "High", "endgameRobot2": "None", "endgameRobot3": "None", "foulCount": 0, "foulPoints": 4, "hangarBonusRankingPoint": false, "matchCargoTotal": 7, "quintetAchieved": false, "rp": 0, "taxiRobot1": "Yes", "taxiRobot2": "No", "taxiRobot3": "Yes", "techFoulCount": 0, "teleopCargoLowerBlue": 0, "teleopCargoLowerFar": 0, "teleopCargoLowerNear": 0, "teleopCargoLowerRed": 0, "teleopCargoPoints": 12, "teleopCargoTotal": 6, "teleopCargoUpperBlue": 2, "teleopCargoUpperFar": 1, "teleopCargoUpperNear": 2, "teleopCargoUpperRed": 1, "teleopPoints": 22, "totalPoints": 34}}, "set_number": 1, "time": 1648224000, "videos": [{"key": "gAVrq857cow", "type": "youtube"}], "winning_alliance": "blue"}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1836", "frc751", "frc2551"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7137", "frc3257", "frc5274"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm10", "match_number": 10, "post_result_time": null, "predicted_time": 1648228440, "score_breakdown": null, "set_number": 1, "time": 1648229340, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc701", "frc1160", "frc2288"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1678", "frc254", "frc766"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm11", "match_number": 11, "post_result_time": null, "predicted_time": 1648228980, "score_breakdown": null, "set_number": 1, "time": 1648229880, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8020", "frc4643", "frc6662"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8091", "frc7157", "frc7539"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm12", "match_number": 12, "post_result_time": null, "predicted_time": 1648229490, "score_breakdown": null, "set_number": 1, "time": 1648230390, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc687", "frc2204", "frc3669"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc4904", "frc8033", "frc5419"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm13", "match_number": 13, "post_result_time": null, "predicted_time": 1648230000, "score_breakdown": null, "set_number": 1, "time": 1648230900, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc6918", "frc3598", "frc1458"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5728", "frc5700", "frc2367"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm14", "match_number": 14, "post_result_time": null, "predicted_time": 1648230510, "score_breakdown": null, "set_number": 1, "time": 1648231410, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7667", "frc751", "frc2035"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc299", "frc8404", "frc7137"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm15", "match_number": 15, "post_result_time": null, "predicted_time": 1648231020, "score_breakdown": null, "set_number": 1, "time": 1648231920, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1662", "frc6981", "frc1678"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": ["frc766"], "team_keys": ["frc1836", "frc766", "frc1072"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm16", "match_number": 16, "post_result_time": null, "predicted_time": 1648231530, "score_breakdown": null, "set_number": 1, "time": 1648232430, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc4643", "frc973", "frc7157"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc254", "frc701", "frc3189"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm17", "match_number": 17, "post_result_time": null, "predicted_time": 1648232040, "score_breakdown": null, "set_number": 1, "time": 1648232940, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2288", "frc3669", "frc8033"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc4904", "frc5274", "frc1160"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm18", "match_number": 18, "post_result_time": null, "predicted_time": 1648232550, "score_breakdown": null, "set_number": 1, "time": 1648233450, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5728", "frc6662", "frc5419"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8048", "frc7419", "frc3598"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm19", "match_number": 19, "post_result_time": null, "predicted_time": 1648233060, "score_breakdown": null, "set_number": 1, "time": 1648233960, "videos": [], "winning_alliance": ""}, {"actual_time": 1648224171, "alliances": {"blue": {"dq_team_keys": [], "score": 42, "surrogate_team_keys": [], "team_keys": ["frc5274", "frc7419", "frc5700"]}, "red": {"dq_team_keys": [], "score": 28, "surrogate_team_keys": [], "team_keys": ["frc2288", "frc6981", "frc5458"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm2", "match_number": 2, "post_result_time": 1648224364, "predicted_time": 1648224600, "score_breakdown": {"blue": {"adjustPoints": 0, "autoCargoLowerBlue": 0, "autoCargoLowerFar": 0, "autoCargoLowerNear": 0, "autoCargoLowerRed": 0, "autoCargoPoints": 12, "autoCargoTotal": 3, "autoCargoUpperBlue": 0, "autoCargoUpperFar": 1, "autoCargoUpperNear": 0, "autoCargoUpperRed": 2, "autoPoints": 18, "autoTaxiPoints": 6, "cargoBonusRankingPoint": false, "endgamePoints": 10, "endgameRobot1": "None", "endgameRobot2": "High", "endgameRobot3": "None", "foulCount": 1, "foulPoints": 0, "hangarBonusRankingPoint": false, "matchCargoTotal": 14, "quintetAchieved": false, "rp": 2, "taxiRobot1": "Yes", "taxiRobot2": "Yes", "taxiRobot3": "Yes", "techFoulCount": 0, "teleopCargoLowerBlue": 1, "teleopCargoLowerFar": 2, "teleopCargoLowerNear": 3, "teleopCargoLowerRed": 2, "teleopCargoPoints": 14, "teleopCargoTotal": 11, "teleopCargoUpperBlue": 1, "teleopCargoUpperFar": 0, "teleopCargoUpperNear": 1, "teleopCargoUpperRed": 1, "teleopPoints": 24, "totalPoints": 42}, "red": {"adjustPoints": 0, "autoCargoLowerBlue": 0, "autoCargoLowerFar": 0, "autoCargoLowerNear": 0, "autoCargoLowerRed": 1, "autoCargoPoints": 2, "autoCargoTotal": 1, "autoCargoUpperBlue": 0, "autoCargoUpperFar": 0, "autoCargoUpperNear": 0, "autoCargoUpperRed": 0, "autoPoints": 4, "autoTaxiPoints": 2, "cargoBonusRankingPoint": false, "endgamePoints": 6, "endgameRobot1": "Mid", "endgameRobot2": "None", "endgameRobot3": "None", "foulCount": 0, "foulPoints": 4, "hangarBonusRankingPoint": false, "matchCargoTotal": 15, "quintetAchieved": false, "rp": 0, "taxiRobot1": "Yes", "taxiRobot2": "No", "taxiRobot3": "No", "techFoulCount": 0, "teleopCargoLowerBlue": 3, "teleopCargoLowerFar": 5, "teleopCargoLowerNear": 3, "teleopCargoLowerRed": 3, "teleopCargoPoints": 14, "teleopCargoTotal": 14, "teleopCargoUpperBlue": 0, "teleopCargoUpperFar": 0, "teleopCargoUpperNear": 0, "teleopCargoUpperRed": 0, "teleopPoints": 20, "totalPoints": 28}}, "set_number": 1, "time": 1648224600, "videos": [{"key": "QMBl36_GtiI", "type": "youtube"}], "winning_alliance": "blue"}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5458", "frc6619", "frc2204"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8091", "frc8404", "frc3257"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm20", "match_number": 20, "post_result_time": null, "predicted_time": 1648233570, "score_breakdown": null, "set_number": 1, "time": 1648234470, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2367", "frc6918", "frc2551"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8020", "frc7667", "frc687"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm21", "match_number": 21, "post_result_time": null, "predicted_time": 1648237500, "score_breakdown": null, "set_number": 1, "time": 1648238400, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1458", "frc973", "frc701"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5700", "frc7539", "frc1836"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm22", "match_number": 22, "post_result_time": null, "predicted_time": 1648238040, "score_breakdown": null, "set_number": 1, "time": 1648238940, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc3189", "frc2288", "frc751"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8033", "frc4643", "frc1678"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm23", "match_number": 23, "post_result_time": null, "predicted_time": 1648238580, "score_breakdown": null, "set_number": 1, "time": 1648239480, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8048", "frc6662", "frc4904"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc299", "frc766", "frc5274"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm24", "match_number": 24, "post_result_time": null, "predicted_time": 1648239120, "score_breakdown": null, "set_number": 1, "time": 1648240020, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5458", "frc8091", "frc1662"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7157", "frc254", "frc2035"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm25", "match_number": 25, "post_result_time": null, "predicted_time": 1648239611, "score_breakdown": null, "set_number": 1, "time": 1648240500, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc687", "frc7137", "frc5728"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc3257", "frc7667", "frc6981"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm26", "match_number": 26, "post_result_time": null, "predicted_time": 1648240102, "score_breakdown": null, "set_number": 1, "time": 1648240980, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8404", "frc3598", "frc8020"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7539", "frc1458", "frc7419"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm27", "match_number": 27, "post_result_time": null, "predicted_time": 1648240593, "score_breakdown": null, "set_number": 1, "time": 1648241460, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5419", "frc3669", "frc1160"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc6619", "frc5700", "frc2551"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm28", "match_number": 28, "post_result_time": null, "predicted_time": 1648241084, "score_breakdown": null, "set_number": 1, "time": 1648241940, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc6918", "frc2204", "frc4904"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2367", "frc1072", "frc973"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm29", "match_number": 29, "post_result_time": null, "predicted_time": 1648241575, "score_breakdown": null, "set_number": 1, "time": 1648242420, "videos": [], "winning_alliance": ""}, {"actual_time": 1648224613, "alliances": {"blue": {"dq_team_keys": [], "score": 65, "surrogate_team_keys": [], "team_keys": ["frc3598", "frc299", "frc1072"]}, "red": {"dq_team_keys": [], "score": 177, "surrogate_team_keys": [], "team_keys": ["frc973", "frc2551", "frc254"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm3", "match_number": 3, "post_result_time": 1648224782, "predicted_time": 1648225200, "score_breakdown": {"blue": {"adjustPoints": 0, "autoCargoLowerBlue": 0, "autoCargoLowerFar": 0, "autoCargoLowerNear": 1, "autoCargoLowerRed": 1, "autoCargoPoints": 12, "autoCargoTotal": 4, "autoCargoUpperBlue": 0, "autoCargoUpperFar": 1, "autoCargoUpperNear": 1, "autoCargoUpperRed": 0, "autoPoints": 16, "autoTaxiPoints": 4, "cargoBonusRankingPoint": true, "endgamePoints": 6, "endgameRobot1": "None", "endgameRobot2": "None", "endgameRobot3": "Mid", "foulCount": 1, "foulPoints": 12, "hangarBonusRankingPoint": false, "matchCargoTotal": 20, "quintetAchieved": false, "rp": 1, "taxiRobot1": "Yes", "taxiRobot2": "No", "taxiRobot3": "Yes", "techFoulCount": 0, "teleopCargoLowerBlue": 1, "teleopCargoLowerFar": 0, "teleopCargoLowerNear": 0, "teleopCargoLowerRed": 0, "teleopCargoPoints": 31, "teleopCargoTotal": 16, "teleopCargoUpperBlue": 6, "teleopCargoUpperFar": 2, "teleopCargoUpperNear": 3, "teleopCargoUpperRed": 4, "teleopPoints": 37, "totalPoints": 65}, "red": {"adjustPoints": 0, "autoCargoLowerBlue": 0, "autoCargoLowerFar": 0, "autoCargoLowerNear": 0, "autoCargoLowerRed": 0, "autoCargoPoints": 20, "autoCargoTotal": 5, "autoCargoUpperBlue": 2, "autoCargoUpperFar": 1, "autoCargoUpperNear": 0, "autoCargoUpperRed": 2, "autoPoints": 24, "autoTaxiPoints": 4, "cargoBonusRankingPoint": true, "endgamePoints": 36, "endgameRobot1": "Mid", "endgameRobot2": "Traversal", "endgameRobot3": "Traversal", "foulCount": 3, "foulPoints": 4, "hangarBonusRankingPoint": true, "matchCargoTotal": 62, "quintetAchieved": true, "rp": 4, "taxiRobot1": "Yes", "taxiRobot2": "No", "taxiRobot3": "Yes", "techFoulCount": 0, "teleopCargoLowerBlue": 0, "teleopCargoLowerFar": 0, "teleopCargoLowerNear": 0, "teleopCargoLowerRed": 1, "teleopCargoPoints": 113, "teleopCargoTotal": 57, "teleopCargoUpperBlue": 15, "teleopCargoUpperFar": 11, "teleopCargoUpperNear": 16, "teleopCargoUpperRed": 14, "teleopPoints": 149, "totalPoints": 177}}, "set_number": 1, "time": 1648225200, "videos": [{"key": "kp99xIs437Q", "type": "youtube"}], "winning_alliance": "red"}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8033", "frc254", "frc6662"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1678", "frc8048", "frc5458"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm30", "match_number": 30, "post_result_time": null, "predicted_time": 1648242066, "score_breakdown": null, "set_number": 1, "time": 1648242900, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7137", "frc2288", "frc7667"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7157", "frc1836", "frc5274"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm31", "match_number": 31, "post_result_time": null, "predicted_time": 1648242557, "score_breakdown": null, "set_number": 1, "time": 1648243380, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5728", "frc3189", "frc6981"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7539", "frc8020", "frc751"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm32", "match_number": 32, "post_result_time": null, "predicted_time": 1648243048, "score_breakdown": null, "set_number": 1, "time": 1648243860, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc701", "frc766", "frc7419"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8091", "frc6619", "frc3598"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm33", "match_number": 33, "post_result_time": null, "predicted_time": 1648243539, "score_breakdown": null, "set_number": 1, "time": 1648244340, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1662", "frc2551", "frc3257"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc3669", "frc1458", "frc2367"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm34", "match_number": 34, "post_result_time": null, "predicted_time": 1648244030, "score_breakdown": null, "set_number": 1, "time": 1648244820, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2204", "frc1160", "frc8404"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc687", "frc299", "frc5700"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm35", "match_number": 35, "post_result_time": null, "predicted_time": 1648244521, "score_breakdown": null, "set_number": 1, "time": 1648245300, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5274", "frc4643", "frc5419"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2035", "frc1072", "frc6918"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm36", "match_number": 36, "post_result_time": null, "predicted_time": 1648245012, "score_breakdown": null, "set_number": 1, "time": 1648245780, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7157", "frc2288", "frc1678"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc751", "frc5728", "frc973"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm37", "match_number": 37, "post_result_time": null, "predicted_time": 1648245503, "score_breakdown": null, "set_number": 1, "time": 1648246260, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc6619", "frc4904", "frc254"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7539", "frc8033", "frc7137"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm38", "match_number": 38, "post_result_time": null, "predicted_time": 1648245994, "score_breakdown": null, "set_number": 1, "time": 1648246740, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc766", "frc6662", "frc2551"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7419", "frc1836", "frc3257"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm39", "match_number": 39, "post_result_time": null, "predicted_time": 1648246485, "score_breakdown": null, "set_number": 1, "time": 1648247220, "videos": [], "winning_alliance": ""}, {"actual_time": 1648225039, "alliances": {"blue": {"dq_team_keys": [], "score": 30, "surrogate_team_keys": [], "team_keys": ["frc6662", "frc2367", "frc2035"]}, "red": {"dq_team_keys": [], "score": 52, "surrogate_team_keys": [], "team_keys": ["frc701", "frc751", "frc6619"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm4", "match_number": 4, "post_result_time": 1648225209, "predicted_time": 1648225102, "score_breakdown": {"blue": {"adjustPoints": 0, "autoCargoLowerBlue": 0, "autoCargoLowerFar": 0, "autoCargoLowerNear": 0, "autoCargoLowerRed": 0, "autoCargoPoints": 0, "autoCargoTotal": 0, "autoCargoUpperBlue": 0, "autoCargoUpperFar": 0, "autoCargoUpperNear": 0, "autoCargoUpperRed": 0, "autoPoints": 2, "autoTaxiPoints": 2, "cargoBonusRankingPoint": false, "endgamePoints": 6, "endgameRobot1": "None", "endgameRobot2": "None", "endgameRobot3": "Mid", "foulCount": 0, "foulPoints": 12, "hangarBonusRankingPoint": false, "matchCargoTotal": 5, "quintetAchieved": false, "rp": 0, "taxiRobot1": "Yes", "taxiRobot2": "No", "taxiRobot3": "No", "techFoulCount": 0, "teleopCargoLowerBlue": 0, "teleopCargoLowerFar": 0, "teleopCargoLowerNear": 0, "teleopCargoLowerRed": 0, "teleopCargoPoints": 10, "teleopCargoTotal": 5, "teleopCargoUpperBlue": 1, "teleopCargoUpperFar": 2, "teleopCargoUpperNear": 0, "teleopCargoUpperRed": 2, "teleopPoints": 16, "totalPoints": 30}, "red": {"adjustPoints": 0, "autoCargoLowerBlue": 1, "autoCargoLowerFar": 0, "autoCargoLowerNear": 0, "autoCargoLowerRed": 0, "autoCargoPoints": 10, "autoCargoTotal": 3, "autoCargoUpperBlue": 0, "autoCargoUpperFar": 1, "autoCargoUpperNear": 0, "autoCargoUpperRed": 1, "autoPoints": 16, "autoTaxiPoints": 6, "cargoBonusRankingPoint": true, "endgamePoints": 6, "endgameRobot1": "None", "endgameRobot2": "Mid", "endgameRobot3": "None", "foulCount": 3, "foulPoints": 0, "hangarBonusRankingPoint": false, "matchCargoTotal": 22, "quintetAchieved": false, "rp": 3, "taxiRobot1": "Yes", "taxiRobot2": "Yes", "taxiRobot3": "Yes", "techFoulCount": 0, "teleopCargoLowerBlue": 1, "teleopCargoLowerFar": 1, "teleopCargoLowerNear": 4, "teleopCargoLowerRed": 2, "teleopCargoPoints": 30, "teleopCargoTotal": 19, "teleopCargoUpperBlue": 1, "teleopCargoUpperFar": 4, "teleopCargoUpperNear": 5, "teleopCargoUpperRed": 1, "teleopPoints": 36, "totalPoints": 52}}, "set_number": 1, "time": 1648225800, "videos": [{"key": "Blmzs7Teo1E", "type": "youtube"}], "winning_alliance": "red"}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8091", "frc5700", "frc2204"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc3189", "frc8048", "frc2367"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm40", "match_number": 40, "post_result_time": null, "predicted_time": 1648246976, "score_breakdown": null, "set_number": 1, "time": 1648247700, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc6918", "frc1662", "frc299"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8404", "frc5419", "frc701"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm41", "match_number": 41, "post_result_time": null, "predicted_time": 1648247467, "score_breakdown": null, "set_number": 1, "time": 1648248180, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc4643", "frc2035", "frc3669"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc6981", "frc687", "frc3598"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm42", "match_number": 42, "post_result_time": null, "predicted_time": 1648247958, "score_breakdown": null, "set_number": 1, "time": 1648248660, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1458", "frc8020", "frc1072"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7667", "frc1160", "frc5458"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm43", "match_number": 43, "post_result_time": null, "predicted_time": 1648248449, "score_breakdown": null, "set_number": 1, "time": 1648249140, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc254", "frc5274", "frc7539"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc3257", "frc4904", "frc5728"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm44", "match_number": 44, "post_result_time": null, "predicted_time": 1648248940, "score_breakdown": null, "set_number": 1, "time": 1648249620, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7137", "frc7419", "frc7157"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2367", "frc766", "frc8033"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm45", "match_number": 45, "post_result_time": null, "predicted_time": 1648249431, "score_breakdown": null, "set_number": 1, "time": 1648250100, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc299", "frc8048", "frc8091"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2288", "frc6918", "frc973"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm46", "match_number": 46, "post_result_time": null, "predicted_time": 1648249922, "score_breakdown": null, "set_number": 1, "time": 1648250580, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1836", "frc687", "frc6619"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc3598", "frc2204", "frc3189"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm47", "match_number": 47, "post_result_time": null, "predicted_time": 1648250413, "score_breakdown": null, "set_number": 1, "time": 1648251060, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2551", "frc6981", "frc5419"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1458", "frc2035", "frc1678"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm48", "match_number": 48, "post_result_time": null, "predicted_time": 1648250904, "score_breakdown": null, "set_number": 1, "time": 1648251540, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5458", "frc5700", "frc8020"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc751", "frc1662", "frc4643"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm49", "match_number": 49, "post_result_time": null, "predicted_time": 1648251395, "score_breakdown": null, "set_number": 1, "time": 1648252020, "videos": [], "winning_alliance": ""}, {"actual_time": 1648225851, "alliances": {"blue": {"dq_team_keys": [], "score": 24, "surrogate_team_keys": [], "team_keys": ["frc7137", "frc4904", "frc1836"]}, "red": {"dq_team_keys": [], "score": 32, "surrogate_team_keys": [], "team_keys": ["frc5728", "frc8091", "frc1160"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm5", "match_number": 5, "post_result_time": 1648226063, "predicted_time": 1648226040, "score_breakdown": {"blue": {"adjustPoints": 0, "autoCargoLowerBlue": 0, "autoCargoLowerFar": 0, "autoCargoLowerNear": 0, "autoCargoLowerRed": 1, "autoCargoPoints": 2, "autoCargoTotal": 1, "autoCargoUpperBlue": 0, "autoCargoUpperFar": 0, "autoCargoUpperNear": 0, "autoCargoUpperRed": 0, "autoPoints": 6, "autoTaxiPoints": 4, "cargoBonusRankingPoint": false, "endgamePoints": 6, "endgameRobot1": "None", "endgameRobot2": "None", "endgameRobot3": "Mid", "foulCount": 2, "foulPoints": 8, "hangarBonusRankingPoint": false, "matchCargoTotal": 5, "quintetAchieved": false, "rp": 0, "taxiRobot1": "No", "taxiRobot2": "Yes", "taxiRobot3": "Yes", "techFoulCount": 0, "teleopCargoLowerBlue": 1, "teleopCargoLowerFar": 1, "teleopCargoLowerNear": 0, "teleopCargoLowerRed": 2, "teleopCargoPoints": 4, "teleopCargoTotal": 4, "teleopCargoUpperBlue": 0, "teleopCargoUpperFar": 0, "teleopCargoUpperNear": 0, "teleopCargoUpperRed": 0, "teleopPoints": 10, "totalPoints": 24}, "red": {"adjustPoints": 0, "autoCargoLowerBlue": 0, "autoCargoLowerFar": 0, "autoCargoLowerNear": 1, "autoCargoLowerRed": 0, "autoCargoPoints": 2, "autoCargoTotal": 1, "autoCargoUpperBlue": 0, "autoCargoUpperFar": 0, "autoCargoUpperNear": 0, "autoCargoUpperRed": 0, "autoPoints": 6, "autoTaxiPoints": 4, "cargoBonusRankingPoint": false, "endgamePoints": 6, "endgameRobot1": "None", "endgameRobot2": "None", "endgameRobot3": "Mid", "foulCount": 2, "foulPoints": 8, "hangarBonusRankingPoint": false, "matchCargoTotal": 7, "quintetAchieved": false, "rp": 2, "taxiRobot1": "Yes", "taxiRobot2": "No", "taxiRobot3": "Yes", "techFoulCount": 0, "teleopCargoLowerBlue": 0, "teleopCargoLowerFar": 0, "teleopCargoLowerNear": 0, "teleopCargoLowerRed": 0, "teleopCargoPoints": 12, "teleopCargoTotal": 6, "teleopCargoUpperBlue": 0, "teleopCargoUpperFar": 2, "teleopCargoUpperNear": 2, "teleopCargoUpperRed": 2, "teleopPoints": 18, "totalPoints": 32}}, "set_number": 1, "time": 1648226400, "videos": [{"key": "PzStv_PHd5E", "type": "youtube"}], "winning_alliance": "red"}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1072", "frc7667", "frc8404"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc3669", "frc6662", "frc701"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm50", "match_number": 50, "post_result_time": null, "predicted_time": 1648251886, "score_breakdown": null, "set_number": 1, "time": 1648252500, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc3257", "frc7539", "frc973"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1160", "frc766", "frc6918"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm51", "match_number": 51, "post_result_time": null, "predicted_time": 1648252377, "score_breakdown": null, "set_number": 1, "time": 1648252980, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc3598", "frc7157", "frc5728"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc6619", "frc2288", "frc299"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm52", "match_number": 52, "post_result_time": null, "predicted_time": 1648252868, "score_breakdown": null, "set_number": 1, "time": 1648253460, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5274", "frc8091", "frc6981"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc254", "frc5419", "frc2204"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm53", "match_number": 53, "post_result_time": null, "predicted_time": 1648253359, "score_breakdown": null, "set_number": 1, "time": 1648253940, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5700", "frc4643", "frc8048"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2551", "frc4904", "frc1458"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm54", "match_number": 54, "post_result_time": null, "predicted_time": 1648253850, "score_breakdown": null, "set_number": 1, "time": 1648254420, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc751", "frc687", "frc8033"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1662", "frc701", "frc7667"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm55", "match_number": 55, "post_result_time": null, "predicted_time": 1648254341, "score_breakdown": null, "set_number": 1, "time": 1648254900, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1836", "frc1678", "frc3669"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2035", "frc8020", "frc7419"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm56", "match_number": 56, "post_result_time": null, "predicted_time": 1648310400, "score_breakdown": null, "set_number": 1, "time": 1648310400, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1160", "frc2367", "frc7137"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc6662", "frc5458", "frc8404"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm57", "match_number": 57, "post_result_time": null, "predicted_time": 1648310940, "score_breakdown": null, "set_number": 1, "time": 1648310940, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc3189", "frc5419", "frc7539"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1072", "frc2204", "frc2288"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm58", "match_number": 58, "post_result_time": null, "predicted_time": 1648311480, "score_breakdown": null, "set_number": 1, "time": 1648311480, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc766", "frc6619", "frc3257"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc4643", "frc299", "frc1458"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm59", "match_number": 59, "post_result_time": null, "predicted_time": 1648312020, "score_breakdown": null, "set_number": 1, "time": 1648312020, "videos": [], "winning_alliance": ""}, {"actual_time": 1648226346, "alliances": {"blue": {"dq_team_keys": [], "score": 52, "surrogate_team_keys": [], "team_keys": ["frc7157", "frc8404", "frc766"]}, "red": {"dq_team_keys": [], "score": 61, "surrogate_team_keys": [], "team_keys": ["frc5419", "frc1678", "frc8020"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm6", "match_number": 6, "post_result_time": 1648226529, "predicted_time": 1648226337, "score_breakdown": {"blue": {"adjustPoints": 0, "autoCargoLowerBlue": 0, "autoCargoLowerFar": 0, "autoCargoLowerNear": 1, "autoCargoLowerRed": 0, "autoCargoPoints": 10, "autoCargoTotal": 3, "autoCargoUpperBlue": 1, "autoCargoUpperFar": 1, "autoCargoUpperNear": 0, "autoCargoUpperRed": 0, "autoPoints": 16, "autoTaxiPoints": 6, "cargoBonusRankingPoint": true, "endgamePoints": 6, "endgameRobot1": "None", "endgameRobot2": "Mid", "endgameRobot3": "None", "foulCount": 1, "foulPoints": 0, "hangarBonusRankingPoint": false, "matchCargoTotal": 21, "quintetAchieved": false, "rp": 1, "taxiRobot1": "Yes", "taxiRobot2": "Yes", "taxiRobot3": "Yes", "techFoulCount": 0, "teleopCargoLowerBlue": 3, "teleopCargoLowerFar": 1, "teleopCargoLowerNear": 1, "teleopCargoLowerRed": 1, "teleopCargoPoints": 30, "teleopCargoTotal": 18, "teleopCargoUpperBlue": 0, "teleopCargoUpperFar": 6, "teleopCargoUpperNear": 2, "teleopCargoUpperRed": 4, "teleopPoints": 36, "totalPoints": 52}, "red": {"adjustPoints": 0, "autoCargoLowerBlue": 0, "autoCargoLowerFar": 0, "autoCargoLowerNear": 0, "autoCargoLowerRed": 0, "autoCargoPoints": 16, "autoCargoTotal": 4, "autoCargoUpperBlue": 2, "autoCargoUpperFar": 1, "autoCargoUpperNear": 0, "autoCargoUpperRed": 1, "autoPoints": 22, "autoTaxiPoints": 6, "cargoBonusRankingPoint": false, "endgamePoints": 25, "endgameRobot1": "High", "endgameRobot2": "None", "endgameRobot3": "Traversal", "foulCount": 0, "foulPoints": 4, "hangarBonusRankingPoint": true, "matchCargoTotal": 9, "quintetAchieved": false, "rp": 3, "taxiRobot1": "Yes", "taxiRobot2": "Yes", "taxiRobot3": "Yes", "techFoulCount": 0, "teleopCargoLowerBlue": 0, "teleopCargoLowerFar": 0, "teleopCargoLowerNear": 0, "teleopCargoLowerRed": 0, "teleopCargoPoints": 10, "teleopCargoTotal": 5, "teleopCargoUpperBlue": 0, "teleopCargoUpperFar": 1, "teleopCargoUpperNear": 3, "teleopCargoUpperRed": 1, "teleopPoints": 35, "totalPoints": 61}}, "set_number": 1, "time": 1648227000, "videos": [{"key": "W3shpZ5Qe1A", "type": "youtube"}], "winning_alliance": "red"}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc701", "frc5728", "frc8048"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2551", "frc7157", "frc687"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm60", "match_number": 60, "post_result_time": null, "predicted_time": 1648312500, "score_breakdown": null, "set_number": 1, "time": 1648312500, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7419", "frc3669", "frc751"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc254", "frc6918", "frc8091"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm61", "match_number": 61, "post_result_time": null, "predicted_time": 1648312980, "score_breakdown": null, "set_number": 1, "time": 1648312980, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2367", "frc5458", "frc4904"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc6662", "frc1836", "frc6981"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm62", "match_number": 62, "post_result_time": null, "predicted_time": 1648313460, "score_breakdown": null, "set_number": 1, "time": 1648313460, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8404", "frc2035", "frc1662"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8033", "frc973", "frc1160"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm63", "match_number": 63, "post_result_time": null, "predicted_time": 1648313940, "score_breakdown": null, "set_number": 1, "time": 1648313940, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1072", "frc1678", "frc5274"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5700", "frc3598", "frc7137"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm64", "match_number": 64, "post_result_time": null, "predicted_time": 1648314420, "score_breakdown": null, "set_number": 1, "time": 1648314420, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7667", "frc2551", "frc8048"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc3189", "frc8020", "frc6619"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm65", "match_number": 65, "post_result_time": null, "predicted_time": 1648314900, "score_breakdown": null, "set_number": 1, "time": 1648314900, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5419", "frc1458", "frc687"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc766", "frc8091", "frc751"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm66", "match_number": 66, "post_result_time": null, "predicted_time": 1648315380, "score_breakdown": null, "set_number": 1, "time": 1648315380, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2288", "frc1836", "frc5728"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5458", "frc254", "frc3669"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm67", "match_number": 67, "post_result_time": null, "predicted_time": 1648315860, "score_breakdown": null, "set_number": 1, "time": 1648315860, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1160", "frc7539", "frc299"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7419", "frc2367", "frc4643"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm68", "match_number": 68, "post_result_time": null, "predicted_time": 1648316340, "score_breakdown": null, "set_number": 1, "time": 1648316340, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc6981", "frc1072", "frc5700"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8033", "frc3257", "frc7157"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm69", "match_number": 69, "post_result_time": null, "predicted_time": 1648316820, "score_breakdown": null, "set_number": 1, "time": 1648316820, "videos": [], "winning_alliance": ""}, {"actual_time": 1648226819, "alliances": {"blue": {"dq_team_keys": [], "score": 56, "surrogate_team_keys": [], "team_keys": ["frc1458", "frc8033", "frc7667"]}, "red": {"dq_team_keys": [], "score": 37, "surrogate_team_keys": [], "team_keys": ["frc2204", "frc7539", "frc4643"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm7", "match_number": 7, "post_result_time": 1648227034, "predicted_time": 1648226837, "score_breakdown": {"blue": {"adjustPoints": 0, "autoCargoLowerBlue": 0, "autoCargoLowerFar": 0, "autoCargoLowerNear": 0, "autoCargoLowerRed": 0, "autoCargoPoints": 4, "autoCargoTotal": 1, "autoCargoUpperBlue": 0, "autoCargoUpperFar": 1, "autoCargoUpperNear": 0, "autoCargoUpperRed": 0, "autoPoints": 8, "autoTaxiPoints": 4, "cargoBonusRankingPoint": true, "endgamePoints": 0, "endgameRobot1": "None", "endgameRobot2": "None", "endgameRobot3": "None", "foulCount": 3, "foulPoints": 8, "hangarBonusRankingPoint": false, "matchCargoTotal": 21, "quintetAchieved": false, "rp": 3, "taxiRobot1": "No", "taxiRobot2": "Yes", "taxiRobot3": "Yes", "techFoulCount": 0, "teleopCargoLowerBlue": 0, "teleopCargoLowerFar": 0, "teleopCargoLowerNear": 0, "teleopCargoLowerRed": 0, "teleopCargoPoints": 40, "teleopCargoTotal": 20, "teleopCargoUpperBlue": 7, "teleopCargoUpperFar": 3, "teleopCargoUpperNear": 4, "teleopCargoUpperRed": 6, "teleopPoints": 40, "totalPoints": 56}, "red": {"adjustPoints": 0, "autoCargoLowerBlue": 0, "autoCargoLowerFar": 1, "autoCargoLowerNear": 1, "autoCargoLowerRed": 0, "autoCargoPoints": 4, "autoCargoTotal": 2, "autoCargoUpperBlue": 0, "autoCargoUpperFar": 0, "autoCargoUpperNear": 0, "autoCargoUpperRed": 0, "autoPoints": 8, "autoTaxiPoints": 4, "cargoBonusRankingPoint": false, "endgamePoints": 15, "endgameRobot1": "None", "endgameRobot2": "Traversal", "endgameRobot3": "None", "foulCount": 2, "foulPoints": 12, "hangarBonusRankingPoint": false, "matchCargoTotal": 4, "quintetAchieved": false, "rp": 0, "taxiRobot1": "Yes", "taxiRobot2": "Yes", "taxiRobot3": "No", "techFoulCount": 0, "teleopCargoLowerBlue": 1, "teleopCargoLowerFar": 0, "teleopCargoLowerNear": 0, "teleopCargoLowerRed": 1, "teleopCargoPoints": 2, "teleopCargoTotal": 2, "teleopCargoUpperBlue": 0, "teleopCargoUpperFar": 0, "teleopCargoUpperNear": 0, "teleopCargoUpperRed": 0, "teleopPoints": 17, "totalPoints": 37}}, "set_number": 1, "time": 1648227600, "videos": [{"key": "KjWyu1voSJU", "type": "youtube"}], "winning_alliance": "blue"}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8020", "frc701", "frc6918"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc6662", "frc7137", "frc2204"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm70", "match_number": 70, "post_result_time": null, "predicted_time": 1648317300, "score_breakdown": null, "set_number": 1, "time": 1648317300, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc973", "frc1662", "frc4904"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1678", "frc7667", "frc3598"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm71", "match_number": 71, "post_result_time": null, "predicted_time": 1648317780, "score_breakdown": null, "set_number": 1, "time": 1648317780, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8404", "frc3189", "frc1458"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2035", "frc5274", "frc2288"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm72", "match_number": 72, "post_result_time": null, "predicted_time": 1648318260, "score_breakdown": null, "set_number": 1, "time": 1648318260, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc7539", "frc5458", "frc766"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2551", "frc3669", "frc8091"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm73", "match_number": 73, "post_result_time": null, "predicted_time": 1648318740, "score_breakdown": null, "set_number": 1, "time": 1648318740, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1160", "frc1072", "frc7419"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8048", "frc751", "frc7157"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm74", "match_number": 74, "post_result_time": null, "predicted_time": 1648319220, "score_breakdown": null, "set_number": 1, "time": 1648319220, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc6619", "frc8033", "frc6918"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8020", "frc299", "frc1836"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm75", "match_number": 75, "post_result_time": null, "predicted_time": 1648319700, "score_breakdown": null, "set_number": 1, "time": 1648319700, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc4643", "frc7137", "frc254"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc1662", "frc5419", "frc2367"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm76", "match_number": 76, "post_result_time": null, "predicted_time": 1648320180, "score_breakdown": null, "set_number": 1, "time": 1648320180, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc973", "frc1678", "frc3189"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5274", "frc687", "frc6662"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm77", "match_number": 77, "post_result_time": null, "predicted_time": 1648320660, "score_breakdown": null, "set_number": 1, "time": 1648320660, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc3257", "frc3598", "frc701"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc4904", "frc6981", "frc8404"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm78", "match_number": 78, "post_result_time": null, "predicted_time": 1648321140, "score_breakdown": null, "set_number": 1, "time": 1648321140, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc5700", "frc2035", "frc766"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc2204", "frc5728", "frc7667"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm79", "match_number": 79, "post_result_time": null, "predicted_time": 1648321620, "score_breakdown": null, "set_number": 1, "time": 1648321620, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc973", "frc7419", "frc299"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc687", "frc3189", "frc5458"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm8", "match_number": 8, "post_result_time": null, "predicted_time": 1648227328, "score_breakdown": null, "set_number": 1, "time": 1648228200, "videos": [], "winning_alliance": ""}, {"actual_time": null, "alliances": {"blue": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc6981", "frc6619", "frc2035"]}, "red": {"dq_team_keys": [], "score": -1, "surrogate_team_keys": [], "team_keys": ["frc8048", "frc1662", "frc1072"]}}, "comp_level": "qm", "event_key": "2022cada", "key": "2022cada_qm9", "match_number": 9, "post_result_time": null, "predicted_time": 1648227900, "score_breakdown": null, "set_number": 1, "time": 1648228800, "videos": [], "winning_alliance": ""}])
		});
	}

	this.getMatch = (eventCode, matchNumber, setNumber = 1, compLevel = "qm") => {
		return new Promise(async (resolve, reject) => {
			let matches = await this.getMatches(eventCode);
			resolve((matches.filter(match => matchNumber == match.match_number && setNumber == match.set_number && compLevel == match.comp_level) || [{}])[0] || {});
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
			document.querySelector(".location-popup").innerHTML = `
				${options.map((option) => {
					return `
						<div>
							<h2>${option.label}</h2>
							<button data-increment="-1" data-value="${this.escape(option.value)}"><span>-</span></button>
							<h3>${locationData.filter(loc => loc.value == option.value && loc.index == index).length} here<br>${locationData.filter(loc => loc.value == option.value).length} total</h3>
							<button data-increment="1" data-value="${this.escape(option.value)}"><span>+</span></button>
						</div>
					`;
				}).join("")}
				<button>Close</button>
			`;
			document.querySelector(".location-popup > button").onclick = async () => {
				document.querySelector(".location-popup").classList.remove("location-popup-visible");
				document.querySelector(".overlay").classList.remove("overlay-visible");
				setTimeout(() => {
					document.querySelector(".location-popup").style.display = "none";
					document.querySelector(".overlay").style.display = "none";
				}, 200);
				resolve();
			}
			let elements = document.querySelectorAll(".location-popup > div > button");
			for(let i = 0; i < elements.length; i++) {
				elements[i].onclick = async () => {
					document.querySelector(".location-popup").classList.remove("location-popup-visible");
					document.querySelector(".overlay").classList.remove("overlay-visible");
					setTimeout(() => {
						document.querySelector(".location-popup").style.display = "none";
						document.querySelector(".overlay").style.display = "none";
					}, 200);
					resolve([
						{
							value: elements[i].getAttribute("data-value"),
							index: index
						}, 
						parseInt(elements[i].getAttribute("data-increment"))
					]);
				}
			}
			document.querySelector(".overlay").style.display = "block";
			document.querySelector(".location-popup").style.display = "block";
			setTimeout(() => {
				document.querySelector(".overlay").classList.add("overlay-visible");
				document.querySelector(".location-popup").classList.add("location-popup-visible");
			}, 0);
		});
	}

	this.compileComponent = (eventCode, matchNumber, teamNumber, component = {}) => {
		return new Promise(async (resolve, reject) => {
			let types = ["layout", "title", "locations", "pagebutton", "checkbox", "timer", "select", "textbox", "tbaverify", "upload", "qrcode", "data"];
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
				let options = [];
				if(component.options instanceof Array) {
					options = component.options;
				}
				let defaultValue = [];
				if(component.default instanceof Array) {
					defaultValue = component.default;
				}
				pendingFunctions.push(async () => {
					await this.setData(component.data, data[component.data] ?? defaultValue);
					document.querySelector(`[data-id="${this.escape(id)}"] > button`).onclick = async () => {
						let grid = document.querySelector(`[data-id="${this.escape(id)}"] > .component-locations-container > .grid`);
						if(parseInt(grid.getAttribute("data-orientation")) == 0) {
							grid.style.transform = "scaleX(-1) scaleY(-1)";
							grid.setAttribute("data-orientation", 1);
						} else {
							grid.style.transform = "";
							grid.setAttribute("data-orientation", 0);
						}
					}
					let gridElements = document.querySelectorAll(`[data-id="${this.escape(id)}"] > .component-locations-container > .grid > div`);
					for(let i = 0; i < gridElements.length; i++) {
						gridElements[i].onclick = async (e) => {
							let result = await this.showLocationPopup(e.target.getAttribute("data-index"), options, data[component.data] ?? defaultValue);
							console.log(result);
							if(result != null) {
								let locationData = data[component.data] ?? defaultValue;
								for(let j = 0; j < Math.abs(result[1]); j++) {
									if(result[1] > 0) {
										locationData.push(result[0]);
									} else {
										let index = locationData.findIndex(loc => loc.value == result[0].value && loc.index == result[0].index);
										if(index > -1) {
											locationData.splice(index, 1);
										}
									}
								}
								await this.setData(component.data, locationData);
							}
						}
					}
				})
				resolve(`
					<div class="component-locations" data-id="${this.escape(id)}">
						<div class="component-locations-container">
							<div class="grid" data-orientation="0" style="grid-template-rows: repeat(${this.escape(rows)}, 1fr); grid-template-columns: repeat(${this.escape(columns)}, 1fr); background-image: url(${this.escape(src)})">
								${[...(new Array(rows)).keys()].map((row, rowindex) => {
									return [...(new Array(columns)).keys()].map((column, columnindex) => {
										return `<div style="grid-area: ${rowindex + 1} / ${columnindex + 1} / ${rowindex + 2} / ${columnindex + 2};" data-row="${rowindex}" data-column="${columnindex}" data-index="${(rowindex * columns) + columnindex}"></div>`
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
					document.querySelector(`[data-id="${this.escape(id)}"]`).onclick = async () => {
						await this.showMatchPage(document.querySelector(`[data-id="${this.escape(id)}"]`).getAttribute("data-page"), eventCode, matchNumber, teamNumber);
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
					document.querySelector(`[data-id="${this.escape(id)}"] > input`).oninput = async () => {
						await this.setData(component.data, document.querySelector(`[data-id="${this.escape(id)}"] > input`).checked);
					};
					await this.setData(component.data, document.querySelector(`[data-id="${this.escape(id)}"] > input`).checked);
				});
				resolve(`
					<div class="component-checkbox" data-id="${this.escape(id)}">
						<input type="checkbox" id="${this.escape(id)}" ${(data[component.data] ?? defaultValue) ? "checked" : ""} />
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
					document.querySelector(`[data-id="${this.escape(id)}"] > .button-container > button.minus`).onclick = async () => {
						if(timers[name].milliseconds > 1000) {
							timers[name].milliseconds -= 1000;
						} else {
							timers[name].milliseconds = 0;
						}
						if(timers[name].milliseconds < 0) {
							timers[name].milliseconds = 0;
						}
						await this.setData(component.data, timers[name].milliseconds);
						document.querySelector(`[data-id="${this.escape(timers[name].id)}"] > h2 > span`).innerHTML = this.timerFormat(data[component.data]);
					}
					document.querySelector(`[data-id="${this.escape(id)}"] > .button-container > button.plus`).onclick = async () => {
						timers[name].milliseconds += 1000;
						await this.setData(component.data, timers[name].milliseconds);
						document.querySelector(`[data-id="${this.escape(timers[name].id)}"] > h2 > span`).innerHTML = this.timerFormat(data[component.data]);
					}
					document.querySelector(`[data-id="${this.escape(id)}"] > .button-container > button.timer`).onclick = async () => {
						if(timers[name].running) {
							timers[name].running = false;
							clearInterval(timers[name].interval);
							await this.setData(component.data, timers[name].milliseconds);
							document.querySelector(`[data-id="${this.escape(timers[name].id)}"] > h2 > span`).innerHTML = this.timerFormat(data[component.data]);
							document.querySelector(`[data-id="${this.escape(timers[name].id)}"] > .button-container > button.timer`).innerHTML = "Start";
							for(let i = 0; i < restricts.length; i++) {
								if(timers[restricts[i]] == null) {
									timers[restricts[i]] = {};
									timers[restricts[i]].running = false;
									timers[restricts[i]].restricted = false;
								}
								timers[restricts[i]].restricted = false;
								let button = document.querySelector(`[data-id="${this.escape(timers[restricts[i]].id)}"] > .button-container > button.timer`);
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
								if(timers[restricts[i]].id != null && document.querySelector(`[data-id="${this.escape(timers[restricts[i]].id)}"] > .button-container > button.timer`) != null) {
									document.querySelector(`[data-id="${this.escape(timers[restricts[i]].id)}"] > .button-container > button.timer`).disabled = true;
								}
								timers[restricts[i]].restricted = true;
							}
							timers[name].running = true;
							timers[name].interval = setInterval(async () => {
								timers[name].milliseconds += 50;
								await this.setData(component.data, timers[name].milliseconds);
								let text = document.querySelector(`[data-id="${this.escape(timers[name].id)}"] > h2 > span`);
								if(text != null) {
									text.innerHTML = this.timerFormat(data[component.data]);
								}
							}, 50);
							document.querySelector(`[data-id="${this.escape(timers[name].id)}"] > .button-container > button.timer`).innerHTML = "Stop";
						}
					};
					await this.setData(component.data, timers[name].milliseconds);
				});
				resolve(`
					<div class="component-timer" data-id="${this.escape(id)}">
						<h2>${this.escape(label)}: <span>${this.timerFormat(data[component.data] ?? defaultValue)}</span></h2>
						<div class="button-container">
							<button class="minus">&nbsp;<span>-</span></button>
							<button class="timer" ${(timers[name]?.restricted ?? false) ? "disabled" : ""}>${(timers[name]?.running ?? false) ? "Stop" : "Start"}</button>
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
					document.querySelector(`[data-id="${this.escape(id)}"] > select`).oninput = async () => {
						await this.setData(component.data, document.querySelector(`[data-id="${this.escape(id)}"] > select`).value);
					};
					await this.setData(component.data, document.querySelector(`[data-id="${this.escape(id)}"] > select`).value);
				});
				resolve(`
					<div class="component-select" data-id="${this.escape(id)}">
						<h2>${this.escape(label)}</h2>
						<select>
							${options.map((option, index) => {
								return `<option value="${index}" ${index == (data[component.data] ?? defaultValue) ? "selected" : ""}>${this.escape(option.label)}</option>`;
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
					document.querySelector(`[data-id="${this.escape(id)}"]`).oninput = async () => {
						await this.setData(component.data, document.querySelector(`[data-id="${this.escape(id)}"]`).value);
					};
					await this.setData(component.data, document.querySelector(`[data-id="${this.escape(id)}"]`).value);
				});
				resolve(`<textarea class="component-textbox" placeholder="${this.escape(placeholder)}" data-id="${this.escape(id)}">${this.escape(data[component.data] ?? defaultValue)}</textarea>`);
			} else if(component.type == "upload") {
				resolve(``);
			} else if(component.type == "qrcode") {
				resolve(``);
			} else if(component.type == "data") {
				resolve(``);
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
		document.documentElement.style.setProperty('--backgroundColor', configuration.theme.backgroundColor);
		document.documentElement.style.setProperty('--contentColor', configuration.theme.contentColor);
		document.documentElement.style.setProperty('--primaryBackgroundColor', configuration.theme.primaryBackgroundColor);
		document.documentElement.style.setProperty('--primaryContentColor', configuration.theme.primaryContentColor);
		document.documentElement.style.setProperty('--primaryDarkerBackgroundColor', configuration.theme.primaryDarkerBackgroundColor);
		return configuration;
	}

	this.getQRCodes = (string) => {
		return new Promise(async (resolve, reject) => {
			let pause = (ms) => {
				return new Promise(async (resolve, reject) => {
					setTimeout(() => {
						resolve();
					}, ms);
				});
			}

			let codes = [];
			let strings = [];
			while(string.length > MAX_QR_LENGTH) {
				strings.push(string.substring(0, MAX_QR_LENGTH));
				string = string.substring(MAX_QR_LENGTH);
			}
			strings.push(string);
			for(let i = 0; i < strings.length; i++) {
				let code = document.createElement("div");
				let data = JSON.stringify({
					content: strings[i],
					total: strings.length,
					index: i
				})
				new QRCode(code, data);
				while(code.querySelectorAll("img")[0].src == "") {
					await pause(1);
				}
				codes.push(code.querySelectorAll("img")[0].src);
			}
			resolve(codes);
		});
	}

}