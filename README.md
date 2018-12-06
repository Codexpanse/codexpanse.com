# Codexpanse.com home page
Simple static website. Bootstrap 4.1, Font Awesome, Webpack, SCSS. Based on [bootpack](https://github.com/bootpack/bootpack).

## Getting Started
```
git clone https://github.com/bootpack/bootpack.git
npm install
npm run build
npm start
```

## Usage
### Build
`npm run build` - Creates the project in **production** mode (minified) and outputs to the dist folder.
`npm run watch` - Creates the project in **development** mode (unminified, sourcemap enabled). This mode watches for changes and outputs to the dist folder.
`npm start` - Creates the project in **development** mode (unminified, sourcemap enabled). This mode watches for changes, outputs to the dist folder and live reloades the page.

### Test
`npm run test` - Runs lint tests (+ additional unit and e2e tests can be added here as needed)
`npm run lint` - Runs eslint and stylelint tests
`npm run lint:js` - Runs eslint test
`npm run lint:css` - Runs stylelint test

### Tools
`npm run generate:images` - Create a placeholder image (Edit `tools/image-generator.js` to change the image size)

### File Structure
`src` file structure
```
|-css/
|-images/
|-js/index.js
|-index.html
|-favicon.png
```

`dist` file structure
```
/* All files minified & gzipped */
|-css/main.css
|-images/
|-js/index.js
|-index.html
|-[favicons]
```
