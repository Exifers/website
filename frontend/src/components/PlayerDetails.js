import React, {Component} from "react";
import {selectId, withLeaderboardEntries} from "../actions/leaderboard";
import {compose} from "redux";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    selectedId: state.leaderboard.selectedId
});

const mapDispatchToProps = dispatch => ({
    selectId: id => dispatch(selectId(id))
});

class PlayerDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <div>Player details {this.props.selectedId}</div>
                <div onClick={() => this.props.selectId(null)}>Return</div>
            </React.Fragment>
        );
    }
}

export default compose(
    withLeaderboardEntries,
    connect(mapStateToProps, mapDispatchToProps)
)(PlayerDetails);