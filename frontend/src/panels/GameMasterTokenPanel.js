import React, {Component} from "react";
import withStyles from "react-jss";
import {compose} from "redux";

const styles = {
    wrapper: {
        margin: 'auto auto',
        padding: '15px',
        maxWidth: '400px'
    }
};

class GameMasterTokenPanel extends Component {
    render() {
        return (
            <div className={this.props.classes.wrapper}>
                <form className={this.props.classes.form}>
                    <div className="form-group">
                        <label htmlFor="tokenInput">Game token</label>
                        <input type="text" className="form-control" id="tokenInput"
                               placeholder="Game token" autoFocus name={'game_token'}/>
                    </div>
                    <button type="button" className="btn btn-dark">Validate</button>
                </form>
            </div>
        );
    }
}

GameMasterTokenPanel.propTypes = {};

GameMasterTokenPanel.defaultProps = {};

export default compose(
    withStyles(styles)
)(GameMasterTokenPanel);