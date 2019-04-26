function getSchema() {
    let _schema_vip_product_list = {
        _d : {
            type : "number"
        },
        date_create : {
            a : {
                type : "string"
            }
        },
        data : {
            type : "",
            properties : {
                _id$brand_basic : {
                    type : "number"
                },
                request_url : { type : "string" },
                original_data : { type : "string" },
                parsed_json : {
                    type : "",
                    properties : {
                        products : {
                            type : "array"
                        }
                    }
                }
            }
        }
    };
    return _schema_vip_product_list;
}

function integerToNumberInt( obj ) {

    if ( !obj || ( obj.constructor.name.toLowerCase() != "object" && obj.constructor.name.toLowerCase() != "array" ) ) {
        console.log( "not valid type" );
        return;
    }

    for ( i in obj ) {

        if ( !obj[ i ] && obj[ i ] != 0 ) {
            continue;
        }

        if ( obj[ i ].constructor.name.toLowerCase() == "number" && Number.isInteger( obj[ i ]) ) {
            obj[ i ] = NumberInt( obj[ i ] );
        } else if ( obj[ i ].constructor.name.toLowerCase() == "object" ) {
            integerToNumberInt( obj[ i ] );
        } else if ( obj[ i ].constructor.name.toLowerCase() == "array" ) {
            integerToNumberInt( obj[ i ] );
        }

    }

};

var _obj = getSchema();

integerToNumberInt( _obj );
