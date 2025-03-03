const fs = require("fs");
const productIconKey = "magic-firewall";
const path = require("path");

module.exports = {
  product: "Magic Firewall",
  pathPrefix: "/magic-firewall",
  productIconKey,
  productLogoPathD:
    "M19.85 38h4.69c.73.42 1.5.8 2.32 1.14l.27.14c0 .01.1-.03.27-.14 5.96-2.46 9.74-7.25 11.78-13.67 1.3-4.07 1.72-8.2 1.64-11.53l-13.4-6.12-14.05 6.12a91.76 91.76 0 00.08 3.56h-2.58a49.7 49.7 0 01-.08-4.85c0-.27.2-.55.48-.7l15.89-6.9c.27-.07.48-.07.68 0l15.2 6.98c.2.14.41.35.41.62 0 .21 1.72 22.67-15.68 29.3-.46.23-.82.23-1.28 0-2.63-1-4.82-2.36-6.64-3.95zM5.5 19.5H10V22H4v-1c0-.83.67-1.5 1.5-1.5zm5.5 0h6V22h-6v-2.5zm7 0h4.5c.83 0 1.5.67 1.5 1.5v1h-6v-2.5zM4 23h2.5v2.5H4V23zm17.5 0H24v2.5h-2.5V23zm-14 0h6v2.5h-6V23zm7 0h6v2.5h-6V23zM4 30h2.5v2.5H4V30zm17.5 0H24v2.5h-2.5V30zm-14 0h6v2.5h-6V30zm7 0h6v2.5h-6V30zM4 26.5h6V29H4v-2.5zm7 0h6V29h-6v-2.5zm7 0h6V29h-6v-2.5zm-14 7h6V36H5.5A1.5 1.5 0 014 34.5v-1zm7 0h6V36h-6v-2.5zm7 0h6v1c0 .83-.67 1.5-1.5 1.5H18v-2.5z",
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/magic-firewall",
  logoSVGContent: fs.readFileSync(
    path.join(__dirname, `src/content/icons/${productIconKey}.svg`),
    "utf8"
  ),
  externalLinks: [
    {
      title: "Magic Transit home",
      url: "https://www.cloudflare.com/magic-transit/",
    },
    {
      title: "Blog: Magic WAN & Magic Firewall",
      url: "https://blog.cloudflare.com/introducing-magic-firewall/",
    },
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:magic-firewall"]' },
  },
  siteMetadata: {
    title: "Cloudflare Magic Firewall docs",
    description:
      "Magic Firewall a network-level firewall delivered through Cloudflare to secure your enterprise.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/magic-firewall",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
