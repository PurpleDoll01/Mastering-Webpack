const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js'),
        contact: path.resolve(__dirname, 'src/js/contact.js'),
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
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,  
                //esto no va a ser interpretado por babel  
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader', 
                    options: {
                       limit: 90000, 
                       //limita el tamaño de los archivos
                    }                    
                }        
            }, 
            {
                test: /\.css$/,
                use: [
                 'style-loader',
                  {
                      loader: 'css-loader',
                      options: {
                          importLoaders: 1 
                      }
                  },
                 'postcss-loader'  
                ]          
            },
            {
                test: /\.less$/,
                use: [
                  'style-loader',
                  'css-loader',
                  // esto nos permite poner un css dentro de js. Agarra todo lo que sea .css
                  'less-loader'  
                ]          
            },
            {
                test: /\.scss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  // esto nos permite poner un css dentro de js. Agarra todo lo que sea .css
                  'sass-loader'
                ]          
            },
            {
                test: /\.styl$/,
                use: [
                  'style-loader',
                  'css-loader',
                  // esto nos permite poner un css dentro de js. Agarra todo lo que sea .css
                  'stylus-loader'
                ]          
            }  
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //Este plugin permite que se recarguen solo los modulos y no toda la página
        new HtmlWebpackPlugin({
            title: 'webpack-dev-server',
            //Este es el título que tiene el HTML por dentro 
            template: path.resolve(__dirname, 'index.html')
            //estamos utilizando el html como template
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        })
    ],
}