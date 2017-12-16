/**
 * Created by lengxuepizi on 2017/12/16.
 */
var path=require("path",function(){
});
var Htmlwebpackplugin=require("html-webpack-plugin");
var extracttextplugin=require("extract-text-webpack-plugin");
module.exports={
    entry:"./webpack.entry.js",
    output:{
        filename:"webpack.bundle.js",
        path:path.resolve(__dirname,"./build")
        //piblicPath:""
    },
    context:__dirname,
    module:{
            rules:[
                {
                    test:/\.css$/,
                    use:["style-loader","css-loader"]
                },
                {
                    test:/\.(jpg|png)$/,
                    use:["url-loader?limit=10000&name=img/[name].[ext]"]
                },
                {
                    test:/\.html$/,
                    use:["html-loader"]
                }
        ]
    },
    plugins:[
            new Htmlwebpackplugin({
                template:"./src/index.html",
                filename:"index.html"
            }),
             new extracttextplugin("style.css")
    ]
};