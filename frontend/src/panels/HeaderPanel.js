import React, {Component} from "react";
import {compose} from "redux";
import withStyles from "react-jss";
import logo from "../resources/images/logo.png";
import NavLink from "react-router-dom/es/NavLink";
import "../resources/css/main.css";
import classNames from "classnames";

const styles = {
    headerPanel: {
        backgroundColor: "black",
        height: "180px",
        borderBottom: "5px solid #ffc000"
    },
    logo: {
        margin: "10px",
        maxHeight: "250px"
    }
};

class HeaderPanel extends Component {
    render() {
        return (
            <div className={classNames(this.props.classes.headerPanel, "cyberBackground")}>
                <NavLink exact to={'/showcase/'}>
                    <img src={logo} alt={"logo"} className={this.props.classes.logo}/>
                </NavLink>
            </div>
        );
    }
}

export default compose(
    withStyles(styles)
)(HeaderPanel);