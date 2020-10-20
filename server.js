'use strict';

const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack');

const SERVER_PORT = 3000;

new WebpackDevServer(webpack(webpackConfig), {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    disableHostCheck: true,
    hot: true,
    stats: {
        assets: false,
        hash: false,
        modules: false,
        errors: true,
        warnings: true,
        chunks: false,
        chunkModules: false,
        chunkOrigins: false,
        children: false
    }
}).listen(SERVER_PORT, '0.0.0.0');
