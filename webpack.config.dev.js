const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.js'),
    module: {
        rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
    },
    resolve: {
        extensions: ['.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        compress: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 3000,
    },
};
