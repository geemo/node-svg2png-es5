'use strict';

const fs = require("pn/fs"); // https://www.npmjs.com/package/pn
const svg2png = require("..");
const path = require('path');

fs.readFile(path.resolve(__dirname, './inputs/width-height-viewbox.svg'))
    .then(svg2png)
    .then(buffer => fs.writeFile(path.resolve(__dirname, "./dest.png"), buffer))
    .catch(e => console.error(e));
