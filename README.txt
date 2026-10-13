Many Threads

One Home, Many Threads. A curated online house of Nigerian attire. Customers browse made-to-measure pieces by culture (Igbo, Yoruba, Hausa, Edo, Calabar, Tiv), enter their measurements, and send an order or question straight to WhatsApp.

Live site: https://manythreads.netlify.app

Features
Multi-page static site: Home, Shop by Culture, six culture pages, Measurements guide, How It Works, Partner With Us, Contact
Shopping flow: pick a style, enter body measurements (inches or cm), then order or ask a question on WhatsApp
Three languages (English, French, Spanish), switched in one click and remembered
Light and dark themes
Animated logo: five threads converge into one, plus an app-style opening screen once per visit
Responsive layout with a mobile menu that holds the language, currency and theme controls
SEO: per-page titles and descriptions, canonical URLs, Open Graph and Twitter cards, JSON-LD, sitemap.xml, robots.txt, custom 404
Respects prefers-reduced-motion
Tech

Plain HTML, CSS and vanilla JavaScript. No framework and no build step. Content is rendered by assets/site.js from data objects inside that file. Hosted on Netlify, deployed from this GitHub repository.

Project structure
index.html, cultures.html, igbo.html, yoruba.html,
hausa.html, edo.html, calabar.html, tiv.html,
measurements.html, how.html, partner.html, contact.html
404.html, sitemap.xml, robots.txt, _redirects
assets/
  site.css      styles (light and dark themes, responsive rules)
  site.js       content, translations, rendering, order flow
  img/          photographs
  og.jpg        social sharing image
  favicon.svg, logo.png
Run locally

Open index.html in a browser, or serve the folder:

npx serve .
Configuration

Open assets/site.js and edit the CFG and SOC values near the top:

Setting	Purpose
CFG.wa	WhatsApp number, digits only with country code (e.g. 2348012345678)
CFG.pay	Optional online payment link. A "Pay online" button appears when set
CFG.email	Contact email
SOC	Social media links
Common edits
Add or change a product: edit the C object in assets/site.js (image, name, type, colour, who it's for).
Change text or translations: edit the D object. Each entry holds [English, French, Spanish].
Add a language: add its code to LANGS, add a third or fourth value to every D entry, and add a button in render().
Replace a photo: overwrite the file in assets/img/, keeping the same name.
Deployment

Pushing to the main branch triggers a Netlify deploy. _redirects maps clean URLs such as /igbo to igbo.html. The site address is set in the canonical tags and sitemap.xml. If it changes, search and replace https://manythreads.netlify.app across the repo.

Known limitations
Prices are not set yet (styles show "Price confirmed on enquiry").
Payment is handled over WhatsApp unless CFG.pay is set.
The contact form and newsletter box open WhatsApp and the visitor's email app. There is no server-side storage.
Page text is rendered by JavaScript, and the page titles and descriptions are English only.