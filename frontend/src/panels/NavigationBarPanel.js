import React, {Component} from "react";
import {compose} from "redux";
import withStyles from "react-jss";
import NavigationBarLink from "../components/NavigationBarLink";
import NavigationBarSubLink from "../components/NavigationBarSubLink";
import NavigationBarSubLinkGroup from "../components/NavigationBarSubLinkGroup";

const styles = {
    navigationBarPanel: {
        backgroundColor: "#b4c7e7",
        width: "200px",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    separator: {
        backgroundColor: "#a5b5d2",
        height: "1px",
        margin: "0px auto 0px auto",
        width: "100%"
    }
};

class NavigationBarPanel extends Component {
    render() {
        return (
            <div className={this.props.classes.navigationBarPanel}>

                <NavigationBarLink to={'/showcase/'}>Home</NavigationBarLink>
                <span className={this.props.classes.separator}/>
                <NavigationBarLink to={'/showcase/download'}>Download</NavigationBarLink>
                <span className={this.props.classes.separator}/>
                <NavigationBarLink to={'/showcase/documentation'}>Documentation</NavigationBarLink>
                <span className={this.props.classes.separator}/>
                <NavigationBarLink
                    to={'/showcase/'}
                    subLinks={(isHovered, onSubLinkPointerEnter, onSubLinkPointerLeave) => (
                        <NavigationBarSubLinkGroup
                            shouldExtend={isHovered}
                            onPointerEnter={onSubLinkPointerEnter}
                            onPointerLeave={onSubLinkPointerLeave}>
                            <NavigationBarSubLink to={'/showcase/articles/ads'}>
                                Ads & Popups
                            </NavigationBarSubLink>
                            <NavigationBarSubLink
                                to={'/showcase/articles/password'}>
                                Passwords
                            </NavigationBarSubLink>
                            <NavigationBarSubLink
                                to={'/showcase/articles/virus'}>
                                Virus
                            </NavigationBarSubLink>
                            <NavigationBarSubLink
                                to={'/showcase/articles/wifi'}>
                                Wifi
                            </NavigationBarSubLink>
                        </NavigationBarSubLinkGroup>
                    )}>
                    Articles
                </NavigationBarLink>
                <span className={this.props.classes.separator}/>
                <NavigationBarLink to={'/showcase/leaderboard'}>Leaderboard</NavigationBarLink>
                <span className={this.props.classes.separator}/>
            </div>
        );
    }
}

export default compose(
    withStyles(styles)
)
(NavigationBarPanel);