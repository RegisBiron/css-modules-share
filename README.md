# CSS Modules Share

This is the supplementary repository for my css modules share.

## Setup Prerequisites

- [nvm](https://github.com/creationix/nvm)
  - can be installed following [these instructions](https://github.com/creationix/nvm#installation)
- [yarn](https://yarnpkg.com/docs/install)
  - can be installed with homebrew: `brew install yarn`
  - optionally installed with npm: `npm install yarn --g`

## Setup Instructions

- clone this repo
- `nvm use`
- `yarn install`
- `npm run start` - Starts the `webpack-dev-server` and uses `react-hot-loader` for HMR

## About CSS Modules

- [css modules docs](https://github.com/css-modules/css-modules)
- This repo uses React and in order for React / Webpack CSS Loader to interpolate your styles use the following pattern

```js
import styles from './styles.css';

<p className={styles.summaryText}>Lorem ipsum dolor sit amet...</p>
```
```css
/* styles.css */

.summaryText {
  font-size: 1rem;
  color: blue;
}
```

- The official CSS Modules docs suggest to use camelCase for [naming](https://github.com/css-modules/css-modules#naming).

## About PostCSS

- This repo uses PostCSS as a post-processor feel free to add in more plugins

### PostCSS Plugin Installation

- `yarn add --dev postcss-plugin-name`

- Locate the postcss.config.js file in the root directory

```js
module.exports = {
  plugins: [
    require('autoprefixer'),
    // add your plugin here
  ]
};
```
