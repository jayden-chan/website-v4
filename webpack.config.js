const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackHookPlugin = require('webpack-hook-plugin');

const config = require('./config');

const settings = {
  module: {
    rules: [
      {
        test: /\.toml$/,
        use: {loader: 'toml-loader'},
      },
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
        ],
      },
    ],

    strictExportPresence: true,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new WebpackHookPlugin({
      onBuildExit: ['node dist/generator.js'],
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
    generator: ['./src/generator.tsx'],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css', '.json'],
  },

  bail: true,
  mode: 'development',
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
};

module.exports = env => {
  let PRINT_MODE = false;
  switch (env) {
    case 'resume':
      PRINT_MODE = true;
      break;
    case 'dev':
      settings.watch = true;
      settings.watchOptions = {
        ignored: /node_modules/,
      };
      break;
    default:
  }

  settings.plugins.unshift(new webpack.DefinePlugin(config(PRINT_MODE)));
  settings.module.rules[2].use.push({
    loader: require.resolve('sass-loader'),
    options: {
      sourceMap: false,
      data: `$background:${config(PRINT_MODE).BACKGROUND_COLOR};$text-color:${
        config(PRINT_MODE).TEXT_COLOR
      };`,
    },
  });

  return settings;
};
