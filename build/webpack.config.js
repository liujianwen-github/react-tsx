/* build/webpack.config.js */
var path = require('path')
const config = {
    entry: './src/index.tsx',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, '../public'),
        publicPath: '/assets'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [
            // '',
            '.webpack.js',
            '.web.js',
            '.ts',
            '.tsx',
            '.js'
        ]
    },
    module: {
        loaders: [{
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ],
    },
    devtool: 'eval'
}
module.exports = config