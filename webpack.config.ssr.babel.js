import path from 'path';
import config from './webpack.config.babel';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import NodeExternals from 'webpack-node-externals';
import FlowBabelWebpackPlugin from 'flow-babel-webpack-plugin';

config.target = 'node';
config.externals = [NodeExternals()];
config.entry = path.join(__dirname, './src/index.ssr.js');
config.output.path = path.join(__dirname, './public');
config.output.filename = 'ssr.js';
config.output.libraryTarget = 'commonjs2';
config.output.publicPath = '/';
config.plugins = config.plugins.filter((plugin) => {
  return !(
    plugin instanceof HtmlWebpackPlugin ||
    plugin instanceof FlowBabelWebpackPlugin
  );
});

module.exports = config;
