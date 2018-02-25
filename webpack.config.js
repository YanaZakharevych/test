var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

var browserConfig = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}

var serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: 'babel-loader'
    },
  ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]