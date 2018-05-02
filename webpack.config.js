const path = require('path');

const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  styles: path.join(__dirname, 'style')
};

const common = {
  entry: {
    src: PATHS.src
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html'
    })
  ],
  module: {
    rules: [{
      test: /.jsx?$/,
      use: [
        { loader: 'babel-loader' }
      ],
      include: PATHS.src
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      //windows and vm users may need alternative host and port settings
      host: process.env.HOST,
      port: process.env.PORT
    },
    module: {
      rules: [{
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          // { loader: 'postcss-loader', options: { parser: 'sugarss', exec: true } }
        ],
        include: PATHS.styles
      },
      {
        test: /\.scss$|.sass$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          // { loader: 'postcss-loader', options: { parser: 'sugarss', exec: true } },
          { loader: 'sass-loader' }
        ],
        include: PATHS.styles
      }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    mode: 'production',
    module: {
      rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
        include: PATHS.styles
      },
      {
        test: /\.scss$|.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader"
        }),
        include: PATHS.styles
      }
      ]
    },
    plugins: [
      new ExtractTextPlugin("styles.css"),
      new CleanWebpackPlugin([PATHS.build]),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      })
    ]
  });
}