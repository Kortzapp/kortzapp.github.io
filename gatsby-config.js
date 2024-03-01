/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Kortz - Flashcards`,
        siteUrl: `https://www.kortz.app`,
        description: `Kortz flashcards spaced repetition app`,
    },
    plugins: [{
        resolve: `gatsby-plugin-gtag`,
        options: {
            trackingId: "G-5KNHWVZT9N",
            head: true,
            anonymize: true
        }
    }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
        resolve: 'gatsby-plugin-manifest',
        options: {
            "icon": "src/images/icon.png"
        }
    }, "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "images",
            "path": "./src/images/"
        },
        __key: "images"
    }, {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "pages",
            "path": "./src/pages/"
        },
        __key: "pages"
    },]
};
