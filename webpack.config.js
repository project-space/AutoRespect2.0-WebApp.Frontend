const path = require('path');
const extractCss = require('extract-text-webpack-plugin');

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
                use: extractCss.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
                test: /\.css$/
            }, {
                loader: 'url-loader',
                test: /\.(jpg|png)$/
            }
        ]
    },

    plugins: [
        new extractCss ('[name].css')
    ]
}