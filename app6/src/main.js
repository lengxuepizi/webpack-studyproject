/**
 * Created by lengxuepizi on 2017/12/16.
 */
var $=require("jquery");
require(["./hello.js","jquery"],function(HEllo,$){
    HEllo.hello();
    $("body").append("<h2> the title is added by JS</h2>");
});