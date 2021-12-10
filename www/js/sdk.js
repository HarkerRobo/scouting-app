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
        "winner winner chicken dinner"
    ]

    const MAX_QR_LENGTH = 128;

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
			if(await this.getUser() == null || await this.getUser() == "") {
				await this.showLoginPage();
			} else {
				element.innerHTML = `
					<div class="home-window">
						<h1>${await this.getUser()}</h1>
						<p class="boltman-quote">${await this.getQuote()}</p>
					</div>
				`;
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