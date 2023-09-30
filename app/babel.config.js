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
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
};
