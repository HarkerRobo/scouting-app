(async () => {
    const fs = require("fs");
    const fetch = require("node-fetch");

    let rawArgs = process.argv.slice(2);
    let args = {};
    for (let i = 0; i < rawArgs.length; i++) {
        if (rawArgs[i] == "--key" && args["key"] == null) {
            args["key"] = rawArgs[i + 1];
        }
        if (rawArgs[i] == "--endpoint" && args["endpoint"] == null) {
            args["endpoint"] = rawArgs[i + 1];
        }
        if (rawArgs[i] == "--eventCode" && args["eventCode"] == null) {
            args["eventCode"] = rawArgs[i + 1];
        }
        if (rawArgs[i] == "--file" && args["file"] == null) {
            args["file"] = rawArgs[i + 1];
        }
        if (
            rawArgs[i] == "--limitFrequency" &&
            args["limitFrequency"] == null
        ) {
            args["limitFrequency"] = parseInt(rawArgs[i + 1]);
        }
        if (rawArgs[i] == "--limitAccuracy" && args["limitAccuracy"] == null) {
            args["limitAccuracy"] = parseInt(rawArgs[i + 1]);
        }
        if (
            rawArgs[i] == "--limitTrustIndex" &&
            args["limitTrustIndex"] == null
        ) {
            args["limitTrustIndex"] = parseInt(rawArgs[i + 1]);
        }
    }

    const csv = fs.readFileSync(args.file || "data.csv", "utf-8");

    let users = [];

    let rows = csv
        .split("\n")
        .slice(1)
        .filter((row) => row.length > 0)
        .map((row) => {
            row = row.split(",");
            row[0] = parseInt(row[0]);
            row[1] = parseInt(row[1]);
            row[3] = row[3]
                .substring(1, row[3].length - 1)
                .split("|")
                .map((el) => parseInt(el));
            row[4] = row[4]
                .substring(1, row[4].length - 1)
                .split("|")
                .map((el) => el.substring(1, el.length - 1));
            row[5] = parseInt(row[5]);
            row[6] = row[6] == "TRUE" ? true : false;
            row[7] = parseInt(row[7]);
            row[8] = row[8] == "TRUE" ? true : false;
            row[9] = parseFloat(row[9]);
            row[10] = parseFloat(row[10]);
            row[11] = parseFloat(row[11]);

            users.push(row[12]);

            return {
                matchNum: row[0],
                teamNum: row[1],
                teamColor: row[2],
                locations: row[3],
                outcomes: row[4],
                climbLevel: row[5],
                initLinePassed: row[6],
                autonCount: row[7],
                humanPlayerScored: row[8],
                climbTime: row[9],
                brickTime: row[10],
                defenseTime: row[11],
                scouterName: row[12],
                comments: row[13]
            };
        });

    users = [...new Set(users)];

    console.log("\n\n[MOST MATCHES]");
    let matchFrequency = {};
    for (let i = 0; i < rows.length; i++) {
        if (matchFrequency[rows[i].scouterName] == null) {
            matchFrequency[rows[i].scouterName] = 0;
        }
        matchFrequency[rows[i].scouterName]++;
    }
    let sortedByFrequency = [...users].sort((user1, user2) => {
        return matchFrequency[user2] - matchFrequency[user1];
    });
    console.log(
        sortedByFrequency
            .slice(0, args.limitFrequency || 5)
            .map((user, index) => {
                return `${index + 1}. ${user} (${
                    matchFrequency[user]
                } matches)`;
            })
            .join("\n")
    );

    let filteredUsers = users.filter((user) => matchFrequency[user] > 0);

    console.log("\n\n[MOST ACCURATE]");
    let accuracyPoints = {};
    for (let i = 0; i < filteredUsers.length; i++) {
        accuracyPoints[filteredUsers[i]] = 0;
    }

    // let averageCommentsLength = rows.reduce((total, row) => {
    // 	return total + row.comments.length;
    // }, 0) / rows.length;
    // for(let i = 0; i < rows.length; i++) {
    // 	if(rows[i].comments.length > averageCommentsLength) {
    // 		accuracyPoints[rows[i].scouterName] += 0.5;
    // 	}
    // }

    let duplicates = [];
    for (let i = 0; i < rows.length; i++) {
        if (
            rows.filter(
                (row) =>
                    row.matchNum == rows[i].matchNum &&
                    row.teamNum == rows[i].teamNum
            ).length > 1
        ) {
            duplicates.push(rows[i].matchNum + "::" + rows[i].teamNum);
        }
    }
    duplicates = [...new Set(duplicates)];
    duplicates = duplicates.map((match) => {
        let data = match.split("::");
        return {
            matchNum: data[0],
            teamNum: data[1]
        };
    });
    for (let i = 0; i < duplicates.length; i++) {
        let duplicateEntries = rows.filter(
            (row) =>
                row.matchNum == duplicates[i].matchNum &&
                row.teamNum == duplicates[i].teamNum
        );
        for (let i = 0; i < duplicateEntries.length; i++) {
            for (let j = 0; j < duplicateEntries.length; j++) {
                if (i != j) {
                    iEntry = duplicateEntries[i];
                    jEntry = duplicateEntries[j];
                    iName = iEntry.scouterName;
                    jName = jEntry.scouterName;

                    if (
                        JSON.stringify(
                            iEntry.locations.sort((loc1, loc2) => loc1 - loc2)
                        ) ==
                        JSON.stringify(
                            jEntry.locations.sort((loc1, loc2) => loc1 - loc2)
                        )
                    ) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  1.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  1.5 / duplicateEntries.length)
                            : null;
                    } else {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] -=
                                  0.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] -=
                                  0.5 / duplicateEntries.length)
                            : null;
                    }

                    if (
                        Math.abs(
                            iEntry.outcomes.filter((outcome) => outcome == "u")
                                .length -
                                jEntry.outcomes.filter(
                                    (outcome) => outcome == "u"
                                ).length
                        ) < 2
                    ) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  1 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  1 / duplicateEntries.length)
                            : null;
                    } else if (
                        Math.abs(
                            iEntry.outcomes.filter((outcome) => outcome == "u")
                                .length -
                                jEntry.outcomes.filter(
                                    (outcome) => outcome == "u"
                                ).length
                        ) < 4
                    ) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                    } else {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] -=
                                  1.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] -=
                                  1.5 / duplicateEntries.length)
                            : null;
                    }

                    if (
                        Math.abs(
                            iEntry.outcomes.filter((outcome) => outcome == "l")
                                .length -
                                jEntry.outcomes.filter(
                                    (outcome) => outcome == "l"
                                ).length
                        ) < 2
                    ) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  1 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  1 / duplicateEntries.length)
                            : null;
                    } else if (
                        Math.abs(
                            iEntry.outcomes.filter((outcome) => outcome == "u")
                                .length -
                                jEntry.outcomes.filter(
                                    (outcome) => outcome == "l"
                                ).length
                        ) < 4
                    ) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                    } else {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] -=
                                  1.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] -=
                                  1.5 / duplicateEntries.length)
                            : null;
                    }

                    if (
                        Math.abs(
                            iEntry.outcomes.filter((outcome) => outcome == "m")
                                .length -
                                jEntry.outcomes.filter(
                                    (outcome) => outcome == "m"
                                ).length
                        ) < 2
                    ) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  1 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  1 / duplicateEntries.length)
                            : null;
                    } else if (
                        Math.abs(
                            iEntry.outcomes.filter((outcome) => outcome == "m")
                                .length -
                                jEntry.outcomes.filter(
                                    (outcome) => outcome == "m"
                                ).length
                        ) < 4
                    ) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                    } else {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] -=
                                  1.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] -=
                                  1.5 / duplicateEntries.length)
                            : null;
                    }

                    if (iEntry.climbLevel == jEntry.climbLevel) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                    } else {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] -=
                                  1.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] -=
                                  1.5 / duplicateEntries.length)
                            : null;
                    }

                    if (iEntry.initLinePassed == jEntry.initLinePassed) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                    } else {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] -=
                                  1.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] -=
                                  1.5 / duplicateEntries.length)
                            : null;
                    }

                    if (iEntry.autonCount == jEntry.autonCount) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  1 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  1 / duplicateEntries.length)
                            : null;
                    } else {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] -=
                                  1 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] -=
                                  1 / duplicateEntries.length)
                            : null;
                    }

                    if (iEntry.humanPlayerScored == jEntry.humanPlayerScored) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                    } else {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] -=
                                  0.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] -=
                                  0.5 / duplicateEntries.length)
                            : null;
                    }

                    if (Math.abs(iEntry.climbTime - jEntry.climbTime) < 1) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  1 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  1 / duplicateEntries.length)
                            : null;
                    } else if (
                        Math.abs(iEntry.climbTime - jEntry.climbTime) < 3
                    ) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                    } else {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] -=
                                  0.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] -=
                                  0.5 / duplicateEntries.length)
                            : null;
                    }

                    if (Math.abs(iEntry.brickTime - jEntry.brickTime) < 1) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  1 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  1 / duplicateEntries.length)
                            : null;
                    } else if (
                        Math.abs(iEntry.brickTime - jEntry.brickTime) < 3
                    ) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                    } else {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] -=
                                  0.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] -=
                                  0.5 / duplicateEntries.length)
                            : null;
                    }

                    if (Math.abs(iEntry.defenseTime - jEntry.defenseTime) < 1) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  1 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  1 / duplicateEntries.length)
                            : null;
                    } else if (
                        Math.abs(iEntry.defenseTime - jEntry.defenseTime) < 3
                    ) {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] +=
                                  0.5 / duplicateEntries.length)
                            : null;
                    } else {
                        accuracyPoints[iName] != null
                            ? (accuracyPoints[iName] -=
                                  0.5 / duplicateEntries.length)
                            : null;
                        accuracyPoints[jName] != null
                            ? (accuracyPoints[jName] -=
                                  0.5 / duplicateEntries.length)
                            : null;
                    }
                }
            }
        }
    }

    function curvedMatches(count) {
        if (count > 152) {
            return (49 / 152) * x;
        }
        return 2.5 + count - 0.08 * Math.pow(count, 16 / 11);
    }

    function curvedTrustScore(trustScore) {
        return trustScore ^ (2 / 3);
    }

    let combined = [];

    for (let i = 0; i < rows.length; i++) {
        if (combined[rows[i].matchNum] == null) {
            combined[rows[i].matchNum] = [];
        }
        combined[rows[i].matchNum].push(rows[i]);
    }

    let matches = await (
        await fetch(
            `${args.endpoint}/matches_advanced?key=${encodeURIComponent(
                args.key
            )}&eventcode=${encodeURIComponent(args.eventCode)}`
        )
    ).json();
    if (matches.success) {
        matches = JSON.parse(matches.contents);
    } else {
        throw matches.error;
    }

    function convertToClimb(number) {
        if (number == 0) {
            return "None";
        } else if (number == 1) {
            return "Low";
        } else if (number == 2) {
            return "Mid";
        } else if (number == 3) {
            return "High";
        } else if (number == 4) {
            return "Traversal";
        }
    }

    for (let i = 0; i < combined.length; i++) {
        if (combined[i] != null) {
            // let matchKey = (matches.find(match => match.comp_level == "qm" && match.match_number == i) || {}).key;
            // let match = await (await fetch(`${args.endpoint}/match?key=${encodeURIComponent(args.key)}&matchkey=${encodeURIComponent(matchKey)}`)).json()
            // if(match.success) {
            // 	match = JSON.parse(match.contents);
            // } else {
            // 	throw match.error;
            // }
            let match =
                matches.find(
                    (matchData) =>
                        matchData.comp_level == "qm" &&
                        matchData.match_number == i
                ) || {};
            let breakdown = match.score_breakdown;
            if (breakdown != null) {
                for (let j = 0; j < combined[i].length; j++) {
                    let color = combined[i][j].teamColor;
                    // console.log(match.alliances[color].team_keys, combined[i][j].teamNum);
                    let number =
                        match.alliances[color].team_keys.findIndex(
                            (key) => (key == `frc${combined[i][j].teamNum}` || (args.eventCode == "2022cacc" && combined[i][j].teamNum == 9973 && key == "frc2073B"))
                        ) + 1;
                    // console.log(`${color} ${number}`);
                    let name = combined[i][j].scouterName;
                    if (
                        (breakdown[color][`taxiRobot${number}`].toLowerCase() ==
                            "yes") ==
                        combined[i][j].initLinePassed
                    ) {
                        accuracyPoints[name] != null
                            ? (accuracyPoints[name] += 2)
                            : null;
                    } else {
                        accuracyPoints[name] != null
                            ? (accuracyPoints[name] -= 2)
                            : null;
                    }
                    if (
                        breakdown[color][
                            `endgameRobot${number}`
                        ].toLowerCase() ==
                        convertToClimb(combined[i][j].climbLevel).toLowerCase()
                    ) {
                        accuracyPoints[name] != null
                            ? (accuracyPoints[name] += 2)
                            : null;
                    } else {
                        accuracyPoints[name] != null
                            ? (accuracyPoints[name] -= 2)
                            : null;
                    }
                }
            }
        }
    }

    let trustScore = {};
    for (let i = 0; i < filteredUsers.length; i++) {
        trustScore[filteredUsers[i]] =
            matchFrequency[filteredUsers[i]] * 0.2 +
            (accuracyPoints[filteredUsers[i]] /
                curvedMatches(matchFrequency[filteredUsers[i]])) *
                1.85;
    }

    let highestTrustScore = 0;
    for (let i = 0; i < filteredUsers.length; i++) {
        if (trustScore[filteredUsers[i]] > highestTrustScore) {
            highestTrustScore = trustScore[filteredUsers[i]];
        }
    }
    let trustScoreIndex = {};
    for (let i = 0; i < filteredUsers.length; i++) {
        trustScoreIndex[filteredUsers[i]] =
            trustScore[filteredUsers[i]] / highestTrustScore;
    }

    for (let i = 0; i < combined.length; i++) {
        if (combined[i] != null) {
            let match =
                matches.find(
                    (matchData) =>
                        matchData.comp_level == "qm" &&
                        matchData.match_number == i
                ) || {};
            let breakdown = match.score_breakdown;
            if (breakdown != null) {
                let redTeamsData = combined[i].filter(
                    (entry) => entry.teamColor == "red"
                );
                let blueTeamsData = combined[i].filter(
                    (entry) => entry.teamColor == "blue"
                );
                let redTeams = redTeamsData.map((entry) => entry.teamNum);
                let blueTeams = blueTeamsData.map((entry) => entry.teamNum);
                let redTeamsUnique = [...new Set(redTeams)];
                let blueTeamsUnique = [...new Set(blueTeams)];

                // console.log(redTeams);
                // console.log(blueTeams);

                let redTeamGroups = {};
                for (let j = 0; j < redTeams.length; j++) {
                    // if(redTeams.filter(team => team == redTeams[j]).length > 1) {
                    if (redTeamGroups[redTeams[j]] == null) {
                        redTeamGroups[redTeams[j]] = [];
                    }
                    redTeamGroups[redTeams[j]].push(j);
                    // }
                }

                let blueTeamGroups = {};
                for (let j = 0; j < blueTeams.length; j++) {
                    // if(blueTeams.filter(team => team == blueTeams[j]).length > 1) {
                    if (blueTeamGroups[blueTeams[j]] == null) {
                        blueTeamGroups[blueTeams[j]] = [];
                    }
                    blueTeamGroups[blueTeams[j]].push(j);
                    // }
                }

                // console.log(redTeamGroups, blueTeamGroups);

                if (redTeamsUnique.length == 3) {
                    let redIndexPairings = [];
                    for (
                        let j = 0;
                        j < redTeamGroups[redTeamsUnique[0]].length;
                        j++
                    ) {
                        for (
                            let k = 0;
                            k < redTeamGroups[redTeamsUnique[1]].length;
                            k++
                        ) {
                            for (
                                let l = 0;
                                l < redTeamGroups[redTeamsUnique[2]].length;
                                l++
                            ) {
                                redIndexPairings.push([
                                    redTeamGroups[redTeamsUnique[0]][j],
                                    redTeamGroups[redTeamsUnique[1]][k],
                                    redTeamGroups[redTeamsUnique[2]][l]
                                ]);
                            }
                        }
                    }

                    // console.log(redIndexPairings);

                    // console.log(breakdown);

                    for (let j = 0; j < redIndexPairings.length; j++) {
                        let pairing = redIndexPairings[j];
                        let data = redTeamsData.filter((teamData, index) =>
                            pairing.includes(index)
                        );
                        // console.log(data.map(entry => entry.teamNum));
                        let autoLower = data.reduce((total, entry) => {
                            // console.log(entry.outcomes.slice(0, entry.autonCount));
                            return (
                                entry.outcomes
                                    .slice(0, entry.autonCount)
                                    .filter((outcome) => outcome == "l")
                                    .length + total
                            );
                        }, 0);
                        let autoLowerReal =
                            breakdown.red.autoCargoLowerRed +
                            breakdown.red.autoCargoLowerBlue +
                            breakdown.red.autoCargoLowerNear +
                            breakdown.red.autoCargoLowerFar;

                        if (autoLower == autoLowerReal) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          2 /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        } else if (Math.abs(autoLower - autoLowerReal) < 2) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          1 /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        } else {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] -=
                                          (2 *
                                              (1.25 -
                                                  curvedTrustScore(
                                                      trustScoreIndex[name]
                                                  ))) /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        }

                        // console.log("auto lower", autoLower, autoLowerReal);

                        let autoUpper = data.reduce((total, entry) => {
                            // console.log(entry.outcomes.slice(0, entry.autonCount));
                            return (
                                entry.outcomes
                                    .slice(0, entry.autonCount)
                                    .filter((outcome) => outcome == "u")
                                    .length + total
                            );
                        }, 0);
                        let autoUpperReal =
                            breakdown.red.autoCargoUpperRed +
                            breakdown.red.autoCargoUpperBlue +
                            breakdown.red.autoCargoUpperNear +
                            breakdown.red.autoCargoUpperFar;

                        if (autoUpper == autoUpperReal) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          2 /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        } else if (Math.abs(autoUpper - autoUpperReal) < 2) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          1 /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        } else {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] -=
                                          (2 *
                                              (1.25 -
                                                  curvedTrustScore(
                                                      trustScoreIndex[name]
                                                  ))) /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        }

                        // console.log("auto upper", autoUpper, autoUpperReal);

                        if (
                            autoLower + autoUpper ==
                            autoLowerReal + autoUpperReal
                        ) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          3 /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        } else if (
                            Math.abs(
                                autoLower +
                                    autoUpper -
                                    (autoLowerReal + autoUpperReal)
                            ) < 2
                        ) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          1 /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        } else {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] -=
                                          (1 *
                                              (1.25 -
                                                  curvedTrustScore(
                                                      trustScoreIndex[name]
                                                  ))) /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        }

                        // console.log("auto total", autoLower + autoUpper, autoLowerReal + autoUpperReal);

                        let teleopLower = data.reduce((total, entry) => {
                            // console.log(entry.outcomes.slice(entry.autonCount));
                            return (
                                entry.outcomes
                                    .slice(entry.autonCount)
                                    .filter((outcome) => outcome == "l")
                                    .length + total
                            );
                        }, 0);
                        let teleopLowerReal =
                            breakdown.red.teleopCargoLowerRed +
                            breakdown.red.teleopCargoLowerBlue +
                            breakdown.red.teleopCargoLowerNear +
                            breakdown.red.teleopCargoLowerFar;

                        if (teleopLower == teleopLowerReal) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          1 /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        } else if (
                            Math.abs(teleopLower - teleopLowerReal) < 3
                        ) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          0.5 /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        } else {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] -=
                                          (0.5 *
                                              (1.25 -
                                                  curvedTrustScore(
                                                      trustScoreIndex[name]
                                                  ))) /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        }

                        // console.log("teleop lower", teleopLower, teleopLowerReal);

                        let teleopUpper = data.reduce((total, entry) => {
                            // console.log(entry.outcomes.slice(entry.autonCount));
                            return (
                                entry.outcomes
                                    .slice(entry.autonCount)
                                    .filter((outcome) => outcome == "u")
                                    .length + total
                            );
                        }, 0);
                        let teleopUpperReal =
                            breakdown.red.teleopCargoUpperRed +
                            breakdown.red.teleopCargoUpperBlue +
                            breakdown.red.teleopCargoUpperNear +
                            breakdown.red.teleopCargoUpperFar;

                        if (teleopUpper == teleopUpperReal) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          1 /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        } else if (
                            Math.abs(teleopUpper - teleopUpperReal) < 3
                        ) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          0.5 /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        } else {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] -=
                                          (0.5 *
                                              (1.25 -
                                                  curvedTrustScore(
                                                      trustScoreIndex[name]
                                                  ))) /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        }

                        // console.log("teleop upper", teleopUpper, teleopUpperReal);

                        if (
                            teleopLower + teleopUpper ==
                            teleopLowerReal + teleopUpperReal
                        ) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          2 /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        } else if (
                            Math.abs(
                                teleopLower +
                                    teleopUpper -
                                    (teleopLowerReal + teleopUpperReal)
                            ) < 3
                        ) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          1 /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        } else {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] -=
                                          (0.5 *
                                              (1.25 -
                                                  curvedTrustScore(
                                                      trustScoreIndex[name]
                                                  ))) /
                                          redTeamGroups[data[i].teamNum].length)
                                    : null;
                            }
                        }

                        // console.log("teleop total", teleopLower + teleopUpper, teleopLowerReal + teleopUpperReal);
                    }
                }

                if (blueTeamsUnique.length == 3) {
                    let blueIndexPairings = [];
                    for (
                        let j = 0;
                        j < blueTeamGroups[blueTeamsUnique[0]].length;
                        j++
                    ) {
                        for (
                            let k = 0;
                            k < blueTeamGroups[blueTeamsUnique[1]].length;
                            k++
                        ) {
                            for (
                                let l = 0;
                                l < blueTeamGroups[blueTeamsUnique[2]].length;
                                l++
                            ) {
                                blueIndexPairings.push([
                                    blueTeamGroups[blueTeamsUnique[0]][j],
                                    blueTeamGroups[blueTeamsUnique[1]][k],
                                    blueTeamGroups[blueTeamsUnique[2]][l]
                                ]);
                            }
                        }
                    }

                    // console.log(blueIndexPairings);

                    // console.log(breakdown);

                    for (let j = 0; j < blueIndexPairings.length; j++) {
                        let pairing = blueIndexPairings[j];
                        let data = blueTeamsData.filter((teamData, index) =>
                            pairing.includes(index)
                        );
                        // console.log(data.map(entry => entry.teamNum));
                        let autoLower = data.reduce((total, entry) => {
                            // console.log(entry.outcomes.slice(0, entry.autonCount));
                            return (
                                entry.outcomes
                                    .slice(0, entry.autonCount)
                                    .filter((outcome) => outcome == "l")
                                    .length + total
                            );
                        }, 0);
                        let autoLowerReal =
                            breakdown.blue.autoCargoLowerRed +
                            breakdown.blue.autoCargoLowerBlue +
                            breakdown.blue.autoCargoLowerNear +
                            breakdown.blue.autoCargoLowerFar;

                        if (autoLower == autoLowerReal) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          2 /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        } else if (Math.abs(autoLower - autoLowerReal) < 2) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          1 /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        } else {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] -=
                                          (2 *
                                              (1.25 -
                                                  curvedTrustScore(
                                                      trustScoreIndex[name]
                                                  ))) /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        }

                        // console.log("auto lower", autoLower, autoLowerReal);

                        let autoUpper = data.reduce((total, entry) => {
                            // console.log(entry.outcomes.slice(0, entry.autonCount));
                            return (
                                entry.outcomes
                                    .slice(0, entry.autonCount)
                                    .filter((outcome) => outcome == "u")
                                    .length + total
                            );
                        }, 0);
                        let autoUpperReal =
                            breakdown.blue.autoCargoUpperRed +
                            breakdown.blue.autoCargoUpperBlue +
                            breakdown.blue.autoCargoUpperNear +
                            breakdown.blue.autoCargoUpperFar;

                        if (autoUpper == autoUpperReal) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          2 /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        } else if (Math.abs(autoUpper - autoUpperReal) < 2) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          1 /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        } else {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] -=
                                          (2 *
                                              (1.25 -
                                                  curvedTrustScore(
                                                      trustScoreIndex[name]
                                                  ))) /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        }

                        // console.log("auto upper", autoUpper, autoUpperReal);

                        if (
                            autoLower + autoUpper ==
                            autoLowerReal + autoUpperReal
                        ) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          3 /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        } else if (
                            Math.abs(
                                autoLower +
                                    autoUpper -
                                    (autoLowerReal + autoUpperReal)
                            ) < 2
                        ) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          1 /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        } else {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] -=
                                          (1 *
                                              (1.25 -
                                                  curvedTrustScore(
                                                      trustScoreIndex[name]
                                                  ))) /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        }

                        // console.log("auto total", autoLower + autoUpper, autoLowerReal + autoUpperReal);

                        let teleopLower = data.reduce((total, entry) => {
                            // console.log(entry.outcomes.slice(entry.autonCount));
                            return (
                                entry.outcomes
                                    .slice(entry.autonCount)
                                    .filter((outcome) => outcome == "l")
                                    .length + total
                            );
                        }, 0);
                        let teleopLowerReal =
                            breakdown.blue.teleopCargoLowerRed +
                            breakdown.blue.teleopCargoLowerBlue +
                            breakdown.blue.teleopCargoLowerNear +
                            breakdown.blue.teleopCargoLowerFar;

                        if (teleopLower == teleopLowerReal) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          1 /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        } else if (
                            Math.abs(teleopLower - teleopLowerReal) < 3
                        ) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          0.5 /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        } else {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] -=
                                          (0.5 *
                                              (1.25 -
                                                  curvedTrustScore(
                                                      trustScoreIndex[name]
                                                  ))) /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        }

                        // console.log("teleop lower", teleopLower, teleopLowerReal);

                        let teleopUpper = data.reduce((total, entry) => {
                            // console.log(entry.outcomes.slice(entry.autonCount));
                            return (
                                entry.outcomes
                                    .slice(entry.autonCount)
                                    .filter((outcome) => outcome == "u")
                                    .length + total
                            );
                        }, 0);
                        let teleopUpperReal =
                            breakdown.blue.teleopCargoUpperRed +
                            breakdown.blue.teleopCargoUpperBlue +
                            breakdown.blue.teleopCargoUpperNear +
                            breakdown.blue.teleopCargoUpperFar;

                        if (teleopUpper == teleopUpperReal) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          1 /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        } else if (
                            Math.abs(teleopUpper - teleopUpperReal) < 3
                        ) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          0.5 /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        } else {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] -=
                                          (0.5 *
                                              (1.25 -
                                                  curvedTrustScore(
                                                      trustScoreIndex[name]
                                                  ))) /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        }

                        // console.log("teleop upper", teleopUpper, teleopUpperReal);

                        if (
                            teleopLower + teleopUpper ==
                            teleopLowerReal + teleopUpperReal
                        ) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          2 /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        } else if (
                            Math.abs(
                                teleopLower +
                                    teleopUpper -
                                    (teleopLowerReal + teleopUpperReal)
                            ) < 3
                        ) {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] +=
                                          1 /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        } else {
                            for (let i = 0; i < data.length; i++) {
                                let name = data[i].scouterName;
                                accuracyPoints[name] != null
                                    ? (accuracyPoints[name] -=
                                          (0.5 *
                                              (1.25 -
                                                  curvedTrustScore(
                                                      trustScoreIndex[name]
                                                  ))) /
                                          blueTeamGroups[data[i].teamNum]
                                              .length)
                                    : null;
                            }
                        }

                        // console.log("teleop total", teleopLower + teleopUpper, teleopLowerReal + teleopUpperReal);
                    }
                }

                // console.log(match);
            }
        }
    }

    for (let i = 0; i < filteredUsers.length; i++) {
        accuracyPoints[filteredUsers[i]] =
            accuracyPoints[filteredUsers[i]] /
            curvedMatches(matchFrequency[filteredUsers[i]]);
    }

    let sortedByAccuracy = [...filteredUsers].sort((user1, user2) => {
        return accuracyPoints[user2] - accuracyPoints[user1];
    });
    console.log(
        sortedByAccuracy
            .slice(0, args.limitAccuracy || 5)
            .map((user, index) => {
                return `${index + 1}. ${user} (${accuracyPoints[user].toFixed(
                    2
                )} points)`;
            })
            .join("\n")
    );

    // console.log(matches);

    console.log("\n\n[MOST TRUSTED]");

    let sortedByTrustIndex = [...filteredUsers].sort((user1, user2) => {
        return trustScoreIndex[user2] - trustScoreIndex[user1];
    });
    console.log(
        sortedByTrustIndex
            .slice(0, args.limitTrustIndex || 5)
            .map((user, index) => {
                return `${index + 1}. ${user} (${(
                    trustScoreIndex[user] * 100
                ).toFixed(2)}%)`;
            })
            .join("\n")
    );

    console.log("\n\n");
})();
