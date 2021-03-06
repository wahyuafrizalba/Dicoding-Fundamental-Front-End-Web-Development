const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
 
module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   }
               ]
           },
           {
               test: /\.html$/,
               use: ['html-loader']
           },
           {
               test:/\.png$/,
               use:[
                   {
                       loader: 'file-loader',
                       options: {
                           name: '[name].[ext]',
                           outputPath: '/src/images',
                       }
                   }
               ]
           }
       ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
       }),
       new CleanWebpackPlugin(),
   ]
}