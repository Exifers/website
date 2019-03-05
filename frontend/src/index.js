import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {store} from "./store/store";
import {Provider} from "react-redux";
import LeaderboardPane from "./panes/LeaderboardPane";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <LeaderboardPane/>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('leaderboard'));

