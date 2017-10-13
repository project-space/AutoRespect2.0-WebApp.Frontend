const path = require('path');

module.exports = {
    entry: { 
        app: './src/app.jsx' 
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'wwwroot')
    },
    module: {
        rules: [{
                loader: 'babel-loader',
                test: /\.(jsx|js)$/,
                exclude: /node_modules/
            }, {
                loader: 'file-loader',
                test: /\.html$/,
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    }
}