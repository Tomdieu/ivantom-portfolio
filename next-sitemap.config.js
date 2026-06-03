module.exports = {
  siteUrl: "https://ivantomdieu.vercel.app",
  generateRobotsTxt: true,
  outDir: "public",
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
