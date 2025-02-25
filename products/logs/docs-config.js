const fs = require("fs");
const productIconKey = "logs";
const path = require("path");

module.exports = {
  product: "Logs",
  pathPrefix: "/logs",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/logs",
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
    algoliaOptions: { facetFilters: '["project:logs"]' },
  },
  siteMetadata: {
    title: "Cloudflare Logs docs",
    description:
      "Cloudflare Logs contain detailed information on requests and events processed by our network. Find out about the connecting client, Cloudflare's actions, and the response from the origin server",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/logs",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
