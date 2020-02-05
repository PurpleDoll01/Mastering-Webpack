const path = require('path');

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js'),
        precios: path.resolve(__dirname, 'src/js/precios.js'),
        contacto: path.resolve(__dirname, 'src/js/contacto.js')
    },
    mode: 'development',
        // Activa el modo de desarrollo.
    output: {
        path: path.resolve(__dirname, 'dist'),
        // en que directorio voy a mandar mi archivo final
        filename: 'js/[name].js'
        // nombre del archivo correspondiente a cada uno de los entrys 
    }
}