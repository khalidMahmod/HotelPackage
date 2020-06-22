# Rails-React: Hotel Packages Manager 
This is a pure [Ruby on Rails](http://rubyonrails.org/) / [React](https://facebook.github.io/react/) / [Webpack 4](https://webpack.js.org/) REST Api based hotel packages manager app.

## Features

- Ruby on Rails 6.x
- React 16.x
- Webpack 4.x
- Babel 7.x
- Sqlite database
- Packages REST API

## Exit Asset Pipeline, Enter Webpack

Why Webpack?  
Webpack is a module bundler. It can bundle all JS files for usage in the browser, but can also transform / bundle / package any resource or frontend asset.  
The [NPM](https://www.npmjs.com/) ecosystem is huge, and Webpack makes it available in the simplest way possible.  
Webpack can support every modern JS app, using ES6 or CommonJS modules, or both, create a single or multiple bundles, and in general can be customized to accomplish any application requirement.

The frontend assets on this repository are placed on a more accessible directory, at `front/js` and `front/css`, rather than `app/assets/javascripts` and `app/assets/stylesheets`.  
At any point, migration to a different backend (for example NodeJS) can be seamless since Webpack is running as a stand-alone bundler, there's absolutely no dependence to the Asset Pipeline or any other framework-specific module.

## Install

It's recommended to use Ruby 2.6.x and Yarn 1.3.x

```sh
# install bundler if not available
gem install bundler

# install gem dependencies
bundle install

# install dependencies
yarn install

# create the sqlite databases and populate with seed data
rake db:setup

# start server
rails s

# Run Automated Tests
rake spec
