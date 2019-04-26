var delay_time = 1000;

function delay(t, val) {
    return new Promise( function ( resolve ) {
        if (t <= 0) {
            resolve( val );
        } else {
            setTimeout( resolve.bind( null, val ), t );
        }
    });
};

var fn = function ( idx ) {
	var promise = new Promise( function ( resolve, reject ) {
		console.log( idx );
		resolve( idx );
	});
	return promise;
};

var items = ['a','b','c','d','e','f'];

items.reduce( function ( promise, item ) {
    return promise.then( function ( result ) {
        return Promise.all( [ delay( delay_time, item ), fn( item ) ] );
    })
}, Promise.resolve() );

