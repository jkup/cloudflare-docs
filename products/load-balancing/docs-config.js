const fs = require("fs");
const productIconKey = "load-balancing";
const path = require("path");

module.exports = {
  product: "Load Balancing",
  pathPrefix: "/load-balancing",
  productIconKey,
  productLogoPathD:
    "M18 35.82l4.58 4.58a2 2 0 002.84 0L40.4 25.42a2 2 0 000-2.84L25.42 7.6a2 2 0 00-2.84 0L7.6 22.58a2 2 0 000 2.84l7.4 7.4V23.4c0-.77.63-1.4 1.4-1.4H28v-3.13a.4.4 0 01.66-.3l5.24 4.47a.6.6 0 010 .92l-5.24 4.48a.4.4 0 01-.66-.3V25H18v10.82zM5.47 20.45L20.45 5.47a5.02 5.02 0 017.1 0l14.98 14.98a5.02 5.02 0 010 7.1L27.55 42.53a5.02 5.02 0 01-7.1 0L5.47 27.55a5.02 5.02 0 010-7.1z",
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/load-balancing",
  logoSVGContent: fs.readFileSync(
    path.join(__dirname, `src/content/icons/${productIconKey}.svg`),
    "utf8"
  ),
  externalLinks: [
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:load-balancing"]' },
  },
  siteMetadata: {
    title: "Cloudflare Load Balancing",
    description:
      "Balance traffic loads, manage failovers, monitor server and pool health, and apply geographic control with Cloudflare Load Balancing",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/load-balancing",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
