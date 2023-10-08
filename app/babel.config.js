/** @type {import('@babel/core').TransformOptions} */
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    esmodules: true,
                },
            },
        ],
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
                importSource: '@emotion/react', // https://emotion.sh/docs/css-prop#babel-preset
            },
        ],
        '@babel/preset-typescript',
    ],
    plugins: ['@emotion/babel-plugin'],
};
