module.exports = {
  siteUrl: "https://ivantom-portfolio.vercel.app/",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  // exclude: ['/secret-page'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
