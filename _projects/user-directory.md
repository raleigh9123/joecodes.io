---
title: 'User Directory'
subline: "Public API Request"
excerpt: 'This project is a React App that loads a simple gallery of images from the Flickr API. User may search any keyword and the application will make a request to the Flickr API, interpret the response, and render images in a gallery style display.'
order: 6
type: 'Front-End'
technologies: ['fetch-api', 'Asynchronous Programming', 'DOM Manipulation']
secondaryTechnologies: []
githubURL: "https://github.com/raleigh9123/User-Directory-w-API-Requests"
demoURL: "https://raleigh9123.github.io/User-Directory-w-API-Requests/"
projectCompleted:
  isComplete: true
  completionDate: 'April, 2019'
coverImage: '/user-directory-cover.png'
---
# Description
This project builds a randomly generated user directory that might be used to provide information about employees internally on a company website. The page displays 12 people on their own cards with some identifying details. Users are then able to click on a person to open a modal popup. This popup includes more information about the person as well as buttons to cycle forward or backward from the page's list of persons. Lastly, the page includes a search function that filters cards listed on the page by name. This filter highlights positive results.

Each person is randomly generated on page refresh with the Random User Generator API (from randomuser.me).

## Technical Process
Besides a few container divs, this whole page is generated via Javascript. The page first makes an HTTP Request to ` randomuser.me ` then formats the response as a JSON object. The formatted data is used to create user cards and corresponding modal popups (initially hidden) and render them to the DOM. In the case of HTTP errors, a user friendly message is displayed on screen and corresponding errors are logged to the browser console.

The application utilizes a few helper functions to generate HTML and create event listeners. The helper functions create the HTML and render it to the DOM. Event listeners allow filtering from the search input and cycle to corresponding modal popup boxes when each user card is clicked.
