var getDateString_start_end = function( _d ) {
	var _d_e = new Date( _d.setDate( _d.getDate() - 1 ));
		_d_e = _d_e.toISOString().substr( 0, 10 );
	var _d_s = new Date( _d.setDate( _d.getDate() - 1 ));
		_d_s = _d_s.toISOString().substr( 0, 10 );
	
	return {
		date_start : _d_s,
		date_end : _d_e
	};
};

console.log( getDate_start_end( new Date( ) ) );