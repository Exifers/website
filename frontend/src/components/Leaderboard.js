import React, {Component} from 'react';
import '../resources/css/loader.css';

class Leaderboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                loading: true,
                error: null,
                response: null
            }
        };
    }

    componentDidMount() {
    }

    render() {

        if (this.state.data.response) {
            return (
                <div>The leaderboard</div>
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

export default Leaderboard;