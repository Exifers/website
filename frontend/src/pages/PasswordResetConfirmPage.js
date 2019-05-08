import React, {Component} from "react";
import withStyles from "react-jss";
import {compose} from "redux";
import HeaderPanel from "../panels/HeaderPanel";
import PasswordResetConfirmPanel from "../panels/PasswordResetConfirmPanel";
import NavigationBarPanel from "../panels/NavigationBarPanel";
import FooterPanel from "../panels/FooterPanel";
import BasicLayout from "../layouts/BasicLayout";

const styles = {};

class PasswordResetConfirmPage extends Component {
    render() {
        return (
            <BasicLayout
                header={<HeaderPanel/>}
                content={<PasswordResetConfirmPanel/>}
                navbar={<NavigationBarPanel/>}
                footer={<FooterPanel/>}
            />
        );
    }
}

PasswordResetConfirmPage.propTypes = {};

PasswordResetConfirmPage.defaultProps = {};

export default compose(
    withStyles(styles)
)(PasswordResetConfirmPage);