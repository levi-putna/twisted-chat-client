const fs = require('fs-extra');
const uglifyjs = require('uglify-js');
const dotEnv = require('dotenv');

// Load the environment variables from .env.production file
dotEnv.config({ path: '.env.production' });

// Read the input file
const inputFile = 'src/loader/loader.js';
let inputCode = fs.readFileSync(inputFile, 'utf8');

// Replace the value of "widgetUrl" with the environment variable value
const widgetUrlEnvVar = process.env.WIDGET_URL;
if (widgetUrlEnvVar) {
    inputCode = inputCode = inputCode.replace(/const widgetUrl = '(.*)';/, `const widgetUrl = '${widgetUrlEnvVar}';`);
}

// Minify the code
const minifiedCode = uglifyjs.minify(inputCode).code;

// Write the output file
const outputFile = 'build/static/js/loader.min.js';
fs.outputFileSync(outputFile, minifiedCode);

console.log(`Loader built: ${outputFile}`);
