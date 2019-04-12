var rules = [
	"1 2",
	"1 3",
	"2 3",
	"2 4"
];

var goal = "4";

var path = [];

function getMap( rules, goal, path ) {

	// 처음 진입 시
	if ( path ) {
		path.push( rules[ 0 ].split( " " )[ 0 ] );
		path.push( rules[ 0 ].split( " " )[ 1 ] );

		rules = rules.splice( 0, 1 );
		return getMap( rules, goal, path );
	}

	for ( var i=0; i<rules.length; i++ ) {

		// 
	}
}

getMap( rules, goal, path );