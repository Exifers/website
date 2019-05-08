import React, {Component} from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import {compose} from "redux";

const styles = {
    glyphicon: {
        fontSize: '25px',
        color: '#17a3f2',
        transition: 'all 0.3s',
        '&:hover': {
            textDecoration: 'none',
            color: '#17a8f9'
        }
    }
};

class TwitterLink extends Component {
    render() {
        return (
            <a target="_blank" rel="noopener noreferrer"
               className={classNames("fab fa-twitter", this.props.classes.glyphicon, this.props.className)}
               href={this.props.to}/>
        );
    }
}

TwitterLink.propTypes = {};

TwitterLink.defaultProps = {};

export default compose(
    withStyles(styles)
)(TwitterLink);