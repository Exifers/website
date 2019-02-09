import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Leaderboard from './components/Leaderboard';

class App extends Component {
    render() {
        return (
            <Leaderboard/>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('leaderboard'));

