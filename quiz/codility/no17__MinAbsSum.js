/*
function solution( A ) {

    if ( !A || A.length == 0 ) return 0;

    let sumOfArr = 0;
    let arr = A.sort( ( a, b ) => b - a );
    console.log( arr );
    arr = A.map( item => {
        item = Math.abs( item );
        sumOfArr = sumOfArr + item;
        return { val : item, used : 0 }; 
    });
    let halfOfSum = Math.abs( sumOfArr / 2 );
    console.log( `arr : ${JSON.stringify( arr )}` );
    console.log( `sumOfArr : ${sumOfArr}` );
    console.log( `halfOfSum : ${halfOfSum}` );

    let group1 = 0;
    let group2 = 0;

    for ( let i=0; i<arr.length; i++ ) {
        
        // if it's already used, skip it.
        if ( arr[ i ].used === 1 ) {
            continue;
        }

        // first value
        if ( group1 === 0 ) {
            group1 = arr[ i ].val;
            arr[ i ].used = 1; // marked as used
            continue;
        }

        // group1 + current number is smaller than half of sum, add these.
        if ( ( group1 + arr[ i ].val ) < halfOfSum ) {
            group1 = group1 + arr[ i ].val;
            arr[ i ].used = 1;
        // other case, break the loop
        } else if ( ( group1 + arr[ i ].val ) == halfOfSum ) {
            group1 = group1 + arr[ i ].val;
            arr[ i ].used = 1;
            // break;
        } else {
            group2 = group2 + arr[ i ].val;
            arr[ i ].used = 1;
        }
    }

    // debugger;
    // for ( let k=0; k<arr.length; k++ ) {
    //     // if it's already used, skip it.
    //     if ( arr[ k ].used === 1 ) {
    //         continue;
    //     }

    //     group2 = group2 + arr[ k ].val;
    // }
    console.log( `group1 : ${group1}` );
    console.log( `group2 : ${group2}` );
    
    return Math.abs( group1 - group2 );
}
/*/
function solution( A ) {

    if ( !A || A.length == 0 ) return 0;

    let sumOfArr = 0;
    let arr = A.sort( ( a, b ) => b - a );
    console.log( arr );
    arr = A.map( item => {
        item = Math.abs( item );
        sumOfArr = sumOfArr + item;
        return item;
    });
    let halfOfSum = Math.abs( sumOfArr / 2 );
    console.log( `arr : ${JSON.stringify( arr )}` );
    console.log( `sumOfArr : ${sumOfArr}` );
    console.log( `halfOfSum : ${halfOfSum}` );

    let group1 = 0;
    let group2 = 0;

    group1 = arr.shift();
    for ( let i=0; i<arr.length; i++ ) {
        
        let num = arr[ i ];
        // group1 + current number is smaller than half of sum, add these.
        if ( ( group1 + num ) < halfOfSum ) {
            group1 = group1 + num;
        // other case, break the loop
        } else if ( ( group1 + num ) == halfOfSum ) {
            group1 = group1 + num;
            // break;
        } else {
            group2 = group2 + num;
        }
    }

    console.log( `group1 : ${group1}` );
    console.log( `group2 : ${group2}` );
    
    return Math.abs( group1 - group2 );
}
//*/

/*
CASE 1:
5 4 3 3 3

모든 값의 합 : 18
기준값 : 9
first group : 9 = 5 + 4
second group : 9 = 3 + 3 + 3

5 9 12 15 18
3 6 9 13 18

CASE 2:

arr : 100,99,20,10,10,5,5,2,2,1,1,1
sumOfArr : 256
halfOfSum : 128
group1 : 100 + 20 + 5 + 2 + 1 = 128
group2 : 99 + 10 + 10 + 5 + 2 + 1 + 1 = 128
Int( Result ) = group1 - group2
*/


// console.log( solution( [] ) );
// console.log( solution( [999,1] ) );
// console.log( solution( [3, 3, 3, 4, 5] ) ); // 543331
// console.log( solution( [ 0 ] ) );
// console.log( solution( [ 7 ] ) );
// console.log( solution( [ 7, 2 ] ) );
// console.log( solution( [ 7, 2, 1 ] ) );
// console.log( solution( [ 1, 5, 2, -2 ] ) );
// console.log( solution( [ 1,1,3,1,1,1,5 ] ) );
console.log( `result : ${solution( [ 100, 99, 10, 5, 5, 2, 1, -1, -1, -2, -10, 20 ] )}` );
// console.log( `result : ${solution( [-100, 3, 2, 4] )}` );