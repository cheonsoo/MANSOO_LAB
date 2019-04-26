var fn1 = function ( idx ) {
	var promise = new Promise( function ( resolve, reject ) {
		setTimeout( function () {
			console.log( 1 );
		}, 1000 );
	});
	return promise;
};



for ( var i=0; length=10, i<length; i++ ) {
	console.log( i );
	fn1( i ).delay( 1000 );
}