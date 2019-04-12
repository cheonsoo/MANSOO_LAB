var start = new Date().getTime();

var goal = "3"
var times = [ 100, 100, 100 ];
var rules = [
	"1 2",
	"2 3"
];
/*
1 2 3 4 5 6

1 2 3 5 : 11
1 2 4 : 6
1 3 5 : 9
1 2 3 6 : 12
1 3 6 : 9
*/


var path = [];
var max_time = 0;
for ( var i=0; i<rules.length; i++ ) {
	var _rules = JSON.parse( JSON.stringify( rules ) );
	var _path = JSON.parse( JSON.stringify( path ) );
	var rule = _rules[ i ].split( " " );
	_path.push( rule[ 0 ] );
	_path.push( rule[ 1 ] );
	_rules.splice( i, 1 );

	get( _path, _rules );
	console.log( "==================================================" );
}

function get( path, rules ) {

	console.log( `path : ${path}` );
	console.log( `rules : ${rules}` );

	var last = path[ path.length - 1 ];
	debugger;
	if ( last == goal ) {
		console.log( `### result : ${path}` );
		var time_for_this_path = 0;
		debugger;
		for ( var t=0; t<path.length; t++ ) {
			time_for_this_path += times[ parseInt( path[ t ] ) - 1 ];
		}

		if ( max_time <= time_for_this_path ) {
			max_time = time_for_this_path;
		}

		console.log( `### time for path ${path} : ${time_for_this_path}` );
		console.log( `### max_time : ${max_time}`);

		return path;
	}

	if ( rules.length == 0 ) {
		return -1;
	}

	for ( var i=0; i<rules.length; i++ ) {

		var rule = rules[ i ].split( " " );
		
		if ( last == rule[ 0 ] ) {
			var _rules = JSON.parse( JSON.stringify( rules ) );
			var _path = JSON.parse( JSON.stringify( path ) );
			_path.push( rule[ 1 ] );
			_rules.splice( i, 1 );
			get( _path, _rules );
		}
	}
}

