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
        transition: 'all 1s',
        height: '10px',
        marginRight: '10px'
    },
    inputOpened: {},
    inputClosed: {
        display: 'none'
    }
};

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            width: 0
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
        for (let i = 0; i <= 100; i++) {
            setTimeout(() => (
                this.setState({
                    width: i
                })
            ), 10 * i);
        }
    }

    close() {
        for (let i = 0; i <= 100; i++) {
            setTimeout(() => (
                this.setState({
                    width: 100 - i
                })
            ), 10 * i);
        }
    }

    render() {
        return (
            <React.Fragment>
                <input type={'text'} style={{width: this.state.width}} className={
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