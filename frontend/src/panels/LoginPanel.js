import React, {Component} from "react";
import withStyles from "react-jss";
import {compose} from "redux";
import NavLink from "react-router-dom/es/NavLink";

const styles = {
    wrapper: {
        margin: 'auto auto',
        padding: '15px',
        maxWidth: '400px'
    }
};

class LoginPanel extends Component {
    render() {
        return (
            <div className={this.props.classes.wrapper}>
                {form_errors ? <p dangerouslySetInnerHTML={{__html:form_errors}}/> : null}
                <form className={this.props.classes.form} method={'POST'}>
                    <input type={'hidden'} value={csrf_token} name={'csrfmiddlewaretoken'}/>
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input type="text" className="form-control" id="usernameInput"
                               placeholder="Username" autoFocus name={'username'}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput"
                               placeholder="Password" name={'password'}/>
                    </div>
                    <button type="submit" className="btn btn-dark">Login</button>
                </form>
                <NavLink to={'/accounts/password_reset/'}>Lost password ?</NavLink>
            </div>
        );
    }
}

LoginPanel.propTypes = {};

LoginPanel.defaultProps = {};

export default compose(
    withStyles(styles)
)(LoginPanel);