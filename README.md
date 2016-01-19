# Very simple project to gain experience using webpack with angular, angular-material, less and testing

## Technologies used
* [Webpack](https://webpack.github.io/) - build using commonjs
* [Gulp](http://gulpjs.com/) - orchestrating a build, server and watching files for changes
* [Browsersync](https://www.browsersync.io/) - synchronize browser testing
* [Karma](http://karma-runner.github.io/0.13/index.html) - unit testing javascript
* [Protractor](http://www.protractortest.org/#/) - end to end testing
* [Less](http://lesscss.org/) - css preprocessing

## Project requirements
* Node 4 or higher
* Npm 3.3.9 or higher

## Project install from command line at the project root (same location as the package.json file)
```
npm install
```
## Karma - unit tests
```
npm test
```
## Protractor - e2e (end to end tests)
```
npm run build
# open another terminal or command prompt
npm run protractor
```

~ To see the test files look under client/app/dashboard for spec and e2e files

~ references: [Angular Class](https://angularclass.com/)
