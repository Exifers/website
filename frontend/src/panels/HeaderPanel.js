import React, {Component} from "react";
import {compose} from "redux";
import withStyles from "react-jss";

const styles = {
    headerPanel: {
        backgroundColor: "black",
        height: "100px",
        borderBottom: "5px solid #ffc000"
    }
};

class HeaderPanel extends Component {
    render() {
        return (
            <div className={this.props.classes.headerPanel}/>
        );
    }
}

export default compose(
    withStyles(styles)
)(HeaderPanel);