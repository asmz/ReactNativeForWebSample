const path = require('path');
const webpack = require('webpack');

const appDirectory = path.resolve(__dirname, './');

module.exports = {
  mode: 'production',
  entry: path.resolve(appDirectory, 'index.web.js'),  // エントリとなるJS
  output: {
    // 最終的に docs/bundle.web.js に出力
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'docs')
  },
  module: {
    rules: [
      {
        // ts-loaderを利用する設定
        test: /\.(tsx?)$/,
        exclude: [ '/node_modules/' ],
        use: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: [ '.web.js', '.js', '.ts', '.web.ts', '.tsx', '.web.tsx' ],
    alias: {
      // POINT:
      // Webpackビルドでは'react-native'は'react-native-web'として名前解決
      'react-native': 'react-native-web'
    }
  },
  devServer: {
    port: 8888,
    contentBase: path.resolve(appDirectory, 'docs')
  }
}
