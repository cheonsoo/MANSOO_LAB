function delay(t, val) {
    return new Promise(function(resolve) {
        if (t <= 0) {
            resolve(val);
        } else {
            setTimeout(resolve.bind(null, val), t);
        }
    });
}

var fn1 = function ( idx ) {
	var promise = new Promise( function ( resolve, reject ) {
		setTimeout( function () {
			console.log( idx );
		}, 1000 );
	});
	return promise;
};

var fn2 = function ( idx ) {
	var promise = new Promise( function ( resolve, reject ) {
		console.log( idx );
		resolve( idx );
	});
	return promise;
};

//const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
let paramerterArr = ['a','b','c','d','e','f'];
paramerterArr.reduce(function(promise, item) {
  return promise.then(function(result) {
    return Promise.all( [ delay( 1000, item ), fn2(item) ]);
  })
}, Promise.resolve())