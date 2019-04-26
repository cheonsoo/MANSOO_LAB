var start = new Date();

var _db$category = db.getSiblingDB( "category" );//카테고리;
var _db$daily_master = db.getSiblingDB( "daily_master" );//일간 마스터 데이타;
var _db$brand = db.getSiblingDB( "brand" );//일간 마스터 데이타;


//----------------------------------------------------------------------------------------------------;

//	COLLECTION;

//----------------------------------------------------------------------------------------------------;

var _col$category_store_type = _db$category.getCollection( "category_store_type" );//스토어 타입;
var _col$daily_master = _db$daily_master.getCollection( "daily_master" );//일간 마스터 데이터;
var _col$brand_basic = _db$brand.getCollection( "brand_basic" );

//test insert 용;
var _col$test = _db$daily_master.test;

//----------------------------------------------------------------------------------------------------;

//	DOCUMENTS;

//----------------------------------------------------------------------------------------------------;

var _doc$category_store_type;//스토어 타입;

//----------------------------------------------------------------------------------------------------;

//	PARAMETERS

//----------------------------------------------------------------------------------------------------;

//var _data =<!=data=!>;
var date = "<!=date=!>";
var mid = "<!=mid=!>";

var _p1 = { nm_cn : "" }; // category_store_type;
var _cd$category_store_type = "-";
var _projection = { shop_type : 1, shop_name : 1, sell_count : 1, price_min : 1, brand : 1, name : 1, shop_name : 1 }; //성능상 필요 한 데이타만 쿼리 한다.
var d;
var key;
var io;
var map = {}; // data를 저장하기 위한 구조체;
var r = [];//insertMany를 사용시, 결과를 저장하기 위한 배열;

//----------------------------------------------------------------------------------------------------;

//	VALIDATOR

//----------------------------------------------------------------------------------------------------;

//권한체크 -- 배치 작업시 인증된 시스템만 허용한다.;

/*/
if( mid != "SYS0030@b2link.co.kr" )
{	
	RayLog.log( "AuthenticationFailed - 인가되지 않은 사용자" );
	return { r : 18, m : "AuthenticationFailed - 인가되지 않은 사용자"};
}
/*/



//----------------------------------------------------------------------------------------------------;
// data를 질의 한다.; 
var _date = date;//검색 조건;
var _q = {
	date : { 
		$gte : ISODate(_date + "T00:00:00.000Z"), 
		$lte : ISODate(_date + "T23:59:59.000Z") 
	}
};
var _docs = _col$daily_master.find( _q, _projection );



_docs.forEach( function( doc ) {

	var i = 0, iLen = map.length;
	key = doc.shop_type + "_" + doc.shop_name;//키를 생성한다.;

	io = map [ key ];
	if (  null != io  )
	{
			io.total_sell_quantity += doc.sell_count < 0 ? 0 : doc.sell_count;
			io.total_sales_amount += doc.sell_count * ( doc.price_min ? doc.price_min : 0 )
	}
	else {
		
		_p1.nm_cn = doc.shop_type;
		
		// store_type 에 대해 category code 를 가져 온다. 
		_doc$category_store_type = _col$category_store_type.findOne( _p1 );
		if ( !_doc$category_store_type  )
		{
			RayLog.log( "_doc$category_story_type is not found nm_cn :" + _p1.nm_cn );
			_cd$category_store_type = doc.shop_type;
		}
		else
			_cd$category_store_type = _doc$category_store_type.cd;
	
		// Find Brand
		var nm_brand = "";
		var id_brand = -1;
		if ( doc.brand ) {
			nm_brand = doc.brand.split( "/" )[0];
			var regex = new RegExp( ".*" + nm_brand + ".*" );
			var brand = _col$brand_basic.findOne({
				$or : [
					{ alias : { $regex : regex, $options : "i" } },
					{ nm    : { $regex : regex, $options : "i" } },
					{ nm_kr : { $regex : regex, $options : "i" } },
					{ nm_cn : { $regex : regex, $options : "i" } },
					{ nm_us : { $regex : regex, $options : "i" } }
				]
			});
			id_brand = brand ? brand._id : -1;
		}
		
		var _p_model = { 
				_ids$member : {
					register : -1,
					modifier : -1
				},
				_id$brand_basic : id_brand,
				nm$brand_basic : nm_brand,
				_id$product_basic : -1,
				nm$product_basic : doc.standard_name ? doc.standard_name : "",
				_id$shop_basic : -1,
				nm$shop_basic : doc.shop_name,
				cd$category_store_type :_cd$category_store_type,
				date_create : { a : ISODate()} ,
				date_update : {},
				date_of_value : { a : ISODate() },
				total_sell_quantity : doc.sell_count < 0 ? 0 : doc.sell_count,
				total_sales_amount : doc.sell_count * ( doc.original_price ? doc.original_price : 0 )
			};
			map[ key ] = _p_model;
	}
});

//Object를 배열로 저장.;
for ( key in map )
{
	d = map[ key ];
	d._ids$member.register = NumberInt( -1 );
	d._ids$member.modifier = NumberInt( -1 );
	d._id$brand_basic = NumberInt( -1 );
	d._id$product_basic = NumberInt( -1 );
	d._id$shop_basic = NumberInt( -1 );
	//_col$test.insert( d );
	r.push( d );
}

//db에 인서트;
_col$test.insertMany( r );

var end = new Date();
var time = end - start
return { r : 0 , m : "OK", elaspsedTime : time, data : r };