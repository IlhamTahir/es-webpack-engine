'use strict';var _webpack=require('webpack');var _webpack2=_interopRequireDefault(_webpack);var _progressBarWebpackPlugin=require('progress-bar-webpack-plugin');var _progressBarWebpackPlugin2=_interopRequireDefault(_progressBarWebpackPlugin);var _webpack3=require('./webpack.base');var _webpack4=_interopRequireDefault(_webpack3);var _logger=require('./config/logger');var _logger2=_interopRequireDefault(_logger);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_logger2.default.info('building for production...');var compiler=(0,_webpack2.default)(_webpack4.default,function(err,stats){if(err)throw err;});compiler.apply(new _progressBarWebpackPlugin2.default());