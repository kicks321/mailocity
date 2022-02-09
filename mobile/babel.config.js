module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
            root: ['./'],
            extensions: [
                '.js',
                '.tsx',
                '.ts',
                '.ts',
                '.ios.js',
                '.ios.ts',
                '.android.js',
                '.android.ts',
                '.json',
            ],
            alias: {
                // TSX
                '@Views': './src/Views',
                '@ViewModels': './src/ViewModels',
                '@Components': './src/Components',
                '@Core': './src/Core',
                '@Navigation': './src/Navigation',

                // Redux
                '@Store': './src/Store',
                '@Actions': './src/Store/Actions',
                '@Reducers': './src/Store/Reducers',
                '@Middleware': './src/Store/Middleware',
                '@ActionTypes': './src/Store/ActionTypes',

                // Types
                '@Interfaces': './src/Interfaces',
                '@Types': './src/Types',

                // Services
                '@API': './src/API',
                '@Configuration': './src/Configuration',

                // Assets
                '@Assets': './assets',
            },
        },
    ],
    ],
    env: {
      production: {
          plugins: ['react-native-paper/babel'],
      },
  },
  };
  
};
