var start = new Date().getTime();
var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');

var num_testcase = parseInt( input.splice( 0, 1 )[ 0 ] );
console.log( `num_testcase : ${num_testcase}` );

for ( var f=0; f<num_testcase; f++ ) {

	var str = input.splice( 0, 1 )[ 0 ].split( " " );
	var numOfBuildings = parseInt( str[ 0 ] );
	var numOfRules = parseInt( str[ 1 ] );

	console.log( `numOfBuildings : ${numOfBuildings}, numOfRules : ${numOfRules}` );

	var times = [];
	var buildingTimes = input.splice( 0, 1 )[ 0 ].split( " " );
	for ( var k=0; k<numOfBuildings; k++ ) {
		times.push( parseInt( buildingTimes[ k ] ) );
	}
	console.log( `buildingTimes : ${buildingTimes}` );

	var rules = [];
	for ( var i=0; i<numOfRules; i++ ) {
		rules.push( input.splice( 0, 1 )[ 0 ] );
	}

	var goal = input.splice( 0, 1 )[ 0 ];
	console.log( `goal : ${goal}` );

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
	}

	console.log( `max_time : ${max_time}` );
}



function get( path, rules ) {

	if ( rules.length == 0 ) {
		return -1;
	}

	var last = path[ path.length - 1 ];

	if ( last == goal ) {
		var time_for_this_path = 0;
		for ( var t=0; t<path.length; t++ ) {
			time_for_this_path += times[ parseInt( path[ t ] ) - 1 ];
		}

		if ( max_time <= time_for_this_path ) {
			max_time = time_for_this_path;
		}

		return path;
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

