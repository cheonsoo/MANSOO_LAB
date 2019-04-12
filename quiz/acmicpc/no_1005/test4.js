var start = new Date().getTime();

var rules = [
	"1 2",
	"1 3",
	"2 3",
	"2 4",
	"3 5",
	"3 6"
];

var map = {
	"1" : {
		"nodes" : {}
	},
	"2" : {
		"nodes" : {}
	},
	"3" : {
		"nodes" : {}
	},
	"4" : {
		"nodes" : {}
	},
	"5" : {
		"nodes" : {}
	},
	"6" : {
		"nodes" : {}
	}
};

var goal = "6";

/*
for ( var key in map ) {

	// console.log( key );

	for ( var i=0; i<rules.length; i++ ) {

		let rule = rules[ i ].split( " " );

		if ( key == rule[ 0 ] ) {
			map[ key ][ rule[ 1 ] ] = {};
		}
	}
}
*/

function get( path, rules ) {

	_rules = JSON.parse( JSON.stringify( rules ) );

	var lastBuilding = path.split( "," );
		lastBuilding = lastBuilding[ lastBuilding.length - 1];

	if ( rules.length == 0 ) {
		console.log( path );
		return 1;
	}

	if ( lastBuilding == goal ) {
		console.log( path );
		return 1;
	}
	
	debugger;
	for ( var i=0; i<_rules.length; i++ ) {

		var rule = _rules[ i ].split( " " );
		
		_rules.splice( 0, 1 );
		if ( lastBuilding == rule[ 0 ] ) {
			get( path + "," + rule[ 1 ], _rules[ i ] );
		} else {
			get( path, _rules[ i ] );
		}
	}
}

// var path = [ "1" ];
let tmp = JSON.parse( JSON.stringify( rules ) );
get( "1", tmp );








console.log( `exe time : ${new Date().getTime() - start}` );