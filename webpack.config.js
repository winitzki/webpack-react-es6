var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: path.resolve(ROOT_PATH, 'app/index'),
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(ROOT_PATH, 'app')
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Kanban app'
    })
  ]
};