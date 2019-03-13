import React, {Component} from "react";
import {withLeaderboardEntries} from "../actions/leaderboard";
import {compose} from "redux";
import {NavLink} from "react-router-dom";
import {get_parameters} from "../utils/url";
import GameResult from "./GameResult";

class PlayerDetails extends Component {
    render() {
        const player_id = get_parameters()['player_id'];
        const player_data = this.props.leaderboardEntries.find(current => current.id === parseInt(player_id));
        return (
            <React.Fragment>
                <h3>{player_data.pseudo}</h3>
                <h5>Scores</h5>
                <div className={"mx-auto"}>
                    {player_data.gameResults.map((gameResult, index) => (
                            <GameResult
                                key={index}
                                results={[
                                    gameResult.stage1Score,
                                    gameResult.stage2Score,
                                    gameResult.stage3Score,
                                    gameResult.stage4Score,
                                ]}
                            />
                        )
                    )}
                </div>
                <NavLink to={'/showcase/leaderboard'}>Return</NavLink>
            </React.Fragment>
        );
    }
}

export default compose(
    withLeaderboardEntries
)(PlayerDetails);