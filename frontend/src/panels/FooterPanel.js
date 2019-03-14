import React, {Component} from "react";
import {compose} from "redux";
import withStyles from "react-jss";
import classNames from "classnames";
import "../resources/images/cyber_background.png";

const styles = {
    footerPanel: {
        backgroundColor: "black",
        height: "180px",
        borderTop: "5px solid #ffc000"
    }
};

class FooterPanel extends Component {
    render() {
        return (
            <div className={classNames(this.props.classes.footerPanel, "cyberBackground")}/>
        );
    }
}

export default compose(
    withStyles(styles)
)(FooterPanel);