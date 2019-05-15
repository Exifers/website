import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {store} from "./store/store";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import IndexPage from "./pages/IndexPage";
import DocumentationPage from "./pages/DocumentationPage";
import DownloadPage from "./pages/DownloadPage2";
import LeaderboardPage from "./pages/LeaderboardPage";
import WifiPage from "./pages/WifiPage";
import VirusPage from "./pages/VirusPage";
import PasswordPage from "./pages/PasswordPage";
import AdsPage from "./pages/AdsPage";
import NotFoundPage from "./pages/NotFoundPage";
import GameResultVisiblePage from "./pages/GameResultVisiblePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import PasswordChangePage from "./pages/PasswordChangePage";
import PasswordChangeDonePage from "./pages/PasswordChangeDonePage";
import PasswordResetPage from "./pages/PasswordResetPage";
import PasswordResetDonePage from "./pages/PasswordResetDonePage";
import PasswordResetConfirmPage from "./pages/PasswordResetConfirmPage";
import PasswordResetCompletePage from "./pages/PasswordResetCompletePage";
import GameMasterTokenPage from "./pages/GameMasterTokenPage";
import RegisterPage from "./pages/RegisterPage";
import GameMasterPage from "./pages/GameMasterPage";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path={"/download/"}                      component={DownloadPage}/>
                        <Route exact path={"/documentation/"}                 component={DocumentationPage}/>
                        <Route exact path={"/articles/ads/"}                  component={AdsPage}/>
                        <Route exact path={"/articles/password/"}             component={PasswordPage}/>
                        <Route exact path={"/articles/virus/"}                component={VirusPage}/>
                        <Route exact path={"/articles/wifi/"}                 component={WifiPage}/>
                        <Route exact path={"/leaderboard/"}                   component={LeaderboardPage}/>
                        <Route exact path={"/gameresult_visible/"}            component={GameResultVisiblePage}/>
                        <Route exact path={"/accounts/login/"}                component={LoginPage}/>
                        <Route exact path={"/accounts/profile/"}              component={ProfilePage}/>
                        <Route exact path={"/accounts/logout/"}               component={IndexPage}/>
                        <Route exact path={"/accounts/password_change/done/"} component={PasswordChangeDonePage}/>
                        <Route exact path={"/accounts/password_change/"}      component={PasswordChangePage}/>
                        <Route exact path={"/accounts/password_reset/done/"}  component={PasswordResetDonePage}/>
                        <Route exact path={"/accounts/password_reset/"}       component={PasswordResetPage}/>
                        <Route exact path={"/accounts/reset/:uid64/:token/"}  component={PasswordResetConfirmPage}/>
                        <Route exact path={"/accounts/reset/done/"}           component={PasswordResetCompletePage}/>
                        <Route exact path={"/game_master/token/"}             component={GameMasterTokenPage}/>
                        <Route exact path={"/game_master/:token/"}            component={GameMasterPage}/>
                        <Route exact path={"/register/register/"}             component={RegisterPage}/>
                        <Route exact path={"/"}                               component={IndexPage}/>
                        <Route                                                component={NotFoundPage}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

