var arr = [ "ddd", "abc", "eeeee", "bbb" ];

// arr.sort( ( a, b ) => {
//     if ( a > b ) {
//         return 1;
//     } else {
//         return -1;
//     }
// })

arr.sort( ( a, b ) => ( a > b ) ? 1 : -1 );

console.log( arr );

