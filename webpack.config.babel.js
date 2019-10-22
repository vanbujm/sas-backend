import path from 'path';
import ZipPlugin from 'zip-webpack-plugin';

export default {
  target: 'node',
  entry: {
    app: ['./src/index.ts']
  },
  watchOptions: {
    ignored: /node_modules/
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  },
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|ts)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [new ZipPlugin()],
  resolve: {
    extensions: ['.js', '.ts']
  }
};
