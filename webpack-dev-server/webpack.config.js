const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
    devServer: {
        hot: true,
        //Con esto activamos el hot module replacement
        open: true,
        //se abre automáticamente
        port: 9000,
    },
    module: {
        rules: [
           {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
                // esto nos permite poner un css dentro de js. Agarra todo lo que sea .css
              ]          
           } 
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //Este plugin permite que se recarguen solo los modulos y no toda la página
        new HtmlWebpackPlugin({
            title: 'webpack-dev-server'
            //Este es el título que tiene el HTML por dentro 
        }),
    ]
}