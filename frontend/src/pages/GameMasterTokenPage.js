import React, {Component} from "react";
import withStyles from "react-jss";
import {compose} from "redux";
import NavigationBarPanel from "../panels/NavigationBarPanel";
import FooterPanel from "../panels/FooterPanel";
import HeaderPanel from "../panels/HeaderPanel";
import BasicLayout from "../layouts/BasicLayout";
import GameMasterTokenPanel from "../panels/GameMasterTokenPanel";

const styles = {};

class GameMasterTokenPage extends Component {
    render() {
        return (
            <BasicLayout
                header={<HeaderPanel/>}
                content={<GameMasterTokenPanel/>}
                navbar={<NavigationBarPanel/>}
                footer={<FooterPanel/>}
            />
        );
    }
}

GameMasterTokenPage.propTypes = {};

GameMasterTokenPage.defaultProps = {};

export default compose(
    withStyles(styles)
)(GameMasterTokenPage);