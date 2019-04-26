function getAllInstancesInJson( _obj, path, _arr ) {

	if ( typeof _obj !== "object" ) {
		return;
	}

	for ( let key in _obj ) {

		if ( key !== "_type" ) {

			let next_path = path + "." + key; // console.log( `${next_path}` );
			_arr.push( next_path );
			
			if ( typeof _obj[ key ] === "object" ) {
				getAllInstancesInJson( _obj[ key ], next_path, _arr );
			}
		}
	}

	return _arr;
}

let obj = {
    _d : {
        _type : "number"
    },
    date_create : {
    	_type : "string",
    	a : {
    		_type : "string"
    	}
    },
    data : {
        _type : "object",
        _id$brand_basic : {
            _type : "number"
        },
        request_url : { _type : "string" },
        original_data : { _type : "string" },
        parsed_json : {
            _type : "object",
            products : {
                _type : "array"
            }
        }
    }
};

var r = getAllInstancesInJson( obj, "", [] );
// console.log( r );

// console.log( eval( "obj.data.properties.request_url" ) )

r.forEach(function( key ) {
	console.log( `obj${key}` + "'s type is " + eval( `obj${key}._type` ) );
});
