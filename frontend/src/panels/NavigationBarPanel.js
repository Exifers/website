import React, {Component} from "react";
import {compose} from "redux";
import withStyles from "react-jss";
import { NavLink } from "react-router-dom";

const styles = {
    navigationBarPanel: {
        backgroundColor: "#ddd",
        width: "250px",
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
            backgroundColor: "#6899dd"
        }
    }
};

class NavigationBarPanel extends Component {
    render() {
        return (
            <div className={this.props.classes.navigationBarPanel}>
                <NavLink to={'/showcase/'} className={this.props.classes.navigationLink}>
                    Home
                </NavLink>
                <NavLink to={'/showcase/download'} className={this.props.classes.navigationLink}>
                    Download
                </NavLink>
                <NavLink to={'/showcase/documentation'} className={this.props.classes.navigationLink}>
                    Documentation
                </NavLink>
                <NavLink to={'/showcase/articles'} className={this.props.classes.navigationLink}>
                    Articles
                </NavLink>
                <NavLink to={'/showcase/leaderboard'} className={this.props.classes.navigationLink}>
                    Leaderboard
                </NavLink>
            </div>
        );
    }
}

export default compose(
    withStyles(styles)
)
(NavigationBarPanel);