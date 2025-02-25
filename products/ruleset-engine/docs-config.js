const fs = require("fs");
const path = require("path");
const productIconKey = "ruleset-engine";

module.exports = {
  product: "Ruleset Engine",
  pathPrefix: "/ruleset-engine",
  productIconKey,
  productLogoPathD: require('./src/content/icons/ruleset-engine').pathD,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/ruleset-engine",
  logoSVGContent: fs.readFileSync(
    path.join(__dirname, `src/content/icons/${productIconKey}.svg`),
    "utf8"
  ),
  externalLinks: [
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    }
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:ruleset-engine"]' },
  },
  siteMetadata: {
    title: "Cloudflare Ruleset Engine docs",
    description:
      "Create and deploy rules and rulesets in different Cloudflare products using the same basic syntax.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/ruleset-engine",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
