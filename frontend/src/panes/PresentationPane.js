import React, {Component} from "react";
import classNames from "classnames";
import withStyles from "react-jss";
import PitchTitle from "../elements/PitchTitle";
import "../resources/css/main.css";

const styles = {
    image: {
        width: "auto"
    },
    greyBackground: {
        backgroundColor: "#f2f2f2"
    }
};

class PresentationPane extends Component {
    render() {
        return (
            <div className={
                classNames(
                    "w-100 pt-3 text-center",
                    this.props.grey && this.props.classes.greyBackground,
                    "cyberBackgroundLight"
                )}>
                <div className={"mx-auto mt-3 text-center"}>
                    <PitchTitle>{this.props.title}</PitchTitle>
                    <img src={this.props.image} alt={this.props.alt}
                         className={this.props.classes.image}/>
                </div>
            </div>
        );
    }
}

PresentationPane.defaultProps = {
    grey: false
};

export default withStyles(styles)(PresentationPane);