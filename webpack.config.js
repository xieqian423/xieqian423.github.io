const path = require('path');

module.exports = {
    entry: './js/init/InitSys.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
