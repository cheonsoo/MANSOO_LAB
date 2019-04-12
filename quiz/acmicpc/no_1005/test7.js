var start = new Date().getTime();

var goal = "6"
var rules = [
	"1 2",
	"1 3",
	"2 3",
	"2 4",
	"3 5",
	"3 6"
];
/*
1 2 3 4 5 6

1 2 3 5 : 11
1 2 4 : 6
1 3 5 : 9
1 2 3 6 : 12
*/


var path = [];

// for ( var i=0; i<1; i++ ) {
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

	// console.log( `path : ${path}` );
	// console.log( `rules : ${rules}` );
	// debugger;

	if ( rules.length == 0 ) {
		return -1;
	}

	var last = path[ path.length - 1 ];
	// var rule = rules[ 0 ].split( " " );

	if ( last == goal ) {
		console.log( `### result : ${path}` );
		return path;
	}

	// if ( path[ path.length - 1 ] == rule[ 0 ] ) {
	// 	path.push( rule[ 1 ] );
	// 	rules.splice( 0, 1 );
	// }

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

