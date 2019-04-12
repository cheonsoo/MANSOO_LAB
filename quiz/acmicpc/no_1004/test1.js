/*
2

-5 1 12 1

7
1 1 8
-3 -1 1
2 2 2
5 5 1
-4 5 1
12 1 1
12 1 2
-5 1 5 1

1
0 0 2
*/

/*
1 : 시작점이 원 바깥에 있는 경우 (해당 원은 제외)
2 : 시작점이 원 안에 있는 경우
3 : 도착점이 원 안에 있는 경우
*/

/*
CASE 1
1 : 시작점이 원 바깥에 있는 경우를 제외시킨다
2 : 시작점이 원 안에 있는 경우 원의 개수를 파악한다
3 : 도착점이 원 안에 있는 경우 원의 개수를 파악한다
4 : 시작점과 도착점이 둘다 원안에 있는 경우를 파악한다
*/

/*
CASE 2
1 : 각 원안의 시작점과 도착점을 파악한다.
*/

var start = { x : 0, y : 0 };
var end = { x : 0, y : 0 };
var circle = { x : 0, y : 0, r : 0 }

function getDistance( a, b ) {
	if ( ( a >= 0 && b >= 0 ) || ( a < 0 && b < 0 ) ) {
		return Math.abs( a - b );
	} else {
		return Math.abs( a ) + Math.abs( b );
	}
}
function isCircleHasIt( pos, circle ) {

	var a = getDistance( pos.x, circle.x );
	var b = getDistance( pos.y, circle.y );
	var c = Math.sqrt( Math.pow( a, 2 ) + Math.pow( b, 2 ) );
	
	if ( circle.r > c ) {
		return true;
	} else {
		return false;
	}
}

// start = { x : -5, y : 1 };
start = { x : 2, y : 2 };
end   = { x : 12, y : 1 };
circle = { x : 1, y : 1, r : 8 };
var openSet = [];
var closeSet = [];
isCircleHasIt( start, circle );
circle.s = isCircleHasIt( start, circle );
circle.e = isCircleHasIt( end, circle );
openSet.push( circle );

console.log( openSet );

// console.log( Math.sqrt( Math.pow( 2, 2 ) + Math.pow( 2, 2 ) ) );
// console.log( Math.sqrt( 8 ) );