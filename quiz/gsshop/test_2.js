function solution(sentence){
    
    // make sentence to lower case
    sentence = sentence.toLowerCase();
    
    var answer = [];
    var alphabet = "abcdefghijklmnopqrstuvwxyz"; // alphabets to check
    
    for ( let i=0; i<alphabet.length; i++ ) {
        let current = alphabet.charAt( i );
        if ( sentence.indexOf( current ) == -1 ) {
            answer.push( current );
        }
    }
    
    // sort alphabets asc
    answer.sort( ( a, b ) => ( a > b ) ? 1 : -1 );
    
    // return it in str format
    let result = "";
    if ( answer.length == 0 ) {
        result = "perfect";
    } else {
            result = answer.join( "" );
    }
    
    return result;
}

let sentence = "His comments came after Pyongyang announced it had a plan to fire four missiles near the US territory of Guam.";

console.log( solution( sentence ) );

