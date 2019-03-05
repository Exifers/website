import React, {Component} from "react";
import Leaderboard from "../components/Leaderboard";
import PlayerDetails from "../components/PlayerDetails";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    selectedId: state.leaderboard.selectedId
});

class LeaderboardPane extends Component {
    render() {
        if (this.props.selectedId !== null) {
            return <PlayerDetails/>
        }
        return <Leaderboard/>
    }
}

export default connect(mapStateToProps, null)(LeaderboardPane);