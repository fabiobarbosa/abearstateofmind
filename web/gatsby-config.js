const path = require('path')

// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: '@import "_variables.scss", "_mixins.scss";',
        includePaths: [path.resolve(__dirname, './src/styles/')]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Fábio Barbosa',
        short_name: 'Fábio Barbosa',
        start_url: '/',
        background_color: '#13111e',
        theme_color: '#b78f30',
        display: 'standalone',
        icon: 'src/static/images/favicon.svg'
      }
    }
  ]
}
