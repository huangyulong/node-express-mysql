const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        server: path.join(__dirname, '../index.js')
    },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()
    // ],
    // devServer: {
    //     contentBase: path.join(__dirname, '../dist'),
    //     port: 3000,
    //     host: '0.0.0.0',
    //     hot: true
    // }
}