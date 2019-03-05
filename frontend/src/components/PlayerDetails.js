import React, {Component} from "react";
import {withLeaderboardEntries} from "../actions/leaderboard";
import {compose} from "redux";
import {NavLink} from "react-router-dom";
import {get_parameters} from "../utils/url";

class PlayerDetails extends Component {
    render() {
        const player_id = get_parameters()['player_id'];
        return (
            <React.Fragment>
                <div>Player details for {player_id}</div>
                <NavLink to={'/showcase/leaderboard'}>Return</NavLink>
            </React.Fragment>
        );
    }
}

export default compose(
    withLeaderboardEntries
)(PlayerDetails);