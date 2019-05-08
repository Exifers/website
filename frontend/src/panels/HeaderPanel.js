import React, {Component} from "react";
import {compose} from "redux";
import withStyles from "react-jss";
import logo from "../resources/images/logo.png";
import NavLink from "react-router-dom/es/NavLink";
import "../resources/css/main.css";
import classNames from "classnames";
import LanguageSelectionDropdown from "../components/LanguageSelectionDropdown";
import SearchInput from "../components/SearchInput";
import FacebookLink from "../elements/FacebookLink";
import TwitterLink from "../elements/TwitterLink";
import ProfileDropDown from "../elements/ProfileDropDown";

const styles = {
    headerPanel: {
        backgroundColor: "black",
        height: "180px",
        borderBottom: "5px solid #ffc000"
    },
    logo: {
        margin: "10px",
        maxHeight: "250px",
        outline: '0'
    },
    search: {
        marginTop: '2px'
    },
    language: {
        float: 'right'
    },
    iconsWrapper: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        top: '15px',
        right: '25px',
        height: '50px'
    },
    languageWrapper: {
        width: '45px'
    },
    facebook: {
        marginRight: '15px'
    },
    twitter: {
        marginRight: '15px'
    },
    logoNavlink: {
        outline: '0'
    },
    profile: {
        marginLeft: '3px'
    }
};

class HeaderPanel extends Component {
    render() {
        return (
            <div className={classNames(this.props.classes.headerPanel, "cyberBackground")}>
                <NavLink exact to={'/'} className={this.props.classes.logoNavlink}>
                    <img src={logo} alt={"logo"} className={this.props.classes.logo}/>
                </NavLink>
                <div className={this.props.classes.iconsWrapper}>
                    <TwitterLink to={'https://twitter.com/Cyberstories1'} className={classNames(this.props.classes.twitter)}/>
                    <FacebookLink to={'https://www.facebook.com/Cyberstories-299621230935351/'} className={this.props.classes.facebook}/>
                    <SearchInput className={classNames(this.props.classes.search)}/>
                    <ProfileDropDown className={this.props.classes.profile}/>
                </div>
            </div>
        );
    }
}

export default compose(
    withStyles(styles)
)(HeaderPanel);