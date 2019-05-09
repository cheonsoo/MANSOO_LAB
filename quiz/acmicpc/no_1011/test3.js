function run( x, y ) {
    
    var distance = y - x;
    var sqrt = Math.sqrt( distance );
    
    var min_range = Math.pow( Math.floor( sqrt ), 2 ); // 9
    var max_range = Math.pow( Math.ceil( sqrt ), 2 ); // 16
    
    var result = 0;
    if ( Number.isInteger( sqrt ) ) {
        // N * 2 - 1
        result = sqrt * 2 - 1;
    } else if ( min_range < distance && distance <= ( min_range + Math.floor( sqrt ) ) ) {
        // N * 2
        result = Math.floor( sqrt ) * 2;
    } else if ( ( min_range + Math.floor( sqrt ) ) < distance && distance <= max_range ) {
        // N * 2 - 1
        result = Math.ceil( sqrt ) * 2 - 1;
    }
    
    console.log( result );
}

run( 0, 16 );