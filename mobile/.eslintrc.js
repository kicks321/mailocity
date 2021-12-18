module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jest/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    plugins: ['react', 'prettier', 'react-hooks', '@typescript-eslint'],
    rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        'no-empty-function': 'off',
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unsafe-assignment': 0,
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'prettier/prettier': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    ignorePatterns: [
        'node_modules',
        'babel.config.js',
        'metro.config.js',
        'jest.config.js',
        'eslintrc.js',
    ],
};
