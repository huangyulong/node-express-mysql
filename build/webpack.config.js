const path = require('path')
const devConfig = require('./webpack-dev-config.js')
const proConfig = require('./webpack-pro-config.js')
const merge = require('webpack-merge')

const commonConfig = {
    // mode: process.env.NODE_ENV,
    mode: 'production',
    entry: {
        server: path.join(__dirname, '../index.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name]-[hash].js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [path.join(__dirname, '../node_modules')]
            }
        ]
    }
}

// var config ;

// if(process.env.NODE_ENV === 'development') {
//     config = merge(commonConfig, devConfig)
// }else if(process.env.NODE_ENV === 'product') {
//     config = merge(commonConfig, proConfig)
// }

module.exports = commonConfig


