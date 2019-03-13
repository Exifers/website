import React, {Component} from "react";
import {compose} from "redux";
import withStyles from "react-jss";
import {NavLink} from "react-router-dom";

const styles = {
    navigationBarPanel: {
        backgroundColor: "#b4c7e7",
        width: "200px",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    navigationLink: {
        height: "80px",
        cursor: "pointer",
        transition: "all 0.3s",
        "&:hover": {
            backgroundColor: "#6fa3eb",
            textDecoration: "none"
        },
        "&:hover span": {
            color: "white !important"
        },
        display: "flex"
    },
    navigationLinkContent: {
        margin: "auto 0px auto 15px",
        textDecoration: "none",
        color: "#7194d2",
        fontSize: "22px"
    },
    activeNavigationLink: {
        fontWeight: "bold"
    },
    separator: {
        backgroundColor: "#6fa3eb",
        height: "1px",
        margin: "0px auto 0px auto",
        width: "80%"
    }
};

class NavigationBarPanel extends Component {
    render() {
        return (
            <div className={this.props.classes.navigationBarPanel}>
                <NavLink exact to={'/showcase/'} className={this.props.classes.navigationLink}
                         activeClassName={this.props.classes.activeNavigationLink}>
                    <span className={this.props.classes.navigationLinkContent}>Home</span>
                </NavLink>
                <span className={this.props.classes.separator}/>
                <NavLink exact to={'/showcase/download'} className={this.props.classes.navigationLink}
                         activeClassName={this.props.classes.activeNavigationLink}>
                    <span className={this.props.classes.navigationLinkContent}>Download</span>
                </NavLink>
                <span className={this.props.classes.separator}/>
                <NavLink exact to={'/showcase/documentation'} className={this.props.classes.navigationLink}
                         activeClassName={this.props.classes.activeNavigationLink}>
                    <span className={this.props.classes.navigationLinkContent}>Documentation</span>
                </NavLink>
                <span className={this.props.classes.separator}/>
                <NavLink exact to={'/showcase/articles'} className={this.props.classes.navigationLink}
                         activeClassName={this.props.classes.activeNavigationLink}>
                    <span className={this.props.classes.navigationLinkContent}>Articles</span>
                </NavLink>
                <span className={this.props.classes.separator}/>
                <NavLink exact to={'/showcase/leaderboard'} className={this.props.classes.navigationLink}
                         activeClassName={this.props.classes.activeNavigationLink}>
                    <span className={this.props.classes.navigationLinkContent}>Leaderboard</span>
                </NavLink>
            </div>
        );
    }
}

export default compose(
    withStyles(styles)
)
(NavigationBarPanel);