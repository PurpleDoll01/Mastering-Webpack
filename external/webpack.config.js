const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../index.js'),
    mode: 'development',
        // Activa el modo de desarrollo.
    output: {
        path: path.resolve(__dirname, 'dist'),
        // en que directorio voy a mandar mi archivo final
        filename: 'bundle.js'
        // nombre del archivo 
    }
}