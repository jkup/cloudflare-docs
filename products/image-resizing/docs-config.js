const fs = require("fs");
const productIconKey = "image-resizing";
const path = require("path");

module.exports = {
  product: "Image Resizing",
  pathPrefix: "/image-resizing",
  productIconKey,
  productLogoPathD: require('./src/content/icons/image-resizing').pathD,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/image-resizing",
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
    algoliaOptions: { facetFilters: '["project:image-resizing"]' },
  },
  siteMetadata: {
    title: "Cloudflare Image Resizing docs",
    description: "Run your image optimization logic at the edge.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/image-resizing",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
