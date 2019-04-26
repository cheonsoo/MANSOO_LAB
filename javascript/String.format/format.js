var format = function ( str, args  ) {
    var formatted = str;
    for ( var i=0; i<args.length; i++ ) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        if ( !args[ i ] ) {
        	continue;
        }
        formatted = formatted.replace( regexp, args[ i ] );
    }
    return formatted;
};

var str = "{0}{1}{2}{3}";
var str_converted = format(str, [ "a", null, "c", null ]);

console.log(str_converted);