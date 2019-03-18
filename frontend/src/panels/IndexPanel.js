import React, {Component} from "react";
import {LargeLink} from "../elements/buttons";
import withStyles from "react-jss";
import classNames from "classnames";
import vr from "../resources/images/vr.png";
import FeatureCard from "../components/FeatureCard";
import PresentationPane from "../panes/PresentationPane";
import training from "../resources/images/training.png";
import PitchTitle from "../elements/PitchTitle";

const styles = {
    video: {
        margin: "3rem auto 3rem auto !important",
        boxShadow: "10px 5px 10px #aaa"
    },
    tryButton: {
        margin: "2rem auto 2rem auto",
        fontWeight: "bold",
        fontSize: "20px",
        color: "#f2f2f2"
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    title: {
        textShadow: "2px 2px 3px #ccc"
    }
};

class IndexPanel extends Component {
    render() {
        return (
            <div className={this.props.classes.wrapper}>
                <PitchTitle className={classNames("mx-auto", this.props.classes.title)}>A VR serious game
                    about cybersecurity</PitchTitle>
                <p className={"mx-auto"}>Check our presentation video</p>
                <iframe className={classNames("m-5", this.props.classes.video)} width="560" height="315"
                        src="https://www.youtube.com/embed/6yNYVJUmPN8"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                <LargeLink className={this.props.classes.tryButton} to={'/showcase/download'}>
                    TRY OUT NOW !
                </LargeLink>

                <PresentationPane
                    grey={true}
                    title={'Discover virtual reality'}
                >
                    <img
                        src={vr}
                        alt={'A man with a virtual reality headset'}
                    />
                </PresentationPane>

                <PresentationPane
                    grey={false}
                    title={'Train your employees'}
                >
                    <img
                        src={training}
                        alt={'A man teaching something to a group of people'}
                    />
                </PresentationPane>

                <div
                    className="container mx-auto mt-5 cards">
                    <div
                        className="row">
                        <FeatureCard
                            title={'Virtual Reality'}
                            description={'You play the game in an immersing environment'}/>
                        <FeatureCard
                            title={'Five different stories'}
                            description={'Explore cybersecurity issues through multiple situations'}/>
                        <div
                            className="w-100">
                        </div>
                        <FeatureCard
                            title={'Leaderboard'}
                            description={'Compare your scores with your colleagues'}/>
                        <FeatureCard
                            title={'Made for companies'}
                            description={'Specially adapted for companies and training courses'}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(IndexPanel);