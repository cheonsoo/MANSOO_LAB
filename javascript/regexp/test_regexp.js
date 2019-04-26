var str = window.document.body.innerHTML;

var reg = new RegExp( "url\((.*?)\.png\)", "gi" );

str.match( reg );



var str = window.document.body.innerHTML;
var reg = /url\((.*?)\.png\)/gi;
str.match( reg );



var str = window.document.body.innerHTML;
var reg = /\/\/\S+(\.png|\.jpg)/gi;
str.match( reg );