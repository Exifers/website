import React, {Component} from "react";
import {compose} from "redux";
import withStyles from "react-jss";
import logo from "../resources/images/logo.png";
import NavLink from "react-router-dom/es/NavLink";
import "../resources/css/main.css";
import classNames from "classnames";
import LanguageSelectionDropdown from "../components/LanguageSelectionDropdown";
import SearchInput from "../components/SearchInput";

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
        position: "absolute",
        top: "20px",
        right: "20px"
    },
    language: {
        position: "absolute",
        top: "20px",
        right: "60px"
    }
};

class HeaderPanel extends Component {
    render() {
        return (
            <div className={classNames(this.props.classes.headerPanel, "cyberBackground")}>
                <NavLink exact to={'/showcase/'}>
                    <img src={logo} alt={"logo"} className={this.props.classes.logo}/>
                </NavLink>
                <SearchInput className={classNames(this.props.classes.search)}/>
                <LanguageSelectionDropdown className={this.props.classes.language}/>
            </div>
        );
    }
}

export default compose(
    withStyles(styles)
)(HeaderPanel);