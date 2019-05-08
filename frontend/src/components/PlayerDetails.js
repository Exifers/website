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
        marginBottom: "3rem",
    },
    returnButton: {
        color: "#7194d2",
        transition: "all 0.4s",
        "&:hover": {
            color: "#4a618a",
            textDecoration: "none"
        }
    },
    gameResultWrapper: {
    }
};

class PlayerDetails extends Component {
    render() {
        const player_id = get_parameters()['player_id'];
        const player_data = this.props.leaderboardEntries.find(current => current.id === parseInt(player_id));

        const sort = (gr1, gr2) => {
            return globalScore(gr1) < globalScore(gr2);
        };

        const globalScore = (current) => (
                    (current.stage1Score
                    + current.stage2Score
                    + current.stage3Score
                    + current.stage4Score) / 4
                );

        return (
            <div className={this.props.classes.wrapper}>
                <h3>{player_data.pseudo}</h3>
                <div className={"mx-auto"}>
                    {player_data.gameResults.sort(sort).map((gameResult, index) => (
                            <div key={index} className={index !== 0 ? this.props.classes.gameResultWrapper : ''}>
                                {index === 0 ? (
                                    <h6>Best score : {globalScore(gameResult)} %</h6>
                                ) : index === 1 ? (
                                    <h6>Other scores :</h6>
                                ) : null}
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
                            </div>
                        )
                    )}
                </div>
                <NavLink to={'/leaderboard'} className={this.props.classes.returnButton}>Back</NavLink>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default compose(
    withLeaderboardEntries,
    withStyles(styles)
)(PlayerDetails);
