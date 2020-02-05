const path = require('path');

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js')
    },
    mode: 'development',
        // Activa el modo de desarrollo.
    output: {
        path: path.resolve(__dirname, 'dist'),
        // en que directorio voy a mandar mi archivo final
        filename: 'js/[name].js'
        // nombre del archivo correspondiente a cada uno de los entrys 
    },
    module: {
        rules: [
           {
              test: /\.css$/,
              use: [
                'style-loader',
                //inyecta el css en el html
                'css-loader'
                // esto nos permite poner un css dentro de js. Agarra todo lo que sea .css
              ]          
           } 
        ]
    }
}