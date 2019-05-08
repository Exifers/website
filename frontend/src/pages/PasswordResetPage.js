import React, {Component} from "react";
import withStyles from "react-jss";
import {compose} from "redux";
import FooterPanel from "../panels/FooterPanel";
import NavigationBarPanel from "../panels/NavigationBarPanel";
import HeaderPanel from "../panels/HeaderPanel";
import BasicLayout from "../layouts/BasicLayout";
import PasswordResetPanel from "../panels/PasswordResetPanel";

const styles = {};

class PasswordResetPage extends Component {
    render() {
        return (
            <BasicLayout
                header={<HeaderPanel/>}
                content={<PasswordResetPanel/>}
                navbar={<NavigationBarPanel/>}
                footer={<FooterPanel/>}
                />
        );
    }
}

PasswordResetPage.propTypes = {};

PasswordResetPage.defaultProps = {};

export default compose(
    withStyles(styles)
)(PasswordResetPage);