const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge.merge(commonConfig, {
    mode: 'development' // 开发环境
});