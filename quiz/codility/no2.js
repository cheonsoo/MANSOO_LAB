function solution( arr, rotation_times ) {
    for( let i=0; i<rotation_times; i++ ) {
        // let tmp = 
        // let first_item = arr.splice( arr.length - 1, 1 )[ 0 ];
        let first_item = arr.pop();
        arr.unshift( first_item );
    }

    return arr;
}

console.log( solution( [ 3, 8, 9, 7, 6 ], 3 ) );

// console.log( [ 3, 8, 9, 7, 6 ].splice( 0, 1 ) );