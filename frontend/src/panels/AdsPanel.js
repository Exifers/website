import React, {Component} from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import {compose} from "redux";
import ArticleHeader from "../components/ArticleHeader";
import ArticleInfo from "../components/ArticleInfo";
import ArticleWarning from "../components/ArticleWarning";
import ArticleSection from "../components/ArticleSection";
import yahoo from '../resources/images/yahoo.png';
import adblock from '../resources/images/adblock.png';

const styles = {
    adsPanel: {
        width: '60%',
        minWidth: '900px',
        margin: 'auto auto',
        '& p': {
            fontFamily: 'sans-serif'
        }
    },
    yahoo: {
        width: '60%',
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%,0%)'
    },
    adblock: {
        width: '30%',
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%,0%)',
        marginBottom: '4rem',
        marginTop: '2rem'
    },
    popupButton: {
        color: '#eee',
        backgroundColor: '#444',
        borderRadius: '5px',
        padding: '5px',
        textAlign: 'center',
        cursor: 'pointer',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#222',
            color: 'white'
        },
        margin: '2rem auto 2rem auto',
        width: '100px'
    }
};

class AdsPanel extends Component {
    constructor(props) {
        super(props);

        this.openPopup = this.openPopup.bind(this);
    }

    openPopup() {
        alert('Ceci est également une popup !')
    }

    render() {
        return (
            <div className={this.props.classes.adsPanel}>
                <ArticleHeader>Ads & Popups</ArticleHeader>
                <ArticleSection>Ads</ArticleSection>
                <p>Ad signifie publicité en Anglais. Les publicités remplissent les pages web pour mettre à des
                    annonceurs de faire connaître leurs produits et aux gérants du site web de gagner de l'argent.</p>
                <p>Les gérants d'un site gagnent de l'argent lorsqu'un utilisateur clique sur une publicité. De ce fait,
                    beaucoup de sites internet essayent de maximiser le nombre de clics en mettant des publicités à des
                    endroits malicieux. On peut alors cliquer sur des publicités sans s'en rendre compte et cela peut
                    rendre
                    la navigation sur internet compliquée.</p>
                <p>Regardez par exemple la page du moteur de recherche de yahoo.com qui est remplie de publicités :</p>
                <img src={yahoo} alt={'page d\'accueil de yahoo'} className={this.props.classes.yahoo}/>
                <ArticleSection>Popups</ArticleSection>
                <p>Les popups sont le nom donné aux fenêtres qui s'ouvrent spontannement par dessus la fenêtre
                    principale du navigateur. Elles sont souvent source de perturbation de la navigation sur
                    internet.</p>
                <p>Il peut s'agir aussi de petites fenêtres inclues dans le navigateur, comme celle que vous verrez
                    apparaître si vous cliquez sur ce boutton en dessous:</p>
                <div onClick={this.openPopup} className={this.props.classes.popupButton}>Cliquez ici !</div>
                <ArticleWarning>Parfois, les popups peuvent vous empêcher de sortir d'un site web !</ArticleWarning>
                <ArticleHeader>Les solutions</ArticleHeader>
                <ArticleSection>Les ad blockers</ArticleSection>
                <p>Les ad blockers sont des extensions que l'on installe sur les navigateurs qui vont s'occuper de
                    retirer
                    les publicités sur tous les sites web. Ils sont très efficaces.</p>
                <p>L'ad blocker le plus connu s'appelle ad block. Il en existe d'autres. Il existe aussi une version
                    étendu de ad block : ad block plus, qui permet d'avoir différentes fonctionnalités
                    supplémentaires.</p>
                <img src={adblock} alt={'logo adblock plus'} className={this.props.classes.adblock}/>
                <p>Lien vers le site d'adblock plus: <a
                    href={'https://adblockplus.org/fr/'}>https://adblockplus.org/fr/</a></p>
                <ArticleInfo>Avec ad block plus, si une publicité n'est pas bloquée, vous pouvez la retirer vous même en
                    faisant un click droit sur cette publicité, et en choisissant : "bloquer cette
                    publicité"</ArticleInfo>
                <ArticleSection>Les bloqueurs de popup</ArticleSection>
                <p>La plupart des navigateurs sont déjà équipés d'un bloqueur de popups. Lorsqu'une popup est bloquée,
                    généralement, une barre jaune apparaît en haut de votre navigateur. Vous pouvez alors ouvrir la
                    popup si bon vous semble en faisant un clic droit sur cette barre jaune.</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

AdsPanel.propTypes = {};

AdsPanel.defaultProps = {};

export default compose(
    withStyles(styles)
)(AdsPanel);