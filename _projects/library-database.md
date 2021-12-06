---
title: 'Library Database'
subline: "SQL Application"
excerpt: 'This project is a Node.js Library Database Application that provides a user friendly interface to create, read, update, and delete books in a database. Users can create new books, view all books within the database, update information on books within the database, and delete records.'
order: 3
type: 'Full-Stack'
technologies: ['SQLite', 'Sequelize ORM', 'Express']
secondaryTechnologies: ['Sequelize-CLI', 'Express Generator', 'nodemon']
githubURL: 'https://github.com/raleigh9123/SQL-Library-Manager'
projectCompleted:
  isComplete: true
  completionDate: 'April, 2019'
coverImage: '/library-database-cover.png'
---
# Description
This project is a Node.js Library Database Application that provides a user friendly interface to create, read, update, and delete books in a database. Users can create new books, view all books within the database, update information on books within the database, and delete records.

The project's focus is working with SQL and the Sequelize ORM, so actual user features are fairly limited (e.g. basic search, authentication, additional routing, or custom 404)

## Technical Process
This is a Node.js application created and served with Express. The site was constructed via the Terminal with ` Express Generator ` and configured to use the Pug templating engine.

The database configuration was setup with the Sequelize - CLI. Configuration is LOCAL only. Express routes serve a lightweight front end to interact with the Sequelize ORM and persist data within a local SQLite database. All CRUD operations are enabled on the front-end.

The application allows list pagination and a quick search tool. Any pagination updates depending on the number of variables on the page (quickly changed from one variable within the project).
