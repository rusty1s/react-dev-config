# React Development Configuration

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

[npm-image]: https://badge.fury.io/js/react-dev-config.svg
[npm-stats-image]: https://nodei.co/npm/react-dev-config.png?downloads=true&downloadRank=true&stars=true
[npm-url]: https://www.npmjs.com/package/react-dev-config
[node-version-image]: https://img.shields.io/node/v/react-dev-config.svg
[build-image]: https://travis-ci.org/rusty1s/react-dev-config.svg?branch=master
[build-url]: https://travis-ci.org/rusty1s/react-dev-config
[coverage-image]: https://img.shields.io/codecov/c/github/rusty1s/react-dev-config.svg
[coverage-url]: https://codecov.io/github/rusty1s/react-dev-config?branch=master
[code-climate-image]: https://codeclimate.com/github/rusty1s/react-dev-config/badges/gpa.svg
[code-climate-url]: https://codeclimate.com/github/rusty1s/react-dev-config
[code-climate-issues-image]: https://codeclimate.com/github/rusty1s/react-dev-config/badges/issue_count.svg
[code-climate-issues-url]: https://codeclimate.com/github/rusty1s/react-dev-config/issues
[dependency-image]: https://david-dm.org/rusty1s/react-dev-config.svg
[dependency-url]: https://david-dm.org/rusty1s/react-dev-config
[dev-dependency-image]: https://david-dm.org/rusty1s/react-dev-config/dev-status.svg
[dev-dependency-url]: https://david-dm.org/rusty1s/react-dev-config?type=dev
[peer-dependency-image]: https://david-dm.org/rusty1s/react-dev-config/peer-status.svg
[peer-dependency-url]: https://david-dm.org/rusty1s/react-dev-config?type=peer

## Why? ![Why?][why]

[why]: https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg

`react-dev-config` is a react development configuration outsourced in its own
package similiar to `create-react-app`.

### Differences to `create-react-app`

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

With `react-dev-config` you still have the important advantages of
`create-react-app` (with a much smaller codebase), and can still configure your
build as you like.

The `react-dev-config` configuration is meant as a great start configuration
outsourced as a development dependency.
It includes:

* React, JSX, and ES6 support
* **Webpack 2**
* A dev server with hot inline reloading for JavaScript **and CSS**
* Linting scripts and styles with `eslint` and `stylelint`
* Testing via `jest` and e.g. `enzyme`
* **CSS Modules** and **PostCSS** (`postcss-cssnext` and
  `postcss-font-magician`)
* A build script to bundle JS, CSS and other files for production
* Downloading private SVN modules via `svn-modules` (if needed)

## Getting Started

You can use the start configuration simply by running

```bash
npm install react-dev-config --save-dev
```

and adding the `react-dev-config` scripts to your `package.json`:

```json
"scripts": {
  "postinstall": "react-dev-config svn install",
  "preuninstall": "react-dev-config svn uninstall",
  "lint-scripts": "react-dev-config lint-scripts",
  "lint-scripts-fix": "react-dev-config lint-scripts --fix",
  "lint-styles": "react-dev-config lint-styles",
  "lint": "npm run lint-scripts && npm run lint-styles",
  "start": "react-dev-config start",
  "watch": "react-dev-config watch",
  "build": "react-dev-config build",
  "test": "react-dev-config test",
  "test:watch": "react-dev-config test --watch"
}
```

You can find a working demo in the `demo` folder.

### `react-dev-config svn [install|uninstall]`

Downloads and installs additional private SVN modules via
[svn-modules](https://github.com/ewrogers/svn-modules).
Only add these if you need them.

### `react-dev-config lint-scripts [--fix]`

Lints your `.js` and `.jsx` files via
[eslint](https://github.com/eslint/eslint) based on the
[eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
configuration.
An additional `--fix` will automatically fix errors.

### `react-dev-config lint-scripts [--fix]`

Lints your `.css` files via
[stylelint](https://github.com/stylelint/stylelint) based on the
[stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard).

### `react-dev-config [start|watch|build]`

Lets you develop and build your application via
[webpack](https://github.com/webpack/webpack) and
[webpack-dev-server](https://github.com/webpack/webpack-dev-server).

`start` starts the webpack server with hot inline reloading whereas `watch` 
builds your files whenever a file changes.

### `react-dev-config test [--watch]`

Tests your application via [jest](https://github.com/facebook/jest).

## Custom Configurations

`react-dev-config` tries its best to give you the best starting configuration,
but if you need to customize a specific configuration it's there to hold your
back.

You can customize all configuration files, that means: `babelrc`, `eslintrc`,
`eslintignore`, `stylelintrc`, `stylelintignore`, `jest`, `postcss`,
`webpack.common`, `webpack.dev` and `webpack.prod`.

`webpack.common` holds the configuration which are similiar in `webpack.dev`
and `webpack.prod`.

If you want to customize a configuration, create a file called like the one 
from above in a `config` folder in your root directory:

```bash
mkdir config
touch babelrc.js
```

You can choose whether you want to extend or change the given configuration or
create a new one by yourself.

If you want to extend or change a configuration, put something like this in
your newly created file:

```js
// config/babelrc.js
const babelrc = module.exports = require('react-dev-config/babelrc');

babelrc.plugins = ['transform-react-constant-elements'];
// If you don't want to override current plugins, write:
// babelrc.plugins.push('transform-react-constant-elements');
```

You can always look up the given configurations or create an issue if you're 
getting stuck 😇.

## Contributing ![Contributions welcome][contributing]

[contributing]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg

If you feel that your own customizations fit a lot of peoples need, feel free
to make a pull request into the main repository.

## ToDo

* tests
* add vendor chunk for prod
* comments in config and demo
