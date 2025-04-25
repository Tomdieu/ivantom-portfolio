module.exports = {
  siteUrl: "https://ivantomdieu.vercel.app/",
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
