var integerToNumberInt = function( obj ) {

    if ( !obj || ( obj.constructor.name.toLowerCase() != "object" && obj.constructor.name.toLowerCase() != "array" ) ) {
        console.log( "not valid type" );
        return;
    }

    for ( i in obj ) {

        if ( !obj[ i ] && obj[ i ] != 0 ) {
            continue;
        }

        if ( obj[ i ].constructor.name.toLowerCase() == "number" && Number.isInteger( obj[ i ]) ) {
            obj[ i ] = NumberInt( obj[ i ] );
        } else if ( obj[ i ].constructor.name.toLowerCase() == "object" ) {
            integerToNumberInt( obj[ i ] );
        } else if ( obj[ i ].constructor.name.toLowerCase() == "array" ) {
            integerToNumberInt( obj[ i ] );
        }

    }

}