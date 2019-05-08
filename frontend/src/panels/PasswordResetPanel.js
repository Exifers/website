import React, {Component} from "react";
import withStyles from "react-jss";
import {compose} from "redux";

const styles = {
    wrapper: {
        margin: 'auto auto',
        padding: '15px',
        maxWidth: '400px'
    }
};

class PasswordResetPanel extends Component {
    render() {
        return (
            <div className={this.props.classes.wrapper}>
                {form_errors ? <p dangerouslySetInnerHTML={{__html: form_errors}}/> : null}
                <form className={this.props.classes.form} method={'POST'}>
                    <input type={'hidden'} value={csrf_token} name={'csrfmiddlewaretoken'}/>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email</label>
                        <input type="email" className="form-control" id="emailInput"
                               placeholder="Username" autoFocus name={'email'}/>
                    </div>
                    <button type="submit" className="btn btn-dark">Reset password</button>
                </form>
            </div>
        );
    }
}

PasswordResetPanel.propTypes = {};

PasswordResetPanel.defaultProps = {};

export default compose(
    withStyles(styles)
)(PasswordResetPanel);