function run( val, _zero, _one ) {

    if ( val <= 1 ) {
        if ( val == 1 ) {
            _one++; 
        } else {
            fibo.push( val );
            _zero++; 
        }
        return val;
    } else {
        if ( memo[ val ] ) {
            return memo[ val ];
        } else {
            memo[ val ] = run( val - 1 ) + run( val - 2 )
            fibo.push( memo[ val ] );
            return memo[ val ];
        }

    }
}

function getNumOfZeroAndOne( val ) {
    return 0;
}


var zero = 0
var one = 0;
var memo = [];
var tmp = {};
var fibo = [];
/*
10 > 34 55
*/
var val = run( 10 );
getNumOfZeroAndOne
console.log( fibo );
