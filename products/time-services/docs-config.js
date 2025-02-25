const fs = require("fs");
const productIconKey = "time-services";
const path = require("path");

module.exports = {
  product: "Time Services",
  pathPrefix: "/time-services",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/time-services",
  logoSVGContent: fs.readFileSync(
    path.join(__dirname, `src/content/icons/${productIconKey}.svg`),
    "utf8"
  ),
  externalLinks: [
    {
      title: "Cloudflare Time Services homepage",
      url: "https://www.cloudflare.com/time/",
    },
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:time-services"]' },
  },
  siteMetadata: {
    title: "Cloudflare Time Services docs",
    description:
      "Cloudflare’s suite of time services: NTP, NTS, and Roughtime.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/time-services",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
