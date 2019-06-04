/*

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/

let row = 9;
let half = parseInt( row / 2 );
let blanks = half;
let stars = 1;
let line = "";
for ( let i=0; i<half; i++ ) {
    line = "";
    for ( let k=0; k<blanks; k++ ) {
        line += " ";
    }
    for ( let t=0; t<stars; t++ ) {
        line += "*";
    }

    stars += 2;
    blanks--;

    console.log( line );
}

line = "";
for ( let i=0; i<row; i++ ) {
    line += "*";
}
stars -= 2;
blanks++;
console.log( line );

for ( let i=0; i<half; i++ ) {
    line = "";
    for ( let k=0; k<blanks; k++ ) {
        line += " ";
    }
    for ( let t=0; t<stars; t++ ) {
        line += "*";
    }

    stars -= 2;
    blanks++;

    console.log( line );
}