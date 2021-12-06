---
title: 'Flickr Gallery'
subline: "React App"
excerpt: 'This project is a React App that loads a simple gallery of images from the Flickr API. User may search any keyword and the application will make a request to the Flickr API, interpret the response, and render images in a gallery style display.'
order: 5
type: 'Front-End'
technologies: ['React', 'React-Router', 'Axios']
secondaryTechnologies: ['Flickr API']
githubURL: "https://github.com/raleigh9123/React-Gallery-App"
demoURL: "https://raleigh9123.github.io/React-Gallery-App/"
projectCompleted:
  isComplete: true
  completionDate: 'April, 2019'
coverImage: '/flickr-gallery-cover.png'
---
# Description
This project is a React App that loads a simple gallery of images from the Flickr API. User may search any keyword and the application will make a request to the Flickr API, interpret the response, and render images in a gallery style display.

The project works as expected, however, I was disappointed with the limited and imprecise results received from the Flickr API. (e.g. searching 'water' produces many unrelated results)

## Technical Process
The site is a single page application (SPA) built in React via create-react-app. The app strictly demonstrates front-end UI. To load the page, the app submits an HTTP request using Axios to the Flickr API. It uses the url parameter supplied by the client (browser). The search bar pushes the value of the search inputs to the browser's url (via React-Router). This triggers an another API call and the page re-renders with the updated images.

-app uses 'BrowserRouter', 'Switch', and 'Route' to maintain history, redirect search queries to new URLs, and initialize the app at a custom URL
-app uses axios to fetch requests from the Flickr API, and return a promise. This api request is declared in an app method, and called via the app's componentDidMount() method to set initial state. This initial state contains arrays of objects containing Flickr's image information.
-app contains both functional components and classes and images are preserved and updated within the application state.
