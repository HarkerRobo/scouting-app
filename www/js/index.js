document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

	const data = {
		game2022: [
			{
				type: "layout",
				direction: "rows",
				components: [
					{
						type: "title",
						label: (state) => `AUTO (${state.teamNumber})`
					},
					{
						type: "checkbox",
						label: "Initiation Line",
						default: false,
						data: "initiation_line"
					},
					{
						type: "checkbox",
						label: "Human Player",
						default: false,
						data: "human_player"
					},
					{
						type: "timer",
						label: "Brick Time",
						default: 0,
						data: "brick_time",
						name: "brick_time",
						restricts: ["climb_time", "defense_time"]
					},
					{
						type: "locations",
						src: "./img/2022field.png",
						default: [],
						data: "auto_locations",
						rows: 4,
						columns: 5,
						orientation: 1,
						options: [
							{
								label: "Upper",
								value: "u"
							},
							{
								label: "Lower",
								value: "l"
							},
							{
								label: "Missed",
								value: "m"
							}
						],
					},
					{
						type: "layout",
						direction: "columns",
						components: [
							{
								type: "pagebutton",
								label: "< Back",
								page: -1
							},
							{
								type: "pagebutton",
								label: "Teleop >",
								page: 1
							}
						]
					}
				]
			},
			{
				type: "layout",
				direction: "rows",
				components: [
					{
						type: "title",
						label: (state) => `TELEOP (${state.teamNumber})`
					},
					{
						type: "timer",
						label: "Defense Time",
						default: 0,
						data: "defense_time",
						name: "defense_time",
						restricts: ["climb_time", "brick_time"]
					},
					{
						type: "timer",
						label: "Brick Time",
						default: 0,
						data: "brick_time",
						name: "brick_time",
						restricts: ["climb_time", "defense_time"]
					},
					{
						type: "locations",
						src: "./img/2022field.png",
						default: [],
						data: "teleop_locations",
						rows: 4,
						columns: 5,
						orientation: 1,
						options: [
							{
								label: "Upper",
								value: "u"
							},
							{
								label: "Lower",
								value: "l"
							},
							{
								label: "Missed",
								value: "m"
							}
						],
						count: "teleop_count"
					},
					{
						type: "layout",
						direction: "columns",
						components: [
							{
								type: "pagebutton",
								label: "< Auto",
								page: 0
							},
							{
								type: "pagebutton",
								label: "Endgame >",
								page: 2
							}
						]
					}
				]
			},
			{
				type: "layout",
				direction: "rows",
				components: [
					{
						type: "title",
						label: (state) => `ENDGAME (${state.teamNumber})`
					},
					{
						type: "timer",
						label: "Climb Time",
						default: 0,
						data: "climb_time",
						name: "climb_time",
						restricts: ["defense_time", "brick_time"]
					},
					{
						type: "select",
						label: "Climb",
						data: "climb",
						default: 0,
						options: [
							{
								label: "None"
							},
							{
								label: "Low"
							},
							{
								label: "Mid"
							},
							{
								label: "High"
							},
							{
								label: "Traversal"
							}
						]
					},
					{
						type: "layout",
						direction: "columns",
						components: [
							{
								type: "pagebutton",
								label: "< Teleop",
								page: 1
							},
							{
								type: "pagebutton",
								label: "Notes >",
								page: 3
							}
						]
					}
				]
			},
			{
				type: "layout",
				direction: "rows",
				components: [
					{
						type: "title",
						label: (state) => `NOTES (${state.teamNumber})`
					},
					{
						type: "text",
						label: "Please give any important information about this robot or its performance in the match including:\n\n- Driver skill\n- Ability to defend\n- Ability to score against defense\n- Robot stability\n- Fouls or other issues\n- Anything else that is relevant"
					},
					{
						type: "textbox",
						placeholder: "Enter notes here...",
						default: "",
						data: "notes"
					},
					{
						type: "layout",
						direction: "columns",
						components: [
							{
								type: "pagebutton",
								label: "< Endgame",
								page: 2
							},
							{
								type: "pagebutton",
								label: "Send >",
								page: 4
							}
						]
					}
				]
			},
			{
				type: "layout",
				direction: "rows",
				components: [
					{
						type: "pagebutton",
						label: "Upload (Online)",
						page: 5
					},
					{
						type: "pagebutton",
						label: "QR Code (Offline)",
						page: 6
					},
					{
						type: "pagebutton",
						label: "Copy Data (Offline)",
						page: 7
					},
					{
						type: "pagebutton",
						label: "< Notes",
						page: 3
					},
				]
			},
			{
				type: "layout",
				direction: "rows",
				components: [
					{
						type: "title",
						label: "UPLOAD"
					},
					{
						type: "upload"
					},
					{
						type: "layout",
						direction: "columns",
						components: [
							{
								type: "pagebutton",
								label: "< Send",
								page: 4
							},
							{
								type: "pagebutton",
								label: "Home",
								page: -2
							}
						]
					}
				]
			},
			{
				type: "layout",
				direction: "rows",
				components: [
					{
						type: "title",
						label: "QR CODE"
					},
					{
						type: "qrcode",
						chunkLength: 30,
						interval: 500
					},
					{
						type: "layout",
						direction: "columns",
						components: [
							{
								type: "pagebutton",
								label: "< Send",
								page: 4
							},
							{
								type: "pagebutton",
								label: "Home",
								page: -2
							}
						]
					}
				]
			},
			{
				type: "layout",
				direction: "rows",
				components: [
					{
						type: "title",
						label: "COPY DATA"
					},
					{
						type: "data"
					},
					{
						type: "layout",
						direction: "columns",
						components: [
							{
								type: "pagebutton",
								label: "< Send",
								page: 4
							},
							{
								type: "pagebutton",
								label: "Home",
								page: -2
							}
						]
					}
				]
			}
		]
	}

	const sdk = new ScoutingAppSDK(document.querySelector("#app"), {
		theme: {
			backgroundColor: "#e5eef4",
			contentColor: "#404040",
			primaryBackgroundColor: "#39547b",
			primaryContentColor: "#e5eef4",
			primaryDarkerBackgroundColor: "#2b405f",
			disabledColor: "#747474"
		},
		pages: data.game2022,
		event: {
			code: "2022casj",
			editable: false
		},
		upload: {
			passwordHash: "0801b3a5af3f6f6387f03be37307856b755a60d9572e9b3131b0a633fdc9ba17",
			endpoint: "https://harkerrobo.kabirramzan.com/scoutingapp/api/v1"
		}
	});

	sdk.formatData = async (eventCode, matchNumber, teamNumber, data) => {
		console.log(data);
		let csv = [];
		csv.push(matchNumber);
		csv.push(teamNumber);
		let color = await sdk.getTeamColor(eventCode, matchNumber, teamNumber);
		csv.push(color);
		csv.push(
			`[${data.auto_locations.map((loc) => {
				return parseInt(loc.index);
			}).concat(data.teleop_locations.map((loc) => {
				return parseInt(loc.index);
			})).join("|")}]`
		);
		csv.push(
			`[${data.auto_locations.map((loc) => {
				return `'${loc.value}'`;
			}).concat(data.teleop_locations.map((loc) => {
				return `'${loc.value}'`;
			})).join("|")}]`
		);
		csv.push(parseInt(data.climb))
		csv.push(data.initiation_line ? "TRUE" : "FALSE");
		csv.push(data.auto_locations.length);
		csv.push(data.human_player ? "TRUE" : "FALSE");
		csv.push(data.climb_time / 1000);
		csv.push(data.brick_time / 1000);
		csv.push(data.defense_time / 1000);
		csv.push(sdk.normalize(await sdk.getUser()));
		csv.push(sdk.normalize(data.notes));
		console.log(csv);
		let formatted = csv.join(",");
		console.log(formatted)
		return formatted;
	}

	if(["download", "download.html"].includes(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1])) {
		sdk.showDownloadPage();
	} else {
		sdk.showLoginPage();
	}
	window.scoutingsdk = sdk;
}