const fs = require("fs");
const productIconKey = "byoip";
const path = require("path");

module.exports = {
  product: "BYOIP",
  pathPrefix: "/byoip",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/byoip",
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
    algoliaOptions: { facetFilters: '["project:byoip"]' },
  },
  siteMetadata: {
    title: "Cloudflare BYOIP docs",
    description:
      "With BYOIP, Cloudflare announces your IPs in all our locations. Use your IPs with Magic Transit, Spectrum, or CDN services.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/byoip",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
