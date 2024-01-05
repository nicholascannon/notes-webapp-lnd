const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const buildDir = path.resolve(__dirname, 'dist');

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: './src/index.tsx',
    output: {
        path: buildDir,
        filename: isDev ? 'static/[name].js' : 'static/[name].[chunkhash:8].js',
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
    },
    devServer: {
        static: buildDir,
        port: 3000,
        watchFiles: ['./src/*'],
        hot: true,
    },
    devtool: isDev ? 'source-map' : undefined,
    optimization: {
        minimize: !isDev,
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
    plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
};
