---
title: 'Express Portfolio'
subline: "A simple portfolio site I built with Node.js and Express and the Pug templating engine."
excerpt: 'This project is a basic portfolio site built in Node.js and Express using the Pug templating package. It contains a home page, an about page, and pages for a few development projects.'
order: 7
type: 'Front-End'
technologies: ['Node.js', 'Express', 'Pug Templating']
secondaryTechnologies: ['nodemon']
githubURL: "https://github.com/raleigh9123/Portfolio-Site-NodeJS-Express-and-Pug"
projectCompleted:
  isComplete: true
  completionDate: 'April, 2019'
coverImage: '/express-portfolio-cover.png'
---
# Description
This project is a basic portfolio site built in Node.js and Express using the Pug templating package. It contains a home page, an about page, and pages for a few development projects.

Each project's data is listed in a static JSON and image files and contains the project description, links, and references to the project's images. The site also provides links to live demos utilizing Github pages.

## Technical Process
This site is a Node.js app and must run via a Node server. Using express, the app parses data from an internal JSON file, renders html with pug, and serves the HTML to the DOM.

Each page is routed by url paths with express router. If a page is not found, express router will catch the unspecified route and render a 404 page. Express router will also catch errors this way, and print the errors to the DOM and console.
