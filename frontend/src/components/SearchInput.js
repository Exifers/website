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
        transition: 'width 0.8s',
        height: '10px',
        marginRight: '10px',
        backgroundColor: '#333',
        color: '#eee',
        height: '25px',
        borderRadius: '3px',
        overflow: 'hidden',
        marginTop: '2px'
    },
    inputOpened: {
        width: '100px'
    },
    inputClosed: {
        width: '0px'
    },
    inputDiv: {
        outline: '0',
        height: '21px',
        width: '90px'
    },
    popup: {
        width: '70px',
        color: 'white',
        backgroundColor: ' black',
        border: '3px solid white',
        borderRadius: '5px',
        position: 'absolute',
    }
};

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.removePopup = this.removePopup.bind(this);
        this.close = this.close.bind(this);

        this.inputRef = React.createRef();
        this.inputDivRef = React.createRef();
        this.lensRef = React.createRef();
    }

    handleClick(event) {
        if (this.state.opened) {
            this.close(event);
        } else {
            this.setState({opened: true});
            this.inputDivRef.current.focus();
        }
    }

    handleChange(event) {
        const value = this.inputDivRef.current.textContent;
        if (event.which === 13) {
            if (this.props.onSubmit) {
                this.props.onSubmit({target: {value}});
            }
            this.onSubmit({target: {value}});
            event.preventDefault();
            return false;
        } else {
            if (this.props.onChange) {
                this.props.onChange({target: {value}});
            }
            this.onChange({target: {value}});
        }
    }

    onSubmit() {
    }

    onChange(event) {
        if (document.querySelector('#' + this.props.popupId)) {
            return;
        }
        let searchBoxRect = this.lensRef.current.getBoundingClientRect();
        let popup = document.createElement('div');
        popup.setAttribute('class', this.props.classes.popup);
        popup.setAttribute('id', this.props.popupId);
        let top = searchBoxRect.y + searchBoxRect.height + 2;
        let right = searchBoxRect.x + searchBoxRect.width;
        popup.style.top = top + 'px';
        popup.style.right = right + 'px';
        document.getElementById('root').appendChild(popup);
    }

    removePopup() {
        const popup = document.querySelector('#' + this.props.popupId);
        if (popup) {
            popup.parentNode.removeChild(popup);
        }
    }

    close(event) {
        this.setState({opened: false});
        this.inputDivRef.current.innerHTML = '';
        this.removePopup();
    }

    render() {
        return (
            <React.Fragment>
                <div ref={this.inputRef} className={
                    classNames(
                        this.props.classes.input,
                        this.state.opened ? this.props.classes.inputOpened : this.props.classes.inputClosed,
                        this.props.inputClassName
                    )
                }>
                    <div contentEditable ref={this.inputDivRef} className={this.props.classes.inputDiv}
                         onKeyPress={this.handleChange} onBlur={this.close}/>
                </div>
                <i className={classNames("fas fa-search", this.props.classes.search, this.props.className)}
                   onClick={this.handleClick} ref={this.lensRef}/>
            </React.Fragment>
        );
    }
}

SearchInput.propTypes = {};

SearchInput.defaultProps = {
    inputClassName: '',
    onSubmit: console.log,
    popupId: 'searchPopup'
};

export default compose(
    withStyles(styles)
)(SearchInput);