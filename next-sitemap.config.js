const fs = require('fs')

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://1mw.com/',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 10000,
  exclude: ['/property'],

  additionalPaths: async (config) => {
    const result = []

    const data = fs.readFileSync('./listing_id.csv', 'utf-8')

    data.split('\n').forEach((row) => {
      const listing_id = row.split('"')[1]
      result.push({
        loc: `/property?id=${listing_id}`,
        changefreq: 'yearly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      })
    })

    return result
  },
}
