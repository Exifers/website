import React, {Component} from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import {compose} from "redux";

const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        position: "absolute",
        width: "100%"
    },
    body: {
        display: "flex",
        flexDirection: "row",
        flexGrow: "1"
    },
    header: {
        width: "100%",
        flexGrow: "0"
    },
    content: {
        flexGrow: "1"
    },
    footer: {
        width: "100%",
        flexGrow: "0"
    }
};

class BasicLayout extends Component {
    render() {
        const {
            header,
            content,
            footer,
            navbar
        } = this.props;

        return (
            <div className={this.props.classes.wrapper}>
                <div className={this.props.classes.header}>
                    {header}
                </div>
                <div className={this.props.classes.body}>
                    <div>{navbar}</div>
                    <div className={this.props.classes.content}>{content}</div>
                </div>
                <div className={this.props.classes.footer}>
                    {footer}
                </div>
            </div>
        );
    }
}

BasicLayout.PropsTypes = {
    header: PropTypes.element.required,
    content: PropTypes.element.required,
    footer: PropTypes.element.required,
    navbar: PropTypes.element.required
};

export default compose(
    withStyles(styles)
)(BasicLayout);