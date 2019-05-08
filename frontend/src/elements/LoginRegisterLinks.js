import React, {Component} from "react";
import withStyles from "react-jss";
import {compose} from "redux";
import NavLink from "react-router-dom/es/NavLink";

const styles = {
    login: {
        color: '#ccc',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff',
            textDecoration: 'none'
        },
        marginRight: '5px',
        marginLeft: '5px'
    },
    register: {
        color: '#ccc',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff',
            textDecoration: 'none'
        }
    }
};

class LoginRegisterLinks extends Component {
    render() {
        return (
            <React.Fragment>
                <NavLink to={'/accounts/login/'} className={this.props.classes.login}>Login</NavLink>
                <NavLink to={'/accounts/login/'} className={this.props.classes.register}>Register</NavLink>
            </React.Fragment>
        );
    }
}

LoginRegisterLinks.propTypes = {};

LoginRegisterLinks.defaultProps = {};

export default compose(
    withStyles(styles)
)(LoginRegisterLinks);