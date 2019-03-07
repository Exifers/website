import React, {Component} from "react";
import Leaderboard from "../components/Leaderboard";
import PlayerDetails from "../components/PlayerDetails";
import {get_parameters} from "../utils/url";
import withStyles from "react-jss";

const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
    }
};

class LeaderboardPane extends Component {
    render() {
        let content = <Leaderboard/>;
        if (get_parameters()['player_id'] !== undefined) {
            content =<PlayerDetails/>;
        }

        return (
            <div className={this.props.classes.wrapper}>
                {content}
            </div>
        );
    }
}

export default withStyles(styles)(LeaderboardPane);