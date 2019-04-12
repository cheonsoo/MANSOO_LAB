var start = new Date();
// 매주 월요일 새벽 에 동작 

var _date = "2018-08-06";
var today_UTC = new Date();
var now = new Date( today_UTC.getTime() - ( today_UTC.getTimezoneOffset() * 60000) );

//----------------------------------------------------------------------------------------------------;

//	REQUIRE;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;


/**
 * Date타입을 입력 받아, 해당 년도의 년과 주를 리턴하는 함수.(매주 월요일의 주의 시작)
 * @function 
 * @param {Date} date new Date( '2018-01-01' )
 * @return {Object} 
 * <code>
 * {
 * 	year : 2018
 * , week : 1
 * }
 * </code>
 */
function getYearAndWeekNumber( d ) 
{
    var date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1));
	var weekNo = Math.ceil(( ( (date - yearStart) / 86400000) + 1)/7);
	
    return { year : d.getUTCFullYear(), week :  weekNo };
};


/**
 * 주번호와 연도를 입력 받아 해당 시작일자를 리턴하는 함수.( 월요일 주의 시작)
 * @function 
 * @param {Number} weekNo 
 * @param {String} year
 * @return {Date} 
 */
function getMonDayOfWeek( weekNo, year )
{

	year = year.toString();
	var firstMonDay= new Date( new Date( year ).getFullYear(), 0, 0, 0, 0, 0, 0 );

	while( firstMonDay.getDay() != 1 )
	{
		firstMonDay.setDate( firstMonDay.getDate() - 1 );
	}
	if( 1 <= weekNo && weekNo <= 52 )
		return firstMonDay.setDate( firstMonDay.getDate() + 7 * weekNo );

	firstMonDay.setDate( firstMonDay.getDate() + 7 * weekNo );
	if( weekNo = 53 && firstMonDay.getDate() >= 22 && firstMonDay.getDate() <= 28 )
		return firstMonDay;
	return null;
};


/**
 * 주번호와 연도를 입력 받아 해당 시작일과 끝일을 리턴하는 함수.( 시작일 : 월욜일, 끝일 : 토요일)
 * @function 
 * @param {Number} weekNo 
 * @param {String} year
 * @return {Object} 
 * <code>
 * {
 * 	s : '2018-01-01'
 * , e : '2018-01-07'
 * }
 * </code>
 */
function getDayRange( weekNo, year )
{
	var r = {
		s : ""
		, e : ""
	}

	var monday = getMonDayOfWeek( weekNo, year );
	var date_monday= new Date( monday );
	var date_sunday = new Date( monday );
	date_sunday.setDate( date_sunday.getDate() + 6 );

	var my = date_monday.getFullYear();
	var mm = date_monday.getMonth()+1;
		mm = mm > 9 ? mm.toString() : '0' + mm.toString();
	var md = date_monday.getDate();
		md = md > 9 ? md.toString() : '0' + md.toString();

	var sy = date_sunday.getFullYear();
	var sm = date_sunday.getMonth()+1;
		sm = sm > 9 ? sm.toString() : '0' + sm.toString();
	var sd = date_sunday.getDate();
		sd = sd > 9 ? sd.toString() : '0' + sd.toString();
	r.s = my + "-" + mm + '-' + md;
	r.e = sy + "-" + sm + '-' + sd;
	return r;
};

//----------------------------------------------------------------------------------------------------;

//	DATABASE;

//----------------------------------------------------------------------------------------------------;







//----------------------------------------------------------------------------------------------------;

//	PARAMETERS

//----------------------------------------------------------------------------------------------------;

// 하루전의 날짜가 필요하다.
var dateYesterDay = new Date ( _date );
dateYesterDay.setDate( dateYesterDay.getDate() - 1 );

var _oDate = getYearAndWeekNumber( dateYesterDay )

var week = _oDate.week;
var year = _oDate.year;

console.log( year );
console.log( week );

var range = getDayRange( week, year );
console.log( JSON.stringify( range ) );