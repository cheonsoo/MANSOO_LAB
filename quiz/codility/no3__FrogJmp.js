function solution( x, y, d ) {
    let jump = ( y - x ) / d;
    if ( Math.floor( jump ) < jump ) {
        jump = Math.floor( jump ) + 1;
    }
    return jump;
}

console.log( solution( 10, 85, 30 ) );