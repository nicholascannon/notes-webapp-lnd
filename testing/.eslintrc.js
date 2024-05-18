/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['unused-imports'],
    rules: {
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                },
                'newlines-between': 'never',
                groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
            },
        ],
        'import/no-default-export': 'error',

        // Allow variables prefixed with underscore to be unused
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
    },
    overrides: [
        {
            // Config Files
            files: '*.js',
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
    ignorePatterns: ['node_modules/**'],
    settings: {
        'import/resolver': {
            typescript: true,
            node: true,
        },
    },
    env: {
        browser: true,
        node: true,
    },
};
