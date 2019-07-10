<img width="1086" alt="music_albums_1" src="https://user-images.githubusercontent.com/13613724/61009026-2d8fe300-a326-11e9-8d90-a776a4892df8.png">

<img width="1427" alt="music_albums_2" src="https://user-images.githubusercontent.com/13613724/61009038-3aacd200-a326-11e9-8b14-19920c9dee2f.png">

# About

This is a single-page application that brings together various technologies,
techniques, and concepts. It uses Backbone and its router and event history
system as well as code testing with Jasmine. The application is a music
collection viewer.

# Features/Technicalities

* single page application
* list of albums and its track listings
* data source is a custom-built Node API
* server side and client side specs

# Technologies

* NodeJS
* jasmine-node
* node-static
* nodemon
* request

# Useful Notes

* If planning on setting up this project on your own computer, install npm
  packages with the command `npm ci` in order to install packages based on the
  `package-lock.json` file. This is so that you can get the updated version of
  `bower` that fixed certain vulnerabilities. The default `npm install` behavior
  will install the vulnerable version of `bower`, which is installed as a
  dependency of the `grunt-bower-concat` package.
