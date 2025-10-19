/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mar-portfolio-topaz.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/admin/*"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
