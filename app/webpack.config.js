/** Webpack Config
 *
 * @package Webapplication
 * @module Webpack
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-05-11
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */

// Import
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', // 'production',

    // Instructions, how to build the application
    entry: {
        index: './src/index.js',
        // other: './src/other.js'
    },

    // Instructions, how to export the application
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js' // index.js, other.js
    },

    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            // {}, for more loader, i.e. images, fonts, sass ...
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
    ],

}