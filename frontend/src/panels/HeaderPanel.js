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
    },
    search: {
        color: "#ccc",
        cursor: "pointer",
        "&:hover": {
            color: "#fff"
        },
        fontSize: "20px",
        position: "absolute",
        top: "20px",
        right: "20px"
    },
    language: {
        position: "absolute",
        color: "#ccc",
        fontWeight: "bold",
        top: "20px",
        right: "60px",
        cursor: "pointer",
        "&:hover": {
            color: "#fff"
        }
    }
};

class HeaderPanel extends Component {
    render() {
        return (
            <div className={classNames(this.props.classes.headerPanel, "cyberBackground")}>
                <NavLink exact to={'/showcase/'}>
                    <img src={logo} alt={"logo"} className={this.props.classes.logo}/>
                </NavLink>
                <i className={classNames("fas fa-search", this.props.classes.search)}/>
                <span className={this.props.classes.language}>En <i className="fas fa-caret-down"/></span>
            </div>
        );
    }
}

export default compose(
    withStyles(styles)
)(HeaderPanel);