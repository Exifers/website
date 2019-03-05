import React, {Component} from "react";
import Leaderboard from "../components/Leaderboard";
import PlayerDetails from "../components/PlayerDetails";
import {get_parameters} from "../utils/url";

class LeaderboardPane extends Component {
    render() {
        if (get_parameters()['player_id'] !== undefined) {
            return <PlayerDetails/>
        }
        return <Leaderboard/>
    }
}

export default LeaderboardPane;