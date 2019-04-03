import React, {Component} from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import {compose} from "redux";
import NavLink from "react-router-dom/es/NavLink";

const styles = {
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: "12px"
    },
    line: {
        backgroundColor: "#ccc",
        height: "1px",
        width: "100%"
    },
    wrapper: {
        width: "60%",
        margin: "auto"
    },
    link: {
        color: "#aaa",
        "&:hover": {
            color: "#aaa",
            textDecoration: "none"
        }
    }
};

class InnerFooter extends Component {
    render() {
        return (
            <div className={this.props.classes.wrapper}>
                <div className={this.props.classes.footer}>
                    <NavLink to={'/showcase/'} className={this.props.classes.link}>Home</NavLink>
                    <NavLink to={'/showcase/download'} className={this.props.classes.link}>Download</NavLink>
                    <NavLink to={'/showcase/documentation'} className={this.props.classes.link}>Documentation</NavLink>
                    <NavLink to={'/showcase/articles'} className={this.props.classes.link}>Articles</NavLink>
                    <NavLink to={'/showcase/leaderboard'} className={this.props.classes.link}>Leaderboard</NavLink>
                </div>
            </div>
        );
    }
}

InnerFooter.propTypes = {};

InnerFooter.defaultProps = {};

export default compose(
    withStyles(styles)
)(InnerFooter);
