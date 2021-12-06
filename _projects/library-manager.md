---
title: 'Library Manager'
subline: "Full-Stack React App"
excerpt: 'This project is a library application that allows users to view a list of courses. Users are able to create an account with personal login credentials, then users may login, create courses, and update and delete their own courses.'
order: 1
type: 'Full-Stack'
technologies: ['Basic-Auth', JS-Cookie', 'React Context API']
secondaryTechnologies: ['React Router DOM', 'Express', 'SQLite', 'Sequelize']
githubURL: 'https://github.com/raleigh9123/Full-Stack-Library-Manager'
projectCompleted:
  isComplete: true
  completionDate: 'April, 2019'
coverImage: '/library-manager-cover.png'
---
# Description
This project is a library application that allows users to view a list of courses. Users are able to create an account with personal login credentials, then users may login, create courses, and update and delete their own courses. The browser will then persist client credentials (using JS-Cookie). Any client (browser) may view library information.

The project structure includes two directories: a front-end and back-end (API information below). The API in this project is slightly different than the Library API (notes on Github readme)

This project is the front-end layer that renders a UI to interact with the ` Library API ` project (also listed on joecodes.dev). The API will run on its own. The Library Manager App must have the Library API running concurrently to operate.

## Technical Process
1\. Project was initialized with create-react-app. This project was built from scratch utilizing React's native Context API, React Router DOM, and various third party dependencies.

2\. Project consists of the following key files:

    -- App.js: contains all routes and contextualized components.

    -- Context.js: A higher order component that is called from within App.js to wrap all components requiring Context

    -- Utility.js: A helper file initialized within Context.js that contains a parent api() function, and all subsequent api requests made from within the application to the backend API.

3\. Components are consolidated into a /courses and /users directory corresponding to Course and User related routes, respectively. Otherwise, all other routes called from within App.js are contained within the parent /components directory.

4\. React application contains user friendly error messages. Validation errors provided from the API to the client are displayed if invalid or required information is missing from fields on the UserSignUp, UserSignIn, CreateCourse, and UpdateCourse components. If an individual course, or if an invalid url are requested, users are directed to a "Not Found" page. If users require authentication for a given page, the application will render a "Forbidden" page. All other errors will render a generic "Error" page.

5\. If a user attempts to access a forbidden route, and logs in afterwards, user will be redirected to prior forbidden page. All authentication is persisted via JS-Cookie.
