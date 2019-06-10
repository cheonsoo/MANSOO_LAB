// 5 0 3
// 
// desc : 5
// src : 0
// size : 3
// [ 0, 255, 123, 12, 2, 4, 12,  4,   55, 2 ]
// [ 0, 255, 123, 12, 2, 0, 255, 123, 55, 2 ]
var arr = [ 0, 255, 123, 12, 2, 4, 12, 4, 55, 2 ];

function memcpy( v, dest, src, size ) {

    for ( let i=src; i<=src+size-1; i++ ) {
        v[ i + dest ] = v[ i ];
    }

    return v;
}

console.log( memcpy( arr, 5, 0, 3 ).toString() );
