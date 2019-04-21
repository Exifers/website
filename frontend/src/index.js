import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {store} from "./store/store";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import IndexPage from "./pages/IndexPage";
import DocumentationPage from "./pages/DocumentationPage";
import DownloadPage from "./pages/DownloadPage2";
import ArticlesPage from "./pages/ArticlesPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import WifiPage from "./pages/WifiPage";
import VirusPage from "./pages/VirusPage";
import PasswordPage from "./pages/PasswordPage";
import AdsPage from "./pages/AdsPage";
import NotFoundPage from "./pages/NotFoundPage";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path={"/download"}          component={DownloadPage}/>
                        <Route exact path={"/documentation"}     component={DocumentationPage}/>
                        <Route exact path={"/articles"}          component={ArticlesPage}/>
                        <Route exact path={"/articles/ads"}      component={AdsPage}/>
                        <Route exact path={"/articles/password"} component={PasswordPage}/>
                        <Route exact path={"/articles/virus"}    component={VirusPage}/>
                        <Route exact path={"/articles/wifi"}     component={WifiPage}/>
                        <Route exact path={"/leaderboard"}       component={LeaderboardPage}/>
                        <Route exact path={"/"}                  component={IndexPage}/>
                        <Route                                   component={NotFoundPage}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

