// 45 50
// 46 ~ 49
// 45 46 48 49 50



var x = 45;
var y  = 50;

var cnt = 0;
var distance = y - x;
var distance_half = 0;
var is_even;
if ( distance % 2 == 1 ) {
    is_even = false;
} else {

}

distance_half = Math.floor( distance / 2 );

var start = 0;
var distance_moved = 0;
/*
9 => 1 3 6 8 9 10
45 => 46 48 49 50
0 => 1 3 4 5
distance = 5;
distance_half = 2;
start = 0;
distance_moved = 0;
 */
while( true ) {
    distance_moved = distance_moved + 1;
    if ( ( distance_moved + start ) > distance_half ) {
        cnt++;
        break;
    }
    start += distance_moved;
    cnt++;
}

console.log( `### cnt : ${cnt}` );
var total_move = ( cnt * 2 ) + ( ( is_even ) ? 0 : 1 );
console.log( `### total_move : ${total_move}` );