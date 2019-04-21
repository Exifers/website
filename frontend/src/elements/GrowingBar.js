import React, {Component} from "react";
import classNames from "classnames";
import withStyles from "react-jss";
import {lerpColor, lerpColor3} from "../utils/color";

const styles = {
    growingBar: {
        height: '14px',
        borderRadius: '7px'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row'
    }
};

class GrowingBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0
        };

        this.finalWidth = this.props.value;
        this.maxScore = 100;
    }

    componentDidMount() {
        let count = 0;
        const intervalId = setInterval(() => {
            if (this.state.width < this.finalWidth) {
                this.setState(state => ({
                    width: state.width + 1
                }));
            }
            if (count++ >= this.finalWidth) {
                window.clearInterval(intervalId)
            }
        }, 1);
    }

    render() {
        const color = lerpColor3('#ff2a2a', '#ffaa00', '#69d453', this.state.width / 100);
        return (
            <div className={classNames(this.props.classes.wrapper, this.props.className)}>
                <div
                    className={classNames(
                        "m-1",
                        this.props.classes.growingBar
                    )}
                    style={{
                        width: this.state.width,
                        backgroundColor: color
                    }}
                />
                <div
                    style={{
                        color: color,
                        fontWeight: 'bold'
                    }}
                    >{this.state.width} %
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(GrowingBar);
