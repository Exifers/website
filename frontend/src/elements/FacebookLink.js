import React, {Component} from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import {compose} from "redux";

const styles = {
    glyphicon: {
        fontSize: '25px',
        color: '#3b5998',
        transition: 'all 0.3s',
        '&:hover': {
            textDecoration: 'none',
            color: '#4263a9'
        }
    }
};

class FacebookLink extends Component {
    render() {
        return (
            <a className={classNames("fab fa-facebook", this.props.classes.glyphicon, this.props.className)}
               href={this.props.to}/>
        );
    }
}

FacebookLink.propTypes = {};

FacebookLink.defaultProps = {};

export default compose(
    withStyles(styles)
)(FacebookLink);