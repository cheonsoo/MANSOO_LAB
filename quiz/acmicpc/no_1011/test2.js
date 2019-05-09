function factorial_add( i ) {
    final_moved_cnt++;
    if ( i === 1 ) {
        return 1;
    }
    return i + factorial_add( i - 1 );
}

var x = 0;
var y  = 9;

var distance = y - x;

var middle_point = Math.sqrt( distance );

if ( !Number.isInteger( middle_point ) ) {
    middle_point = Math.floor( middle_point );
}
console.log( middle_point );

var final_moved_cnt = 0;
var tmp = factorial_add( middle_point - 1 ) + factorial_add( middle_point - 1 );
if ( distance > tmp ) {
    final_moved_cnt++;
}
// final_moved_cnt ++;

console.log( `### result : ${final_moved_cnt}` );