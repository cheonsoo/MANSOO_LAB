function solution( arr ) {
    arr.sort( ( a, b ) => a - b );
    
    for ( let i=0; i<arr.length; i=i+2 ) {
        if ( ( i ) === arr.length ) {
            unpaired = arr[ i ];
        }

        if ( arr[ i ] !== arr[ i + 1] ) {
            return arr[ i ];
        }
    }
}

console.log( solution( [ 9, 3, 9, 3, 9, 7, 9 ] ) );

/*
function solution( arr ) {
    let tmp = [];
    arr.forEach( item => {
        let first_item = arr.unshift();
        if ( tmp[ first_item ] && tmp[ first_item ] === 1 ) {
            tmp.splice( first_item, 1 );
        } else {
            tmp[ first_item ] = 1;
        }
    });

    return tmp.length - 1;
}

console.log( solution( [ 9, 3, 9, 3, 9, 7, 9 ] ) );
*/

/*
function solution( arr ) {
    let tmp = [];
    arr.forEach( item => {
        let first_item = arr.unshift();
        let idx_of_val; 
        if ( idx_of_val = tmp.indexOf( first_item ) > -1 ) {
            tmp.splice( idx_of_val, 1 );
        } else {
            tmp.push( first_item );
        }
    });

    return tmp[ 0 ];
}

console.log( solution( [ 9, 3, 9, 3, 9, 7, 9 ] ) );
*/