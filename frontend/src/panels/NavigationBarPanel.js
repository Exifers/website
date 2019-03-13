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
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.2s",
        "&:hover": {
            backgroundColor: "#6899dd",
            textDecoration: "none"
        },
        "&:hover span": {
            color: "white !important"
        },
        display: "flex",
    },
    navigationLinkContent: {
        margin: "auto auto",
        textDecoration: "none",
        color: "#7194d2",
        fontSize: "22px"
    },
    activeNavigationLink: {
        fontWeight: "bold"
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
                <NavLink exact to={'/showcase/download'} className={this.props.classes.navigationLink}
                         activeClassName={this.props.classes.activeNavigationLink}>
                    <span className={this.props.classes.navigationLinkContent}>Download</span>
                </NavLink>
                <NavLink exact to={'/showcase/documentation'} className={this.props.classes.navigationLink}
                         activeClassName={this.props.classes.activeNavigationLink}>
                    <span className={this.props.classes.navigationLinkContent}>Documentation</span>
                </NavLink>
                <NavLink exact to={'/showcase/articles'} className={this.props.classes.navigationLink}
                         activeClassName={this.props.classes.activeNavigationLink}>
                    <span className={this.props.classes.navigationLinkContent}>Articles</span>
                </NavLink>
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