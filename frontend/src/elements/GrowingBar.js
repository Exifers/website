import React, {Component} from "react";
import classNames from "classnames";
import withStyles from "react-jss";

const styles = {
    growingBar: {
        height: '15px',
        transition: 'all 1.4s',
        transitionTimingFunction: 'ease'
    },
    redBar: {
        backgroundColor: '#ff392b',
        width: '10px'
    },
    greenBar: {
        backgroundColor: '#1dcf44',
        width: '300px'
    }
};

class GrowingBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            expanded: true
        }), 0);
    }

    render() {
        return (
            <span
                className={classNames(
                    "m-1",
                    this.props.classes.growingBar,
                    this.state.expanded ? this.props.classes.greenBar : this.props.classes.redBar
                )}/>
        );
    }
}

export default withStyles(styles)(GrowingBar);