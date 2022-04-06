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
						label: "AUTO"
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
						src: "/img/2022field.png",
						default: [],
						data: "auto_locations",
						rows: 4,
						columns: 5,
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
						label: "TELEOP"
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
						src: "/img/2022field.png",
						default: [],
						data: "teleop_locations",
						rows: 4,
						columns: 5,
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
						label: "ENDGAME"
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
						label: "NOTES"
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
						type: "qrcode"
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
			primaryDarkerBackgroundColor: "#2b405f"
		},
		pages: data.game2022,
		format: (data) => {
			return "";
		}
	});

	sdk.showLoginPage();
	window.scoutingsdk = sdk;
}