/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ivantomdieu.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: "public",
  exclude: ['/server-sitemap.xml', '/api/*', '/404'], 
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/private/"] },
    ],
  },
};
