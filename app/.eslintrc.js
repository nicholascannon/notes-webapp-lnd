/** @type {import('eslint').Linter.Config} */
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    rules: {
        // https://emotion.sh/docs/eslint-plugin-react
        'react/no-unknown-property': ['error', { ignore: ['css'] }],
        // https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',

        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                },
                'newlines-between': 'always',
                groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
            },
        ],
    },
    env: {
        browser: true,
        node: true,
    },
    ignorePatterns: ['node_modules/**', 'dist'],
    overrides: [
        {
            files: '*.js',
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: true,
            node: true,
        },
    },
};
