const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
       modules: [
           'react',
           'react-dom'
       ] 
    },
    mode: 'development',
        // Activa el modo de desarrollo.
    output: {
        path: path.resolve(__dirname, 'dist'),
        // en que directorio voy a mandar mi archivo final
        filename: 'js/[name].js',
        library: '[name]',
        //Esta conf es para enlazar este javascript con nuestro código 
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.join(__dirname, '[name]-manifest.json')
        })
    ],
}