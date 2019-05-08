import React, {Component} from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import {compose} from "redux";

const styles = {
    wrapper: {
        textAlign: 'center',
        paddingTop: '50px'
    }
};

class PasswordChangeDonePanel extends Component {
    render() {
        return (
            <div className={this.props.classes.wrapper}>Password change done !</div>
        );
    }
}

PasswordChangeDonePanel.propTypes = {};

PasswordChangeDonePanel.defaultProps = {};

export default compose(
    withStyles(styles)
)(PasswordChangeDonePanel);