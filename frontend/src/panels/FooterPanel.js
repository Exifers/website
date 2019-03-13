import React, {Component} from "react";
import {compose} from "redux";
import withStyles from "react-jss";

const styles = {
    footerPanel: {
        backgroundColor: "black",
        height: "100px",
        borderTop: "5px solid #ffc000"
    }
};

class FooterPanel extends Component {
    render() {
        return (
            <div className={this.props.classes.footerPanel}/>
        );
    }
}

export default compose(
    withStyles(styles)
)(FooterPanel);