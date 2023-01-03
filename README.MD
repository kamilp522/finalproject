# midtrader

## Application for medium-term traders with tools for planning, structuring, and storing trades.

Midtrader is a web app created for people trading on US stock exchanges with Time Horizon for trades spanning from a few weeks to many months (up to a year). Economic indicators provided by midtrader can be used to forecast future economic conditions and confirm predictions made in the past. It also has many tools for price analysis or calculating capital.

## Important links:

- [live website](https://midtrader.fly.dev/)
- [video demo](https://www.youtube.com/watch?v=jckOW0lykHU)

### Currently available tools:

- quote look-up tool for finding the current price, name of the company and exchange where the stock is traded on
- ratio chart tool provides price ratio chart of two assets that might be used for technical analysis
- calculator allowing users to calculate capital needed to allocate to each of the assets chosen for the trade based on the underlying volatility
- tool for writing down and saving created ideas

## Project structure

Project is a fullstack web application made with JavaScript frameworks and libraries. Fullstack means that it has a frontend and a backend.

### Frontend

Frontend written with React framework is code run by the client I.e. browser. It is responsible for creating a graphical interface and making it interactive.

The most important elements in the frontend folder are:

- src folder containing:
  - index.js - file that mainly includes information about what to render to the website
  - App.js - file containing root component of the application
  - components folder - all react components written with JSX that are part of the website
    - components are reusable chunks of code that might be used throughout the application. Ther are basically functions but are intertwined with HTML to create a view thanks to special JSX syntax supported by react
    - components are styled using react styled components library that allows tight coupling between components and their styles. Styled components use JavaScript template literals to write CSS directly into component.
  - helpers folder including helper functions used to parse data or manipulate visuals on the website
  - services - folder including calls that are made to the application server for fetching data according to the sent http request
  - reducers folder containing functions for changing the application state made with react library called redux. Thanks to redux we can use some of the states of the application globally (for example information about logged in user)
  - tests folder which is quite self-descriptive - it contains unit tests for react components written with jest and react testing library

* cypress folder containing end-to-end tests of the application written with cypress testing library
* public folder contains files that shall not be processed by webpack bundler
* various configuration files:
  - package.json - one of the most important files in every project using npm (node package manager). It contains metadata about the project, dependencies and scripts
  - .eslintrc.json - file containing configuration for eslint - analysis tool for JavaScript that helps find errors in code and format it accordingly to provided specification
  - .babelrc - configuration file for babel transcompiler that is used for compiling newer versions of JavaScript into older format compatible with older browsers
  - cypress.config.js - configuration for cypress testing library
  - webpack.config.js - configuration for webpack bundler that take modules with dependencies and creates static assets from them
  - jest.config.json - config file for jest testing framework

### Backend

Backend written in node.js/express.js is the server of the application, which is basically a program that serves data. It's role is to respond to requests made by the user.

The most important elements in the backend folder are:

- index.js - in node application index.js is the first file executed. It is basically the entry point for the application
- app.js - file that contains configuration for routers and middleware for the whole application
- controllers folder including all endpoints for the application. Controller responds to a request, optionally transform data, and send response back to the client
- models folder contains mongoose schema for data sent to Mongo DB. Model provides the interface for creating, updating, and quering data
- tests folder includes mainly integration tests made with the jest testing framework
- utils folder contains mostly useful functions that are used to transform data before sending a response back
- various configuration files:
  - package.json
  - jest.config.json
  - .eslintrc.json
