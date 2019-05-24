import React, { Component } from 'react'
import withStyles from 'react-jss'
import { compose } from 'redux'
import ArticleSection from '../components/ArticleSection'
import ArticleHeader from '../components/ArticleHeader'
import avast from '../resources/images/avast.png'
import ArticleInfo from '../components/ArticleInfo'

const styles = {
  virusPanel: {
    width: '60%',
    minWidth: '900px',
    margin: 'auto auto',
    '& p': {
      fontFamily: 'sans-serif'
    }
  },
  avast: {
    marginTop: '3rem',
    width: '50%',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%,0%)'
  }
}

class VirusPane extends Component {
  render () {
    return (
      <div className={this.props.classes.virusPanel}>
        <ArticleHeader>Virus</ArticleHeader>
        <ArticleSection>Types de virus</ArticleSection>
        <p>Un virus informatique est un automate autoréplicatif à la base non malveillant, mais aujourd'hui
          souvent additionné de code malveillant, conçu pour se propager à d'autres ordinateurs en s'insérant
          dans des logiciels légitimes, appelés « hôtes ».
        </p>
        <p>Pour arriver sur un ordinateur, un virus aura besoin d'avoir été porté par un hôte : clé USB, mail,
          logiciel.</p>
        <p>Le plus souvent, la source d'un virus provient d'un logiciel malveillant que l'on a installé sans
          faire attention à la provenance du logiciel. Un virus est généralement inaperçu, et ainsi peut
          retirer
          des informations de votre ordinateur ou perturber son fonctionnement sans que cela ne s'en
          aperçoive.</p>
        <ArticleSection>Comment se protéger contre les virus ?</ArticleSection>
        <p>La première protection contre les virus est un antivirus. Il s'agit d'un logiciel qui connait déjà
          un très grand nombre de virus existants et qui va alors comparer tout ce qui se trouve sur votre
          ordinateur
          aux virus qu'il connait déjà. Il va généralement aussi détecter des virus directement dans les
          fichiers téléchargés
          avant que vous ne les installiez ou directement sur des sites internet.</p>
        <p>Il existe plusieurs antivirus, l'antivirus gratuit le plus connu est <a
          href={'https://www.avast.com/fr-fr/index#pc'}>Avast</a>.</p>
        <img src={avast} alt={'avast logo'} className={this.props.classes.avast}/>
        <ArticleInfo>Notez qu'il n'y a pas de virus en principe sur Linux ou Mac, mais uniquement sur
          Windows !</ArticleInfo>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}

VirusPane.propTypes = {}

VirusPane.defaultProps = {}

export default compose(
  withStyles(styles)
)(VirusPane)
