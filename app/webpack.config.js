const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV = process.env.NODE_ENV === 'development';

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: DEV ? 'development' : 'production',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: DEV ? 'static/[name].js' : 'static/[name].[chunkhash:8].js',
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 3000,
        watchFiles: ['./src/*'],
        hot: true,
    },
    devtool: DEV ? 'source-map' : undefined,
    optimization: {
        minimize: !DEV,
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|jsx|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
