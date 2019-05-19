let start = new Date().getTime();


function factorial( i ) {
    let memo = {};
    function fact( i ) {
        if ( i === 0 ) {
            return 1;
        }
        let value = memo[ i - 1 ] || fact( i - 1 );
        if ( !memo[ i - 1 ]) {
            memo[ i - 1 ] = value;
        }
        return i * value;
    }
    
    return fact( i );
}

console.log( factorial( 10 ) );

console.log( `exe time : ${new Date().getTime() - start}` );