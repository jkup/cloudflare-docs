const fs = require("fs");
const productIconKey = "distributed-web";
const path = require("path");

module.exports = {
  product: "Distributed Web Gateway",
  pathPrefix: "/distributed-web",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/distributed-web",
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
    algoliaOptions: { facetFilters: '["project:distributed-web"]' },
  },
  siteMetadata: {
    title: "Cloudflare Distributed Web Gateway docs",
    description:
      "View files stored on the InterPlanetary File System in your browser. Interact with the Ethereum blockchain. Explore the Distributed Web.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/distributed-web",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
