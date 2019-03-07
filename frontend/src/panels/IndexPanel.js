import React, {Component} from "react";
import {LargeLink} from "../elements/buttons";
import withStyles from "react-jss";
import classNames from "classnames";

const styles = {
    video: {
        margin: "3rem auto 3rem auto !important"
    },
    tryButton: {
        margin: "2rem auto 2rem auto",
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
};

class IndexPanel extends Component {
    render() {
        return (
            <div className={this.props.classes.wrapper}>
                <iframe className={classNames("m-5", this.props.classes.video)} width="560" height="315"
                        src="https://www.youtube.com/embed/6yNYVJUmPN8"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                <LargeLink className={this.props.classes.tryButton} to={'/showcase/download'}>
                    TRY OUT NOW !
                </LargeLink>
                <div
                    className="container mx-auto mt-5 cards">
                    <div
                        className="row">
                        <div
                            className="col">
                            < div
                                className="card mx-auto my-4"
                                style={{width: '18rem'}}>
                                < div
                                    className="card-body">
                                    < h5
                                        className="card-title"> Virtual
                                        Reality </h5>
                                    <p className="card-text">You play the game in an immersive environment</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mx-auto my-4" style={{width: '18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title">Five different stories</h5>
                                    <p className="card-text">Explore cybersecurity issues through multiple
                                        situations</p>
                                </div>
                            </div>
                        </div>
                        < div
                            className="w-100">
                        </div>
                        <div className="col">
                            <div className="card mx-auto my-4" style={{width: '18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title">Leaderboard</h5>
                                    <p className="card-text">Compare your scores with your
                                        colleagues</p>
                                </div>
                            </div>
                        </div>
                        < div
                            className="col">
                            < div
                                className="card mx-auto my-4"
                                style={{width: '18rem'}}>
                                < div
                                    className="card-body">
                                    < h5
                                        className="card-title"> Made
                                        for companies </h5>
                                    <p className="card-text">Specially adapted for companies and
                                        training courses
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(IndexPanel);