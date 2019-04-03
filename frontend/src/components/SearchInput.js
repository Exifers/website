import React, {Component} from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import {compose} from "redux";

const styles = {
    search: {
        color: "#ccc",
        cursor: "pointer",
        "&:hover": {
            color: "#fff"
        },
        fontSize: "20px"
    },
    input: {
        transition: 'all 1s'
    },
    inputOpened: {
        width: 'auto'
    },
    inputClosed: {
        width: '0px',
        display: 'none'
    }
};

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    handleClick(event) {
        if (this.state.opened) {
            this.setState({opened: false});
            this.close();
        } else {
            this.setState({opened: true});
            this.open();
        }
    }

    open() {

    }

    close() {

    }

    render() {
        return (
            <React.Fragment>
                <input type={'text'} className={
                    classNames(
                        this.props.classes.input,
                        this.state.opened ? this.props.classes.inputOpened : this.props.classes.inputClosed,
                        this.props.inputClassName
                    )
                }/>
                <i className={classNames("fas fa-search", this.props.classes.search, this.props.className)}
                   onClick={this.handleClick}/>
            </React.Fragment>
        );
    }
}

SearchInput.propTypes = {};

SearchInput.defaultProps = {
    inputClassName: ''
};

export default compose(
    withStyles(styles)
)(SearchInput);