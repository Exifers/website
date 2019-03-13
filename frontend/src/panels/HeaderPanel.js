import React, {Component} from "react";
import {compose} from "redux";
import withStyles from "react-jss";
import logo from "../resources/images/logo.png";
import NavLink from "react-router-dom/es/NavLink";

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