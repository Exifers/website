import React, {Component} from "react";
import {withLeaderboardEntries} from "../actions/leaderboard";
import {compose} from "redux";
import {NavLink} from "react-router-dom";
import {get_parameters} from "../utils/url";
import GameResult from "./GameResult";
import withStyles from "react-jss";

const styles = {
    wrapper: {
        marginTop: '30px',
        textAlign: 'center'
    },
    gameResult: {
        marginBottom: "3rem"
    },
    returnButton: {
        color: "#7194d2",
        transition: "all 0.4s",
        "&:hover": {
            color: "#4a618a",
            textDecoration: "none"
        }
    }
};

class PlayerDetails extends Component {
    render() {
        const player_id = get_parameters()['player_id'];
        const player_data = this.props.leaderboardEntries.find(current => current.id === parseInt(player_id));
        return (
            <div className={this.props.classes.wrapper}>
                <h3>{player_data.pseudo}</h3>
                <div className={"mx-auto"}>
                    {player_data.gameResults.map((gameResult, index) => (
                            <GameResult
                                className={this.props.classes.gameResult}
                                key={index}
                                date={gameResult.date}
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
                <NavLink to={'/showcase/leaderboard'} className={this.props.classes.returnButton}>Back</NavLink>
            </div>
        );
    }
}

export default compose(
    withLeaderboardEntries,
    withStyles(styles)
)(PlayerDetails);
