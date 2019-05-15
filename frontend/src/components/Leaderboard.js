import React, {Component} from 'react';
import '../resources/css/loader.css';
import withStyles from 'react-jss';
import classNames from 'classnames';
import {compose} from "redux";
import {withLeaderboardEntries, withWebsocketLeaderboardEntries} from "../actions/leaderboard";
import {NavLink} from "react-router-dom";
import GrowingBar from "../elements/GrowingBar";
import PitchTitle from "../elements/PitchTitle";

const styles = {
    cell: {
        borderBottom: '1px solid rgba(100, 100, 100, 0.3)'
    },
    leaderboard: {
        textAlign: 'center'
    },
    header: {
        fontSize: '17px',
        fontWeight: 'bold'
    },
    pseudo: {
        cursor: 'pointer',
        color: 'grey',
        '&:hover': {
            textDecoration: 'none',
            fontWeight: 'bold',
            color: 'grey'
        }
    },
    input: {
        width: '180px',
        marginBottom: '15px'
    },
    bar: {
        marginLeft: '100px'
    }
};

class Leaderboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({search: value});
    }

    render() {
        const filter = (entry) => {
            if (this.state.search === '') {
                return true;
            }
            try {
                return entry.pseudo.toUpperCase().includes(this.state.search.toUpperCase());
            } catch (e) {
                return true;
            }
        };

        const sort = (entry1, entry2) => {
            return globalScore(entry1) < globalScore(entry2);
        };

        const globalScore = (entry) => (
            Math.max(...entry.gameResults.map(
                current => (
                    +current.stage1Score
                    + current.stage2Score
                    + current.stage3Score
                    + current.stage4Score
                )
            )) / 4
        );

        return (
            <div className={'m-4 w-75 mx-auto'}>
                <br/>
                    <PitchTitle className={'text-center'}>Leaderboard</PitchTitle>
                <br/>
                <div className={classNames('container', this.props.classes.leaderboard)}>
                    <div className={classNames('row', this.props.classes.header)}>
                        <div className={classNames('col-sm p-1', this.props.classes.cell)}>
                            Pseudo
                        </div>
                        <div className={classNames('col-sm p-1', this.props.classes.cell)}>
                            Best average score
                        </div>
                        <div className={classNames('col-sm p-1', this.props.classes.cell)}>
                            Number of games
                        </div>
                    </div>
                    {this.props.leaderboardEntries
                        .filter(filter)
                        .filter(entry => entry.gameResults.length > 0)
                        .sort(sort)
                        .map((entry) => (
                            <div className={'row'} key={entry.pseudo}>
                                <div
                                    className={classNames('col-sm p-1', this.props.classes.cell)}>
                                    <NavLink to={`/leaderboard/?player_id=${entry.id}`}
                                             className={this.props.classes.pseudo}>
                                        {entry.pseudo}
                                    </NavLink>
                                </div>
                                <div className={classNames('col-sm p-1', this.props.classes.cell)}>
                                    <GrowingBar value={(() => {console.log(globalScore(entry)); return globalScore(entry);})()} className={this.props.classes.bar}/>
                                </div>
                                <div className={classNames('col-sm p-1', this.props.classes.cell)}>
                                    {entry.gameResults.length > 10 ? '10+' : entry.gameResults.length}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <br/>
                <br/>
                <br/>
                <input type={'text'} className={this.props.classes.input} value={this.state.search}
                       onChange={this.handleChange} placeholder={'Search pseudo'}/>
                <p>Click on a pseudo to see score details.</p>
            </div>
        );
    }
}

export default compose(
    withWebsocketLeaderboardEntries,
    withLeaderboardEntries,
    withStyles(styles)
)(Leaderboard);
