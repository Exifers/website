import React, {Component} from "react";
import {compose} from "redux";
import withStyles from "react-jss";
import logo from "../resources/images/logo.png";

const styles = {
    headerPanel: {
        backgroundColor: "black",
        height: "100px",
        borderBottom: "5px solid #ffc000"
    },
    logo: {
        margin: "3px",
        maxHeight: "150px"
    }
};

class HeaderPanel extends Component {
    render() {
        return (
            <div className={this.props.classes.headerPanel}>
                <img src={logo} alt={"logo"} className={this.props.classes.logo}/>
            </div>
        );
    }
}

export default compose(
    withStyles(styles)
)(HeaderPanel);