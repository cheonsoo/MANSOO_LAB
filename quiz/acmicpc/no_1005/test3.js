function getPath( path, rules ) {

	if ( rules.length == 0 ) {
		console.log( path );
		return path;
	}

	if ( path[ path.length - 1 ] == goal ) {
		console.log( path );
		return path;
	}

	var lastBuilding = path[ path.length - 1]
	var rule = rules[ 0 ].split( " " );
	if ( lastBuilding == rule[ 0 ] ) {
		path.push( rule[ 1 ] );
		rules.splice( 0, 1 );
		return getPath( path, rules );
	} else {
		rules.splice( 0, 1 );
		return getPath( path, rules );
	}
}


var rules = [
	"1 2",
	"1 3",
	"2 3",
	"2 4",
	"3 5",
	"3 6"
];

var path = [ "1", "2" ];
var goal = "6";

for ( var i=0; i<rules.length; i++ ) {

	var tmp = JSON.parse( JSON.stringify( rules ) );

	getPath( path, tmp );
}



