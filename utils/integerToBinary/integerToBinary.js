let start = new Date().getTime();

function integerToBinary( number ) {

	let binary = "";

	while( number > 1 ) {

		let rest = (number % 2).toString();
		number = parseInt( number / 2 );
		binary = `${rest}${binary}`

		if ( number === 1 ) {
			binary = `1${binary}`;
		}

		console.log( `next : ${number}, rest : ${rest}, binary : ${binary}` );

	}

	return binary.toString();
}

let _number = 99999;
let _binary = integerToBinary( _number );

console.log( `${_number} => ${_binary}` );

console.log( `Exe Time : ${new Date().getTime() - start} ms` );