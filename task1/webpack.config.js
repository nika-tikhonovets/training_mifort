const path = require('path');

module.exports = {
    entry: './scripts/verify_string.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};