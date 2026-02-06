// sitemap-generator.js
import fs from 'fs';
import { createSitemap } from 'sitemap';

// Import your routes manually here (static ones only)
const routes = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/blogs',
  '/donate',
  '/test',
];

// Dynamic routes: if you want to include some known IDs for /blogs/:id
// For example, if you have blog posts 1, 2, and 3:
const latestBlogId = 4; // change this when you publish a new blog
for (let i = 1; i <= latestBlogId; i++) {
  routes.push(`/blogs/${i}`);
}

// Create sitemap URLs array
const urls = routes.map(route => ({
  url: route,
  changefreq: 'weekly',
  priority: route === '/' ? 1.0 : 0.8,
}));

// Create sitemap object
const sitemap = createSitemap({
  hostname: 'https://sursaathi.in', // <-- change to your real domain
  urls,
});

// Write sitemap to public folder (copied to build after build)
fs.writeFileSync('./public/sitemap.xml', sitemap.toString());
console.log('✅ Sitemap created with', urls.length, 'routes');
