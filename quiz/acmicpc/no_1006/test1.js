/*
1
8 100
70 60 55 43 57 60 44 50
58 40 47 90 45 52 80 40
*/

let num_division = 8;
let edge = num_division * 2;
let left_edge = 0;
let right_edge = num_division - 1;
let max_member = 100;
let arr1 = [ 70, 60, 55, 43, 57, 60, 44, 50 ];
let arr2 = [ 58, 40, 47, 90, 45, 52, 80, 40 ];
let data = {
    "loc_1" : { location : 1, member : 70, matched : "", covered : false },
    "loc_2" : { location : 2, member : 60, matched : "", covered : false },
    "loc_3" : { location : 3, member : 55, matched : "", covered : false },
    "loc_4" : { location : 4, member : 43, matched : "", covered : false },
    "loc_5" : { location : 5, member : 57, matched : "", covered : false },
    "loc_6" : { location : 6, member : 60, matched : "", covered : false },
    "loc_7" : { location : 7, member : 44, matched : "", covered : false },
    "loc_8" : { location : 8, member : 50, matched : "", covered : false },
    "loc_9" : { location : 9, member : 58, matched : "", covered : false },
    "loc_10" : { location : 10, member : 40, matched : "", covered : false },
    "loc_11" : { location : 11, member : 47, matched : "", covered : false },
    "loc_12" : { location : 12, member : 90, matched : "", covered : false },
    "loc_13" : { location : 13, member : 45, matched : "", covered : false },
    "loc_14" : { location : 14, member : 52, matched : "", covered : false },
    "loc_15" : { location : 15, member : 80, matched : "", covered : false },
    "loc_16" : { location : 16, member : 40, matched : "", covered : false }
};

console.log( `### Start` );

for ( let i=1; i<=edge; i++ ) {

    let current = data[ `loc_${i}` ];
    if ( current.covered ) {
        continue;
    }

    let side = null;
    let largest = 0;

    let right = getRight( data, i );
    sum = current.member + right.member;
    if ( !right.covered && sum <= max_member ) {
        side = right;
        largest = sum;
    }

    let left = getLeft( data, i );
    sum = current.member + left.member;
    if ( !left.covered && sum <= max_member && sum > largest ) {
        side = left;
        largest = sum;
    }

    let bottom = getBottom( data, i );
    sum = current.member + bottom.member;
    if ( !bottom.covered && sum <= max_member && sum > largest ) {
        side = bottom;
        largest = sum;
    }

    if ( largest > 0 ) {
        current.covered = true;
        side.covered = true;

        console.log( `### current : ${current.location}, side : ${side.location} matched.` );
    }
}


function getRight( data, pos ) {
    // check if it's in edge
    if ( edge / pos == 1 || edge / pos == 2 ) { // It's in the edge
        return data[ `loc_${pos-(num_division-1)}` ];
    } else {
        return data[ `loc_${pos+1}` ];
    }
}

function getLeft( data, pos ) {
    if ( pos == 1 || pos == (num_division+1) ) {
        return data[ `loc_${pos+(num_division-1)}` ];
    } else {
        return data[ `loc_${pos-1}` ];
    }
}

function getBottom( data, pos ) { // Or Top
    if ( num_division < pos && pos <= edge ) {
        return data[ `loc_${pos-(num_division-1)}` ];
    } else {
        return data[ `loc_${pos+(num_division-1)}` ];
    }
}


/*
for ( let i=0; i<arr1.length; i++ ) {

    let largest = 0;

    // arr1[ i ] + arr1[ i+1 ]
    let current = arr1[ i ] + getRight( arr1, i );
    if ( current <= max_member ) {
        largest = current;
    }

    // arr1[ i ] + arr1[ i-1 ]
    current = arr1[ i ] + getLeft( arr1, i );
    if ( current <= max_member && current > largest ) {
        largest = current;
    }

    // arr1[ i ] + arr2[ i ]
    current = arr1[ i ] + getBottom( arr2, i );
    if ( current <= max_member && current > largest ) {
        largest = current;
    }
}

function getRight( arr, position ) {
    let right = 0;
    if ( position == right_edge ) {
        right = arr[ 0 ];
    } else {
        right = arr[ position + 1 ];
    }
    return right;
}

function getLeft( arr, position ) {
    let left = 0;
    if ( position == 0 ) {
        left = arr[ right_edge ];
    } else {
        left = arr[ potision - 1 ];
    }
    return left;
}

function getBottom( arr, potision ) { // Or Bottom
    return arr[ potision ];
}
*/