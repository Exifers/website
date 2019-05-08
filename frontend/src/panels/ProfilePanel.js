import React, {Component} from "react";
import withStyles from "react-jss";
import {compose} from "redux";

const styles = {};

class ProfilePanel extends Component {
    render() {
        return (
            <div>Profile</div>
        );
    }
}

ProfilePanel.propTypes = {};

ProfilePanel.defaultProps = {};

export default compose(
    withStyles(styles)
)(ProfilePanel);