import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {store} from "./store/store";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import IndexPage from "./pages/IndexPage";
import DocumentationPage from "./pages/DocumentationPage";
import DownloadPage from "./pages/DownloadPage2";
import ArticlesPage from "./pages/ArticlesPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import WifiPage from "./pages/WifiPage";
import VirusPage from "./pages/VirusPage";
import PasswordPage from "./pages/PasswordPage";
import AdsPage from "./pages/AdsPage";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <React.Fragment>
                        <Route exact path={"/showcase/download"}          component={DownloadPage}/>
                        <Route exact path={"/showcase/documentation"}     component={DocumentationPage}/>
                        <Route exact path={"/showcase/articles"}          component={ArticlesPage}/>
                        <Route exact path={"/showcase/articles/ads"}      component={AdsPage}/>
                        <Route exact path={"/showcase/articles/password"} component={PasswordPage}/>
                        <Route exact path={"/showcase/articles/virus"}    component={VirusPage}/>
                        <Route exact path={"/showcase/articles/wifi"}     component={WifiPage}/>
                        <Route exact path={"/showcase/leaderboard"}       component={LeaderboardPage}/>
                        <Route exact path={"/showcase/"}                  component={IndexPage}/>
                    </React.Fragment>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

