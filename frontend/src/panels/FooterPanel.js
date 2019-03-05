import React, {Component} from "react";
import {compose} from "redux";
import withStyles from "react-jss";

const styles = {
    footerPanel: {
        backgroundColor: "#999",
        height: "100px"
    }
};

class FooterPanel extends Component {
    render() {
        return (
            <div className={this.props.classes.footerPanel}></div>
        );
    }
}

export default compose(
    withStyles(styles)
)(FooterPanel);