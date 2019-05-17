// const urljoin = require("url-join")
// const configs = require("./site-config")

module.exports = {
  // pathPrefix: "/GetEpona-site",
  pathPrefix: "/",
  siteMetadata: {
    title: "Kilton",
    author: "Epona",
    description: "Kilton-Generic Attribution Network for immutable links",
    siteUrl: 'https://getepona.github.io/Kilton/', 
   
   // site-config.js version
    //siteUrl: urljoin(configs.app_url, configs.path_prefix),
    //title: configs.app_name,
    //description: configs.app_description,
    //author: configs.twitter_username,
  
  },
  plugins: [
    'gatsby-plugin-react-helmet',
  // from automatic app landing
      //`gatsby-transformer-sharp`,
     // `gatsby-plugin-sharp`,
    //'gatsby-plugin-sitemap',
   
    // from automatic app landing
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'gatsby-starter-default',
    //     short_name: 'starter',
    //     start_url: '/',
    //     background_color: '#663399',
    //     theme_color: '#663399',
    //     display: 'minimal-ui',
    //     icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
    //   },
    // },
    
    // from automatic app landing
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: configs.google_analytics_ID
    //   }
    // },

//`gatsby-plugin-styled-components`,
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
