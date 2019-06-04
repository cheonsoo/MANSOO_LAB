function solution( image ) {

    /**
     * Check every position near by and set value as 0 not to check it again
     */
    function findPath_type1( arr_type1, x, y ) {

        let compare;

        // check top
        if ( ( x - 1 ) >= 0 ) {
            compare = arr_type1[ x - 1 ][ y ];
            if ( compare == 1 ) {
                arr_type1[ x - 1 ][ y ] = 0;
                findPath_type1( arr_type1, x - 1, y );
            }
        }
        
        // check left
        if ( ( y - 1 ) >= 0 ) {
            compare = arr_type1[ x ][ y - 1 ];
            if ( compare == 1 ) {
                arr_type1[ x ][ y - 1 ] = 0;
                findPath_type1( arr_type1, x, y - 1 );
            }
        }
    
        // check right
        if ( ( y + 1 ) < arr_type1[ x ].length ) {
            compare = arr_type1[ x ][ y + 1 ];
            if ( compare == 1 ) {
                arr_type1[ x ][ y + 1 ] = 0;
                findPath_type1( arr_type1, x, y + 1 );
            }
        }
    
        // check bottom
        if ( ( x + 1 ) < arr_type1.length ) {
            compare = arr_type1[ x + 1 ][ y ];
            if ( compare == 1 ) {
                arr_type1[ x + 1 ][ y ] = 0;
                findPath_type1( arr_type1, x + 1, y );
            }
        }
    
    }
    
    function findPath_type2( arr_type2, x, y ) {
        
        let compare;

        // check top
        if ( ( x - 1 ) >= 0 ) {
            compare = arr_type2[ x - 1 ][ y ];
            if ( compare == 1 ) {
                arr_type2[ x - 1 ][ y ] = 0;
                findPath_type2( arr_type2, x - 1, y );
            }
        }
        
        // check left
        if ( ( y - 1 ) >= 0 ) {
            compare = arr_type2[ x ][ y - 1 ];
            if ( compare == 1 ) {
                arr_type2[ x ][ y - 1 ] = 0;
                findPath_type2( arr_type2, x, y - 1 );
            }
        }
    
        // check right
        if ( ( y + 1 ) < arr_type2[ x ].length ) {
            compare = arr_type2[ x ][ y + 1 ];
            if ( compare == 1 ) {
                arr_type2[ x ][ y + 1 ] = 0;
                findPath_type2( arr_type2, x, y + 1 );
            }
        }
    
        // check bottom
        if ( ( x + 1 ) < arr_type2.length ) {
            compare = arr_type2[ x + 1 ][ y ];
            if ( compare == 1 ) {
                arr_type2[ x + 1 ][ y ] = 0;
                findPath_type2( arr_type2, x + 1, y );
            }
        }

        // check top left
        if ( ( x - 1 ) >= 0 && ( y - 1 ) >= 0 ) {
            compare = arr_type2[ x - 1 ][ y - 1 ];
            if ( compare == 1 ) {
                arr_type2[ x - 1 ][ y - 1 ] = 0;
                findPath_type2( arr_type2, x - 1, y - 1 );
            }
        }

        // check top right
        if ( ( x - 1 ) >= 0 && ( y + 1 ) < arr_type2[ x ].length ) {
            compare = arr_type2[ x - 1 ][ y + 1 ];
            if ( compare == 1 ) {
                arr_type2[ x - 1 ][ y + 1 ] = 0;
                findPath_type2( arr_type2, x - 1, y + 1 );
            }
        }

        // check bottom left
        if ( ( x + 1 ) < arr_type2.length && ( y - 1 ) >= 0 ) {
            compare = arr_type2[ x + 1 ][ y - 1 ];
            if ( compare == 1 ) {
                arr_type2[ x + 1 ][ y - 1 ] = 0;
                findPath_type2( arr_type2, x + 1, y - 1 );
            }
        }

        // check bottom right
        if ( ( x + 1 ) < arr_type2.length && ( y + 1 ) < arr_type2[ x ].length ) {
            compare = arr_type2[ x + 1 ][ y + 1 ];
            if ( compare == 1 ) {
                arr_type2[ x + 1 ][ y + 1 ] = 0;
                findPath_type2( arr_type2, x + 1, y + 1 );
            }
        }
    
    }

    var answer = [];

    let arr_type1 = JSON.parse( JSON.stringify( image ) );
    let arr_type2 = JSON.parse( JSON.stringify( image ) );

    // Total number of recursive function call is the answer
    let count = 0;

    // Type 1 : Checking Aspect Type 1
    for ( let i=0; i<arr_type1.length; i++ ) {

        for ( let k=0; k<arr_type1[ i ].length; k++ ) {

            if ( arr_type1[ i ][ k ] == 1 ) {
                arr_type1[ i ][ k ] = 0;
                count++;
                findPath_type1( arr_type1, i, k );
            }

        }
        
    }
    answer.push( count );

    // Type 2 : Checking Aspect Type 2
    count = 0; // Initialize count
    for ( let i=0; i<arr_type2.length; i++ ) {

        for ( let k=0; k<arr_type2[ i ].length; k++ ) {

            debugger;
            if ( arr_type2[ i ][ k ] == 1 ) {
                arr_type2[ i ][ k ] = 0;
                count++;
                findPath_type2( arr_type2, i, k );
            }

        }
        
    }
    answer.push( count );

    return answer;
}

var arr = [ [1,1,0,1,1],[0,1,0,1,1],[1,0,0,0,1],[1,1,0,1,0] ]; // [ 4, 2 ]
// var arr = [[1,1,0,0],[1,1,0,0],[0,0,1,1],[1,0,1,1],[1,0,0,0]]; // [ 3, 2 ]

console.log( solution( arr ) );

