# Graham's Todos App

## Author: Graham Roberts

### Description

#### General Information

This `paging-routing` application allows a user to add todos coded in vanilla JavaScript modules. The user will be able to add/delete/edit their todos. It does contain pages created with JavaScript and a router for routing between JavaScript pages that render via functions. Styling is done through using SCSS stylesheets.

#### How to Run

You can clone this repository and install the needed developer dependencies by running `npm install` in your terminal. The bundler for this application is parcel and will require you to type `npm start` into your terminal. You can then run the server on your localhost by `ctrl + clicking` on the `Server running at http://localhost`.

There are also `npm run clean:dev` or `npm run clean:git` commands for you to delete the `.parcel-cache` and `dist` directories to relaunch `npm start` for a clean build or clean those directories and remove the `node-modules` directory. 

#### Gulp

This project makes use of Gulp to pipe the static files, local json data and svg assets, to the dist directory created by the parcel bundler.

#### Netlify Delpoyment

You can see the application running at the following link on netlify:
[Link to Netlify](https://paging-routing.netlify.app/)