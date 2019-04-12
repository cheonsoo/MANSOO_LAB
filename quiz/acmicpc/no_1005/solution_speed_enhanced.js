var start = new Date().getTime();
var fs = require('fs');
var input = fs.readFileSync('input4.txt').toString().split('\n');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var num_testcase = parseInt( input.splice( 0, 1 )[ 0 ] );

for ( var f=0; f<num_testcase; f++ ) {

	var str = input.splice( 0, 1 )[ 0 ].split( " " );
	var numOfBuildings = parseInt( str[ 0 ] );
	var numOfRules = parseInt( str[ 1 ] );

	var times = [];
	var buildingTimes = input.splice( 0, 1 )[ 0 ].split( " " );
	for ( var k=0; k<numOfBuildings; k++ ) {
		times.push( parseInt( buildingTimes[ k ] ) );
	}

	var rules = [];
	for ( var i=0; i<numOfRules; i++ ) {
		rules.push( input.splice( 0, 1 )[ 0 ] );
	}

	var goal = input.splice( 0, 1 )[ 0 ];

	var path = [];
	var max_time = 0;
	for ( var i=0; i<rules.length; i++ ) {
		var _rules = JSON.parse( JSON.stringify( rules ) );
		var _path = JSON.parse( JSON.stringify( path ) );
		var rule = _rules[ i ].split( " " );
		_path.push( rule[ 0 ] );
		_path.push( rule[ 1 ] );
		_rules.splice( i, 1 );

		getPath( _path, _rules );
	}

	console.log( max_time );
}

function getPath( path, rules ) {

	// console.log( `path : ${path}` );
	// console.log( `rules : ${rules}` );

	var last = path[ path.length - 1 ];
	
	if ( last == goal ) {
		var time_for_this_path = 0;
		for ( var t=0; t<path.length; t++ ) {
			time_for_this_path += times[ parseInt( path[ t ] ) - 1 ];
		}

		if ( max_time <= time_for_this_path ) {
			max_time = time_for_this_path;
		}

		// console.log( `### time for path [ ${path} ] : ${time_for_this_path}` );
		// console.log( `### max_time : ${max_time}`);

		return path;
	}

	if ( rules.length == 0 ) {
		return -1;
	}

	for ( var i=0; i<rules.length; i++ ) {

		var rule = rules[ i ].split( " " );
		
		if ( last == rule[ 0 ] ) {

			if ( path.indexOf( rule[ 0 ] == -1 ) && path.indexOf( rule[ 1 ] == -1 ) ) {

				var _rules = JSON.parse( JSON.stringify( rules ) );
				var _path = JSON.parse( JSON.stringify( path ) );
				_path.push( rule[ 1 ] );
				_rules.splice( i, 1 );
				getPath( _path, _rules );
			}
		}
	}
}


console.log( `exe time : ${new Date().getTime() - start}` );