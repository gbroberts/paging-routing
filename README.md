# Graham's Todos App

## Author: Graham Roberts

### Description

#### General Information

This `paging-routing` application is a visual representation of an application to allow a user to add todos coded in vanilla JavaScript modules. Presently, it contains no functionality to add/delete/edit the todos. It does contain a basic page router for routing between JavaScript pages that render via functions. Styling is done through using SASS stylesheets.

#### How to Run

You can clone this repository and install the needed developer dependencies by running `npm install` in your terminal. The bundler for this application is parcel and will require you to type `npm start` into your terminal. You can then run the server on your localhost by `ctrl + clicking` on the `Server running at http://localhost`.

There are also `npm run clean:dev` or `npm run clean:git` commands for you to delete the `.parcel-cache` and `dist` directories to relaunch `npm start` for a clean build or clean those directories and remove the `node-modules` directory. 

#### Gulp

This project makes use of Gulp to pipe the static files, local json data and svg assets, to the dist directory created by the parcel bundler.

#### Netlify Delpoyment

You can see the application running at the following link on netlify:
[Link to Netlify](https://paging-routing.netlify.app/)

To deploy to Netlify, you will need to create and copy the supplied [netlify.toml](netlify.toml) into the root of your created dist folder. This is to override Netlify's default 404 page to display your own custom 404 page since it will always route to `index.html` and subequently your `index.js` getting access to the router.