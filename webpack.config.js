const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackHookPlugin = require('webpack-hook-plugin');

const settings = {
  mode: 'development',
  watch: true,
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },

  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    forceAllTransforms: true,
                    targets: {
                      node: 'current',
                    },
                    useBuiltIns: 'usage',
                    modules: false,
                    loose: true,
                    corejs: 3,
                  },
                ],
                '@babel/preset-react',
                [
                  '@babel/preset-typescript',
                  {
                    isTSX: true,
                    allExtensions: true,
                  },
                ],
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                [
                  'babel-plugin-transform-react-remove-prop-types',
                  {removeImport: true},
                ],
                [
                  '@babel/plugin-transform-runtime',
                  {
                    helpers: false,
                    regenerator: true,
                  },
                ],
                '@babel/plugin-syntax-dynamic-import',
              ],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
            },
          },
          {
            loader: require.resolve('css-loader'),
            options: {importLoaders: 2, sourceMap: false},
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('tailwindcss'),
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009',
                  },
                  stage: 3,
                }),
                require('postcss-import'),
              ],
              sourceMap: false,
            },
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
              sourceMap: false,
            },
          },
        ],
      },
    ],

    strictExportPresence: true,
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new WebpackHookPlugin({
      onBuildExit: ['node dist/index.js'],
    }),
  ],

  externals: {
    fs: 'commonjs fs',
    path: 'commonjs path',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
  },

  entry: {
    index: ['./src/index.tsx'],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css', '.json'],
  },

  bail: true,
};

module.exports = env => {
  return settings;
};
