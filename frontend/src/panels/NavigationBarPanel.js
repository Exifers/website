import React, {Component} from "react";
import {compose} from "redux";
import withStyles from "react-jss";

const styles = {
    navigationBarPanel: {
        backgroundColor: "#ddd",
        width: "250px",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    navigationLink: {
        height: "80px",
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.2s",
        "&:hover": {
            backgroundColor: "#6899dd"
        }
    }
};

class NavigationBarPanel extends Component {
    render() {
        return (
            <div className={this.props.classes.navigationBarPanel}>
                <div className={this.props.classes.navigationLink}>
                    Home
                </div>
                <div className={this.props.classes.navigationLink}>
                    Download
                </div>
                <div className={this.props.classes.navigationLink}>
                    Documentation
                </div>
                <div className={this.props.classes.navigationLink}>
                    Articles
                </div>
                <div className={this.props.classes.navigationLink}>
                    Leaderboard
                </div>
            </div>
        );
    }
}

export default compose(
    withStyles(styles)
)
(NavigationBarPanel);