import React, {Component} from "react";
import withStyles from "react-jss";
import {compose} from "redux";
import NavLink from "react-router-dom/es/NavLink";

const styles = {
    wrapper: {
        textAlign: 'center',
        paddingTop: '50px'
    }
};

class PasswordResetCompletePanel extends Component {
    render() {
        return (
            <div className={this.props.classes.wrapper}>Your password has been successfully changed, you my want
                to <NavLink to={'/accounts/login/'}>login</NavLink> now.</div>
        );
    }
}

PasswordResetCompletePanel.propTypes = {};

PasswordResetCompletePanel.defaultProps = {};

export default compose(
    withStyles(styles)
)(PasswordResetCompletePanel);