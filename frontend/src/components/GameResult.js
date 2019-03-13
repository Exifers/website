import React, {Component} from "react";
import classNames from "classnames";
import withStyles from "react-jss";
import GrowingBar from "../elements/GrowingBar";

const styles = {
    gameResult: {
        display: 'flex',
        flexDirection: 'column'
    }
};

class GameResult extends Component {
    render() {
        return (
            <div className={classNames("m-2", this.props.classes.gameResult)}>
                {
                    this.props.results.map((result, index) => (
                            <GrowingBar value={result} key={index}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default withStyles(styles)(GameResult);