console.log( `### Start` );

let fs = require( "fs" );
let input = fs.readFileSync( "/Users/mansoo/Workspace/js/MANSOO_LAB/quiz/acmicpc/no_1006/input.txt" ).toString().split( "\n" );
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cases = input[ 0 ];
let num_division = parseInt( input[ 1 ].split( " " )[ 0 ] );
let max_member = input[ 1 ].split( " " )[ 1 ];
let arr1 = input[ 2 ].split( " " );
let arr2 = input[ 3 ].split( " " );
let data = {};

console.log( cases );
console.log( num_division );
console.log( max_member );
console.log( arr1 );
console.log( arr2 );
arr1.forEach( (item, idx) => {
    data[ `loc_${idx+1}` ] = { location : (idx+1), member : item, matched : "", covered : false };
});
arr2.forEach( (item, idx) => {
    data[ `loc_${num_division+idx+1}` ] = { location : (num_division+idx+1), member : item, matched : "", covered : false };
});

console.log( data );