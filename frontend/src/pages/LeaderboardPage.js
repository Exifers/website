import React, {Component} from "react";
import HeaderPanel from "../panels/HeaderPanel";
import FooterPanel from "../panels/FooterPanel";
import NavigationBarPanel from "../panels/NavigationBarPanel";
import LeaderboardPane from "../panes/LeaderboardPane";
import BasicLayout from "../layouts/BasicLayout";

class LeaderboardPage extends Component {
    render() {
        return (
            <BasicLayout
                header={<HeaderPanel/>}
                content={<LeaderboardPane/>}
                navbar={<NavigationBarPanel/>}
                footer={<FooterPanel/>}
                />
        );
    }
}

export default LeaderboardPage;