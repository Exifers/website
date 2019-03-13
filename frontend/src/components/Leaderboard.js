import React, {Component} from 'react';
import '../resources/css/loader.css';
import withStyles from 'react-jss';
import classNames from 'classnames';
import {compose} from "redux";
import {withLeaderboardEntries} from "../actions/leaderboard";
import {NavLink} from "react-router-dom";

const styles = {
    cell: {
        border: '1px solid rgba(100, 100, 100, 0.3)'
    },
    leaderboard: {
        border: '1px solid rgba(100, 100, 100, 0.3)'
    },
    header: {
        fontSize: '17px',
        fontWeight: 'bold'
    },
    pseudo: {
        cursor: 'pointer'
    }
};

class Leaderboard extends Component {
    render() {
        return (
            <div className={classNames('container m-4 w-75 mx-auto', this.props.classes.leaderboard)}>
                <div className={classNames('row', this.props.classes.header)}>
                    <div className={classNames('col-sm p-1', this.props.classes.cell)}>
                        Pseudo
                    </div>
                    <div className={classNames('col-sm p-1', this.props.classes.cell)}>
                        Score
                    </div>
                </div>
                {this.props.leaderboardEntries.map((entry, index) => (
                    <div className={'row'} key={index}>
                        <div
                            className={classNames('col-sm p-1', this.props.classes.cell)}>
                            <NavLink to={`/showcase/leaderboard?player_id=${entry.id}`}
                                     className={this.props.classes.pseudo}>
                                {entry.pseudo}
                            </NavLink>
                        </div>
                        <div className={classNames('col-sm p-1', this.props.classes.cell)}>
                            {Math.max(...entry.gameResults.map(
                                current => (
                                    + current.stage1Score
                                    + current.stage2Score
                                    + current.stage3Score
                                    + current.stage4Score
                                )
                            ))/4}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default compose(
    withLeaderboardEntries,
    withStyles(styles)
)(Leaderboard);