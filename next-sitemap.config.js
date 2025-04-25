module.exports = {
  siteUrl: "https://ivantomdieu.vercel.app",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 1.0,
  lastmod: true,
  sitemapSize: 5000,
  outDir: "public",
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://ivantomdieu.vercel.app/sitemap.xml',
    ],
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
