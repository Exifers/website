import React, {Component} from "react";
import {compose} from "redux";
import withStyles from "react-jss";

const styles = {
    headerPanel: {
        backgroundColor: "#999",
        height: "100px"
    }
};

class HeaderPanel extends Component {
    render() {
        return (
            <div className={this.props.classes.headerPanel}></div>
        );
    }
}

export default compose(
    withStyles(styles)
)(HeaderPanel);