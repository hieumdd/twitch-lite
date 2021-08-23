require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://${process.env.GATSBY_PUBLIC_URL}`,
    githubRepo: process.env.GITHUB_REPO,
    title: 'Twitch Lite',
    description: 'Lightweight Twitch Front End for Older Machines',
    author: 'hieumdd',
    keywords: 'twitch, lite',
  },
  plugins: [
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/*'],
      },
    },
  ],
};
