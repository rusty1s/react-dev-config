# Helic React Configuration

[![NPM Latest Release][npm-image]][npm-url]
![Node Version][node-version-image]
[![Build Status][build-image]][build-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Code Climate][code-climate-image]][code-climate-url]
[![Code Climate Issues][code-climate-issues-image]][code-climate-issues-url]
[![Dependency Status][dependency-image]][dependency-url]
[![Dev-Dependency Status][dev-dependency-image]][dev-dependency-url]
[![Peer-Dependency Status][peer-dependency-image]][peer-dependency-url]

[![NPM Stats][npm-stats-image]][npm-url]

`create-react-app` adverties *no build configuration* and they mean it - you 
cannot configure this tool.

The most glaring missing piece is **CSS prepocessors**. They are not supported 
at all. That means:

* no CSS Modules
* no PostCSS plugins

If you want to add or change anything, you have to `eject`. Running `npm run 
eject` spits out all the configuration files so you can edit them yourself.

It's great to have this option, but if you do it your are left with all the 
disadvantages of any other starter pack (many dependencies, config boilerplate, 
no ability to receive updates).

With `helic-react-config` you have still most of the important advantages of 
`create-react-app` (with a much smaller codebase), and can still configure your 
build as you like.

The `helic-react-config` configuration is meant as a great start configuration 
outsourced as devDependency.
It includes:

* React, JSX, and ES6 support
* **Webpack 2**
* A dev server with hot reloading
* Linting via `eslint` and `stylelint`
* Testing via `jest` and `enzyme`
* **CSS Modules** and **PostCSS** (with `postcss-import` and `postcss-cssnext`)
* A build script to bundle JS, CSS and other files for production
* Downloading private SVN modules if needed via `svn-modules`

## ToDo

* Test script
* add vendor chunk for prod
* add htmlwebpackplugin
* enzyme is a devdependency and should stay there
* Readme
* Test for propTypes
* Travis: Run demo test

[npm-image]: https://badge.fury.io/js/helic-react-config.svg
[npm-stats-image]: https://nodei.co/npm/helic-react-config.png?downloads=true&downloadRank=true&stars=true
[npm-url]: https://www.npmjs.com/package/helic-react-config
[node-version-image]: https://img.shields.io/node/v/helic-react-config.svg

[build-image]: https://travis-ci.org/rusty1s/helic-react-config.svg?branch=master
[build-url]: https://travis-ci.org/rusty1s/helic-react-config
[coverage-image]: https://img.shields.io/codecov/c/github/rusty1s/helic-react-config.svg
[coverage-url]: https://codecov.io/github/rusty1s/helic-react-config?branch=master
[code-climate-image]: https://codeclimate.com/github/rusty1s/helic-react-config/badges/gpa.svg
[code-climate-url]: https://codeclimate.com/github/rusty1s/helic-react-config
[code-climate-issues-image]: https://codeclimate.com/github/rusty1s/helic-react-config/badges/issue_count.svg
[code-climate-issues-url]: https://codeclimate.com/github/rusty1s/helic-react-config/issues

[dependency-image]: https://david-dm.org/rusty1s/helic-react-config.svg
[dependency-url]: https://david-dm.org/rusty1s/helic-react-config
[dev-dependency-image]: https://david-dm.org/rusty1s/helic-react-config/dev-status.svg
[dev-dependency-url]: https://david-dm.org/rusty1s/helic-react-config?type=dev
[peer-dependency-image]: https://david-dm.org/rusty1s/helic-react-config/peer-status.svg
[peer-dependency-url]: https://david-dm.org/rusty1s/helic-react-config?type=peer
