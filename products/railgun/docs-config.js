const fs = require("fs");
const productIconKey = "railgun";
const path = require("path");

module.exports = {
  product: "Railgun",
  pathPrefix: "/railgun",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/railgun",
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
    algoliaOptions: { facetFilters: '["project:railgun"]' },
  },
  siteMetadata: {
    title: "Railgun Documentation",
    description:
      "Improve loading times by caching dynamically generated or personalized web pages, dramatically reducing bandwidth usage and improving download times.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/railgun",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
