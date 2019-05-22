import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import ArticleHeader from '../components/ArticleHeader'
import ArticleSection from '../components/ArticleSection'
import lastpass from '../resources/images/lastpass.png'

const styles = {
  lastpass: {
    marginTop: '3rem',
    width: '50%',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%,0%)'
  },
  passwordPanel: {
    width: '60%',
    minWidth: '900px',
    margin: 'auto auto',
    '& p': {
      fontFamily: 'sans-serif'
    }
  }
}

class PasswordPanel extends Component {
  render () {
    return (
      <div className={this.props.classes.passwordPanel}>
        <ArticleHeader>Mots de passe</ArticleHeader>
        <ArticleSection>Compléxité des mots de passe</ArticleSection>
        <p>Un mot de passe pour être sûr doit être suffisamment complexe. Pour cela, on considère souvent qu'il
          doit prendre au moins trois classes de caractères. Une classe de caractères peut être par exemple :
        </p>
        <ul>
          <li>les lettres minuscules</li>
          <li>les lettres majuscules</li>
          <li>les nombres</li>
          <li>les caractères de ponctuation</li>
          <li>les caractères spéciaux</li>
        </ul>
        <p>Ainsi par exemple, le mot de passe : "lulu12" est typiquement insuffisant car il ne possède que deux
          classes de caractères, tandis que le mot de passe "lulu12C" est suffisamment bon.</p>
        <p>La longueur idéale d'un mot de passe est d'au moins huit caractères.</p>
        <ArticleSection>Sécurité des mots de passe</ArticleSection>
        <p>Il peut y avoir différents risques qui peut amnener un mot de passe à se faire voler. Pour minimiser
          ces risques, il convient de prendre des mots de passes complexes et différents pour chaque
          compte.</p>
        <p>On peut par exemple utiliser un générateur de mots de passes comme celui-ci : <a
          href={'https://www.motdepasse.xyz/'}>générateur de mots de passe</a>.</p>
        <p>On peut aussi utiliser un site internet qui stocke tous vos mots de passes et qui vous permet de
          ne plus avoir à les retaper pour chaque compte sur le web, comme
        <a href="https://www.lastpass.com/fr">LastPass</a>.</p>
        <img src={lastpass} alt={'lastpass logo'} className={this.props.classes.lastpass}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}

PasswordPanel.propTypes = {}

PasswordPanel.defaultProps = {}

export default compose(
  withStyles(styles)
)(PasswordPanel)
