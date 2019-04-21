import React, {Component} from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import {compose} from "redux";

const styles = {};

class NotfoundPanel extends Component {
    render() {
        return (
            <h1>Not found !</h1>
        );
    }
}

NotfoundPanel.propTypes = {};

NotfoundPanel.defaultProps = {};

export default compose(
    withStyles(styles)
)(NotfoundPanel);