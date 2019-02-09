import React, {Component} from 'react';
import '../resources/css/loader.css';
import withStyles from 'react-jss';
import classNames from 'classnames';

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
    }
};

class Leaderboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                loading: false,
                error: null,
                response: null
            }
        };
    }

    componentDidMount() {
        this.setState({
            data: {
                loading: true,
                error: null,
                response: null
            }
        });
        fetch('/leaderboard/list_leaderboard_entries')
            .then(response => response.json())
            .then(json => this.setState({
                data: {
                    loading: false,
                    error: null,
                    response: json
                }
            }))
            .catch(error => this.setState({
                data: {
                    loading: false,
                    error: error,
                    response: null
                }
            }));
    }

    render() {

        if (this.state.data.response) {
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
                    {this.state.data.response.map((entry, index) => (
                        <div className={'row'} key={index}>
                            <div className={classNames('col-sm p-1', this.props.classes.cell)}>
                                {entry.pseudo}
                            </div>
                            <div className={classNames('col-sm p-1', this.props.classes.cell)}>
                                {entry.score}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        if (this.state.data.error) {
            return (
                <div>An error has occurred : {String(this.state.error)}</div>
            );
        }

        if (this.state.data.loading) {
            return (
                <div className="lds-ring mt-5">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
            );
        }

        return null;
    }
}

export default withStyles(styles)(Leaderboard);