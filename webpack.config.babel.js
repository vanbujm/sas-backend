import path from 'path';

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
  resolve: {
    extensions: ['.js', '.ts']
  }
};
