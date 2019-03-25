import React, {Component} from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import {compose} from "redux";
import ArticleHeader from "../components/ArticleHeader";
import ArticleInfo from "../components/ArticleInfo";
import ArticleWarning from "../components/ArticleWarning";
import ArticleSection from "../components/ArticleSection";

const styles = {
    adsPanel: {
        padding: "30px 30px"
    }
};

class AdsPanel extends Component {
    render() {
        return (
            <div className={this.props.classes.adsPanel}>
                <ArticleHeader>Ads & Popups</ArticleHeader>
                <ArticleSection>Ads</ArticleSection>
                <ArticleInfo>Popups are windows that pop out</ArticleInfo>
                <ArticleWarning>Popups are dangerous !</ArticleWarning>
                <ArticleSection>Popups</ArticleSection>
            </div>
        );
    }
}

AdsPanel.propTypes = {};

AdsPanel.defaultProps = {};

export default compose(
    withStyles(styles)
)(AdsPanel);