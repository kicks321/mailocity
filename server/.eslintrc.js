module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['tsconfig.json'],
    },
    plugins: ['prettier', 'jest', 'testing-library', '@typescript-eslint'],
    rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        'no-empty-function': 'off',
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/unbound-method': 'error',
        'prettier/prettier': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
    },
    overrides: [
        {
            // Jest and @typescript-eslint plugin overrides for test files
            files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
            plugins: ['jest', '@typescript-eslint'],
            rules: {
                // you should turn the original rule off *only* for test files
                '@typescript-eslint/unbound-method': 'off',
                'jest/unbound-method': 'off',
            },
        },
        {
            // Enable eslint-plugin-testing-library rules or preset only for matching files
            files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
            rules: {
                'testing-library/await-async-query': 'error',
                'testing-library/no-await-sync-query': 'error',
                'testing-library/no-debugging-utils': 'warn',
            },
        },
    ],
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
