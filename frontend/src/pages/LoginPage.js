import React, {Component} from "react";
import withStyles from "react-jss";
import {compose} from "redux";
import HeaderPanel from "../panels/HeaderPanel";
import FooterPanel from "../panels/FooterPanel";
import NavigationBarPanel from "../panels/NavigationBarPanel";
import LoginPanel from "../panes/LoginPanel";
import BasicLayout from "../layouts/BasicLayout";

const styles = {};

class LoginPage extends Component {
    render() {
        return (
            <BasicLayout
                header={<HeaderPanel/>}
                content={<LoginPanel/>}
                navbar={<NavigationBarPanel/>}
                footer={<FooterPanel/>}
            />
        );
    }
}

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default compose(
    withStyles(styles)
)(LoginPage);