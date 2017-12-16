/**
 * Created by lengxuepizi on 2017/12/16.
 */
/**
 * The webpack configuration file conforms to the commonJS module specification
 * the webpack configuration file is the most important file.
 * This module is mainly has two parts,the one part is mainly introduced some
 * dependency module by require function.the another one part is the configuration
 * module to define some should to be defined.
 * */
//Introduced the path module to parse the relative path
var path=require("path");
//Introduced the plug-ins to simplify generated html
var Htmlwebpackplugin=require("html-webpack-plugin");
//Introduced the plug-ins to extract generated css
var extracttextplugin=require("extract-text-webpack-plugin");
//webpack configuration
module.exports={
    //entrance file,packed according to this
    //type:string|array|object
    entry:"./webpack.entry.js",
    //export file,
    //define output file and path
    //it is better to have one output file
    output:{
        filename:"webpack.bundle.js",
        path:path.resolve(__dirname,"./build")//requires the absolute path
        //piblicPath:""
    },
    //the base directory to parse the entry optoion,which must comtain the entry file
    context:__dirname,
    //loader module to define function to deal the different type module
    //etc:style-loader¡¢css-loader¡¢html-loader
    //loading this loader file by npm install xxxxx --save-dev
    module:{
            rules:[
                //deal css file
                {
                    test:/\.css$/,
                    use:["style-loader","css-loader"]
                },
                //deal .png or .jpg images file
                {
                    test:/\.(jpg|png)$/,
                    //limit parameter refers to the images size
                    //img/ resfers to the image storage path
                    //name parameter refers to the naming format of the image file
                    use:["url-loader?limit=10000&name=img/[name].[ext]"]
                },
                //deal html file
                {
                    test:/\.html$/,
                    use:["html-loader"]
                }
        ]
    },
    //webpack plug-ins
    //etc:html-webpack-plugin¡¢extract-text-webpack-plugin
    plugins:[
        //create html file
            new Htmlwebpackplugin({
                template:"./src/index.html",
                filename:"index.html"
            }),
        //create css file
             new extracttextplugin("style.css")
    ]
};