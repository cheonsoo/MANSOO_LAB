let start = new Date().getTime();

let result = 1;
function fibo( i ) {
    if ( i === 0 ) {
        return 1;
    }

    return i * fibo( i - 1);
}

console.log( fibo( 4 ) );

console.log( `exe time : ${new Date().getTime() - start}` );