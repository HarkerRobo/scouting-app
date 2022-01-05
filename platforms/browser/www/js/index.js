document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

	const data = {
		game2020: [
			{
				type: "columns",
				components: [
					[
						{
							type: "image",
							src: "/img/BluePowerPort.png"
						}
					],
					[
						{
							type: "image",
							src: "/img/PowerCell.png",
							align: "left"
						},
						{
							type: "label",
							content: "UPPER"
						},
						{
							type: "counter",
							default: 0,
							min: 0,
							step: 1,
							data: 0
						},
						{
							type: "label",
							content: "LOWER"
						},
						{
							type: "counter",
							default: 0,
							min: 0,
							step: 1,
							data: 1
						},
						{
							type: "label",
							content: "DROPS"
						},
						{
							type: "counter",
							default: 0,
							min: 0,
							step: 1,
							data: 2
						}
					],
					[
						{
							type: "image",
							src: "/img/ControlPanel.png",
							align: "left"
						},
						{
							type: "checkbox",
							label: "INIT. LINE",
							default: 0,
							data: 3
						},
						{
							type: "checkbox",
							label: "ROT. CONTROL",
							default: 0,
							data: 4
						},
						{
							type: "checkbox",
							label: "POS. CONTROL",
							default: 0,
							data: 5
						},
						{
							type: "rows",
							components: [
								[
									{
										type: "columns",
										components: [
											[
												{
													type: "label",
													content: "Defense"
												},
												{
													type: "timer",
													default: [0, 0],
													data: 6
												}
											]
										]
									},
									{
										type: "columns",
										components: [
											[
												{
													type: "label",
													content: "Bricked"
												},
												{
													type: "timer",
													default: [0, 0],
													data: 7
												}
											]
										]
									}
								]
							]
						}
					],
					[
						{
							type: "button",
							label: "< Back",
							page: -1
						},
						{
							type: "button",
							label: "Teleop >",
							position: "bottom",
							page: 1
						}
					]
				],
			},
			{
				type: "columns",
				components: [
					[
						{
							type: "image",
							src: "/img/BluePowerPort.png"
						}
					],
					[
						{
							type: "image",
							src: "/img/PowerCell.png",
							align: "left"
						},
						{
							type: "label",
							content: "UPPER"
						},
						{
							type: "counter",
							default: 0,
							min: 0,
							step: 1,
							data: 8
						},
						{
							type: "label",
							content: "LOWER"
						},
						{
							type: "counter",
							default: 0,
							min: 0,
							step: 1,
							data: 9
						},
						{
							type: "label",
							content: "DROPS"
						},
						{
							type: "counter",
							default: 0,
							min: 0,
							step: 1,
							data: 10
						}
					],
					[
						{
							type: "image",
							src: "/img/ControlPanel.png",
							align: "left"
						},
						{
							type: "checkbox",
							label: "INIT. LINE",
							default: 0,
							data: 11
						},
						{
							type: "checkbox",
							label: "ROT. CONTROL",
							default: 0,
							data: 12
						},
						{
							type: "checkbox",
							label: "POS. CONTROL",
							default: 0,
							data: 13
						},
						{
							type: "rows",
							components: [
								[
									{
										type: "columns",
										components: [
											[
												{
													type: "label",
													content: "Defense"
												},
												{
													type: "timer",
													default: [0, 0],
													data: 14
												}
											]
										]
									},
									{
										type: "columns",
										components: [
											[
												{
													type: "label",
													content: "Bricked"
												},
												{
													type: "timer",
													default: [0, 0],
													data: 15
												}
											]
										]
									}
								]
							]
						}
					],
					[
						{
							type: "button",
							label: "< Back",
							page: 0
						},
						{
							type: "button",
							label: "Endgame >",
							position: "bottom",
							page: 2
						}
					]
				],
			},
			{
				label: "Endgame",
				type: "columns",
				components: [
					[
						{
							type: "image",
							src: "/img/BlueShieldGenerator.png"
						},
						{
							type: "slider",
							min: 0,
							max: 4,
							step: 1,
							data: 16
						}
					],
					[
						{
							type: "button",
							label: "< Back",
							page: 1
						},
						{
							type: "select",
							max: 1,
							min: 1,
							display: "column",
							checkboxes: [
								{
									label: "None",
									default: 1
								},
								{
									label: "Park",
									default: 0
								},
								{
									label: "Climb",
									default: 0
								}
							],
							data: 17
						},
						{
							type: "button",
							label: "Comments >",
							position: "bottom",
							page: 3
						}
					]
				],
			},
			{
				label: "Comments",
				type: "rows",
				components: [
					[
						{
							type: "subheader",
							content: "Offense"
						}
					],
					[
						{
							type: "textbox",
							placeholder: "Describe the robot's ability to score power cells, spin the spinner, and climb",
							default: "",
							data: 18
						}
					],
					
					[
						{
							type: "subheader",
							content: "General"
						}
					],
					[
						{
							type: "textbox",
							placeholder: "Include specifics about the robot's design, driver, or other miscellaneous comments",
							default: "",
							data: 19
						}
					],
					[
						{
							type: "checkbox",
							label: "Ctrl Panel Quick",
							default: 0,
							data: 20
						},
						{
							type: "checkbox",
							label: "Robust Climb",
							default: 0,
							data: 21
						},
						{
							type: "checkbox",
							label: "Good Driver",
							default: 0,
							data: 22
						}
					],
					[
						{
							type: "checkbox",
							label: "Ctrl Panel First Try",
							default: 0,
							data: 23
						},
						{
							type: "checkbox",
							label: "Effective Defense",
							default: 0,
							data: 24
						},
						{
							type: "checkbox",
							label: "Stable Robot",
							default: 0,
							data: 25
						}
					],
					[
						{
							type: "button",
							label: "< Back",
							page: 2
						},
						{
							type: "button",
							label: "Send (Online) >",
							page: 4
						},
						{
							type: "button",
							label: "QR (Offline) >",
							page: 5
						}
					]
				]
			},
			{
				type: "columns",
				components: [
					[
						{
							type: "button",
							label: "< Back",
							position: "bottom",
							page: 3
						}
					],
					[
						{
							type: "send"
						}
					],
					[
						{
							type: "button",
							label: "Done >",
							position: "bottom",
							page: -1
						}
					]
				]
			},
			{
				type: "columns",
				components: [
					[
						{
							type: "button",
							label: "< Back",
							position: "bottom",
							page: 3
						}
					],
					[
						{
							type: "qrcode"
						}
					],
					[
						{
							type: "button",
							label: "Done >",
							position: "bottom",
							page: -1
						}
					]
				]
			}
		]
	}

	const sdk = new ScoutingAppSDK(document.querySelector("#app"), {
		theme: {
			backgroundColor: "#a0c1d8",
			alternateBackgroundColor: "#e5eef4",
			contentColor: "#404040"
		},
		pages: data.game2020
	});

	sdk.showLoginPage();
	window.scoutingsdk = sdk;
}
