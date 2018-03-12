import path from 'path';
import config from './webpack.config.babel';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import NodeExternals from 'webpack-node-externals';
import FlowBabelWebpackPlugin from 'flow-babel-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const production = process.env.NODE_ENV === 'production';

config.target = 'node';
config.externals = [NodeExternals()];
config.entry = path.join(__dirname, './src/app.jsx');
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
config.plugins.push(new ExtractTextPlugin({ filename: '[name].css', allChunks: true }));
config.module.rules = config.module.rules.filter((rule) => {
  return !(
    rule.test === /\.css$/
  );
});
config.module.rules.push({
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: production ? '[hash:base64]' : '[name]-[local]-[hash:8]',
          sourceMap: !production,
        },
      },
      'postcss-loader',
    ],
  }),
});

module.exports = config;
