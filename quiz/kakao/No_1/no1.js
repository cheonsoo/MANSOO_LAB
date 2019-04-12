/*
n	5
arr1	[9, 20, 28, 18, 11]
arr2	[30, 1, 21, 17, 28]
출력	["#####","# # #", "### #", "# ##", "#####"]

n	6
arr1	[46, 33, 33 ,22, 31, 50]
arr2	[27 ,56, 19, 14, 14, 10]
출력	["######", "### #", "## ##", " #### ", " #####", "### # "]
*/

let start = new Date().getTime();

function integerToBinary( n, number ) {

	let binary = "";

	if ( number === 1 ) {
		binary = "1";
	}

	while( number > 1 ) {

		let rest = (number % 2).toString();

		number = parseInt( number / 2 );
		binary = `${rest}${binary}`

		if ( number === 1 ) {
			binary = `1${binary}`;
		}

		// console.log( `next : ${number}, rest : ${rest}, binary : ${binary}` );

	}

	binary = binary.toString();

	let binary_len = binary.length;
	if ( binary_len < n ) {
		for ( let i=0; i<n-binary_len; i++ ) {
			binary = "0" + binary;
		}
	}

	return binary;
}

function run(n, arr1, arr2) {

	for ( let i=0; i<n; i++ ) {

		let binary1 = integerToBinary( n, arr1[ i ] );
		let binary2 = integerToBinary( n, arr2[ i ] );

		// console.log( binary1 );
		// console.log( binary2 );

		let map = "";
		for ( let k=0; k<binary1.length; k++ ) {

			map = map + ( binary1.charAt( k ) === "1" || binary2.charAt( k ) === "1" ? "#" : " " );
		}
		console.log( map );
	}

}

// let n = 5;
// let arr1 = [9, 20, 28, 18, 11];
// let arr2 = [30, 1, 21, 17, 28];

let n = 6;
let arr1 = [46, 33, 33 ,22, 31, 50];
let arr2 = [27 ,56, 19, 14, 14, 10];

run( n, arr1, arr2 );

// console.log( integerToBinary( n, 46 ) );

console.log( `Exe Time : ${new Date().getTime() - start}` );