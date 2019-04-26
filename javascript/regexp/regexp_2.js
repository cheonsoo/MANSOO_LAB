var url = "onsight-umma.cn";

// var reg = /^([^\ ]*\ /)[/]?(.*)/gi;
var reg = new RegExp(/^([^\ ]*\ /)[/]?(.*)/, 'i');

var result = url.match( reg );
console.log( result );

