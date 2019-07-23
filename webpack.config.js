const path = require('path');

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
    ],

    strictExportPresence: true,
  },

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
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  bail: true,
};

module.exports = env => {
  return settings;
};
