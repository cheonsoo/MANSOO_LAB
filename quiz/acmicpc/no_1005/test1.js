var r = {
    "1": {
        "time": 10,
        "2": {
            "time": 20,
            "4": {
                "time": 5,
                "5" : {
                	"time" : 8,
                	"7" : {
                		"time" : 1,
                		"8" : {
                			"time" : 43
                		}
                	}
                }
            }
        }
    },
    "3": {
        "time": 1,
        "6": {
            "time": 7,
            "7": {
                "time": 1,
                "8": {
                    "time": 43
                }
            }
        }
    }
}
var goal = "7";


var result = [];

function run( _r, time ) {

	if ( _r[ goal ] !== undefined ) {
		// console.log( _r[ goal ] );
		var sum = time + _r[ goal ][ "time" ]
		console.log( "sum : " + sum );
		return sum;
	}

	for ( var key in _r ) {
		// console.log( key );
		run( _r[ key ], ( time + _r[ key ][ "time" ] ) );
	}
}

run( r, 0 );

// console.log( r[ "11" ] );

// for ( var key in r ) {
	// var sum = run( r[ key ] );
	// console.log( sum );
// }

// var sum = run( r );
// console.log( sum, 0 );