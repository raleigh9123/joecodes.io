---
title: 'Library API'
subline: "REST API"
excerpt: "This project is a Rest API that configures responses to API requests for 'Courses' and 'Users' within a local database."
order: 2
type: 'Back-End'
technologies: ['REST API', "bcrypt.js", 'basic-auth']
secondaryTechnologies: ['SQLite', 'Sequelize', 'Sequelize-CLI', 'express-validator', 'Express']
githubURL: 'https://github.com/raleigh9123/REST-API-for-Library-Application'
projectCompleted:
  isComplete: true
  completionDate: 'April, 2019'
coverImage: '/library-api-cover.png'
---
# Description
This project is a Rest API that configures responses to API requests for 'Courses' and 'Users' within a local database. As this server runs, it will respond to browser GET, POST, PUT, and DELETE requests. Authentication is required for many functions and the database persists user creation.

This project is STRICTLY backend. There is no UI, and all interaction must be performed from a front end web application or a testing application (such as Postman) while server is running. The database persists information locally.

All instructions for installing the application and seeding the database are listed within the Github repository.

## Technical Process
This app is a REST API built on Express and Node.js. I started the project using init -y and configured the json package with the sequelize-cli and express generator tools to configure the Express app with the Sequelize ORM.

Two sequelize models are defined and related: 'course' and 'user'. These models define the tables in the database and the information that is manipulated within the project. Models contain sequelize validation to normalize all database information. The application validates all incoming with express-validator.

The project structure uses a modular folder hierarchy to improve readability within the app. All routing follows the template ` url/api/ users or courses / :route `. Additionally, helper functions are included in helper.js to minimize repeated code within the route files. Individual route files include all the routes for various HTTP requests to the API. GET, POST, PUT, and DELETE requests are all called from within the two route folders and correspond with sequelize CRUD operations to persist information in the local database.

Certain routes require authentication and include validation middleware to first authenticate users, then validate client data, and finally return responses. All responses return in JSON format with HTTP status codes. Some routes may not warrant a JSON response but still return an HTTP status code.

The database must be initialized with a seed file provided by TeamTreehouse and the Unit 9 TechDegree specifications. If database is not initialized with the seed file, it must initialized via the Sequelize ORM. (Database information can be viewed via a UI such as DB Browser for SQLite)

Error handling is included for routes that are not found, user authentication and permission failures, and general server errors. Additionally, error handling returns user friendly validation errors (either from express-validator and invalid input data, or from Sequelize refusing valid data, but incorrect inputs for table configuration).
