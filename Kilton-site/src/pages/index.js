import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import screenshot from '../assets/images/screenshot.png'
import ftp from '../assets/images/ftp.png'
import ipfslogo from '../assets/images/ipfs-logo.png'
import textilelogo from '../assets/images/textile-logo.png'

import SEO from '../components/seo'


//import "@fortawesome/fontawesome-free/css/all.min.css"

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Kilton" />
        

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />
        <div id="main">
          <section id="intro" className="main special">
            <header>
              {/* <header className="major"> */}
              <h1>Summary of Kilton</h1>
              <div className="screenshot">
                <img
                  src={screenshot}
                  alt="Product Screenshot"
                  width="75%"
                  height="75%"
                />
                <p>
                  High level overview of Kilton. Blah Blah. Kilton is an attribution network of immutable links.
                </p>
              </div>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Download</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          {/* <section id="intro" className="main special">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Writing Made Modern</h2>
                </header>
                <p>Epona is a modern writing tool for effective and privacy conscious people. It is censorship resistent and offers productivity shortcuts.</p>
                  <ul className="actions">
                    <li><Link to="/generic" className="button">Learn More</Link></li>
                  </ul>
              </div>
                <div align="right">
                 <img src={screenshot} alt="Epona Screenshot" width="75%" height="75%"/>
                </div>
            </div>
          </section>  */}

          {/* Fast and Productive */}
          <section id="first" className="main special">
            {/* <header className="major"> */}
            <header>
              <h1>first Point</h1>
            </header>

            <div class="row">
              <div class="column">
                <h3>
                 Blah Blah
                </h3>
              </div>
              <div class="column">
                <img
                  src={screenshot}
                  alt="product Screenshot"
                  width="75%"
                  height="75%"
                />
              </div>
            </div>

            <footer className="major">
              <ul className="actions">
                {/* <li><Link to="/generic" className="button special">Download</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li> */}
              </ul>
            </footer>
          </section>

          {/* Resilient */}
          <section id="second" className="main special">
            {/* <header className="major"> */}
            <header>
              <h1>Second Point</h1>
            </header>

            <div align="left">
              <h2>
                BLAH BLAH
              </h2>
              <h2>
                bleh
              
              </h2>
              <h2>
                Bleh bleh
              </h2>
            </div>
            <footer className="major">
              <ul className="actions">
                {/* <li><Link to="/generic" className="button special">Download</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li> */}
              </ul>
            </footer>
          </section>

          {/* <section id="third" className="main special">
            <header className="major">
              <h2>Bleeding Edge</h2>
              <p>Epona combines the latest technologies in decentralized tech and encryption <br />
              We make it easy to deploy.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span><img src={rabbit} alt="Productive" width= "64" height="64"/></span>
               <span className="icon fa-code-fork"></span>
                <strong>5,120</strong>
                <br/>
                Productive
              </li>
              <li className="style2">
                <span><img src={markdown} alt="Markdown" width= "64" height="64"/></span>
                <span className="icon fa-folder-open-o"></span>
               <strong>8,192</strong>
                <br/>
                Markdown
              </li>
              <li className="style3">
                <span><img src={liberty} alt="Liberty" width= "64" height="64"/></span>
              <span className="icon fa-signal"></span>
                <strong>2,048</strong>
                <br/>
                Resilient
              </li>
              <li className="style4">
                <span><img src={ftp} alt="Self Hosted" width= "64" height="64"/></span>
                <span className="icon fa-laptop"></span>
                 <strong>4,096</strong>
                <br/>
                Self-Hosted
              </li>
              <li className="style5">
                <span><img src={opensource} alt="Open Sourced" width= "64" height="64"/></span>
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong>
                <br/>
                Open-Source
              </li>
            </ul>
            <p className="content">Not just another writing app
Notes, documents, articles under one roof
Super productive: markdown, shortcuts
What you write on Epona stays on Epona.
We do not have a cloud. Instead, we run on ecnrypted nodes powered by our users.
Want to host your own node like it’s nobody’s business? You can.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>  */}

          <section id="cta" className="main special">
            <header>
              {/* <header className="major"> */}
              <h1>Final Point</h1>
            </header>
            <ul className="features">
              <li>
                <span>
                  <img src={ftp} alt="Self-Hosted" width="90px" height="90px" />
                </span>
                {/* <span className="icon major style5 fa-diamond"></span> */}
                <h3>Example 1</h3>
                <p>
                  Blah
                </p>
              </li>
              <li>
                <span>
                  <img src={ipfslogo} alt="IPFS" width="225px" height="90px" />
                </span>
                {/* <span className="icon major style1 fa-copy"></span> */}
                <h3>Example 2</h3>
                <p>
                  Some text
                </p>
              </li>
              <li>
                <span>
                  <img src={textilelogo} alt="Textile" width="90px" height="90px" />
                </span>
                {/* <span className="icon major style3 fa-copy"></span> */}
                <h3>Example 3</h3>
                <p>More text</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                {/* <li><Link to="/generic" className="button special">Download</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li> */}
              </ul>
            </footer>
          </section>
          {/* <section id="cta" className="main special">
            <header className="major">
              <h2>Start Writing Now</h2>
              <p>Use the best writing tool.<br />
              Distributed tech is here. Start writing like it.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section> */}
        </div>
      </Layout>
    )
  }
}

export default Index

// ------------------------------------------------------------------------------
// relative path now src -> assets -> images
// was previously src -> images

// export const query = graphql`
//   query {
//     headerIcon: file(relativePath: { eq: "icon.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 50) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     appStore: file(relativePath: { eq: "appstore.png" }) {
//       childImageSharp {
//         fixed(width: 220) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     playStore: file(relativePath: { eq: "playstore.png" }) {
//       childImageSharp {
//         fixed(height: 75) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     iphoneScreen: file(relativePath: { glob: "screenshot/*.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 350) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     videoScreen: file(
//       extension: { ne: "txt" }
//       relativePath: { glob: "videos/*" }
//     ) {
//       publicURL
//       extension
//     }
//     appIconLarge: file(relativePath: { eq: "icon.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 120) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     headerImage: file(relativePath: { eq: "headerimage.png" }) {
//       childImageSharp {
//         fluid(maxHeight: 714) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     iphonePreviewBlack: file(relativePath: { eq: "black.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     iphonePreviewBlue: file(relativePath: { eq: "blue.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     iphonePreviewCoral: file(relativePath: { eq: "coral.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     iphonePreviewWhite: file(relativePath: { eq: "white.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     iphonePreviewYellow: file(relativePath: { eq: "yellow.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `