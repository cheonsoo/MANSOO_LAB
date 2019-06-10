var list = [];

var arrList = {
    add : function( val ) {
        list.push( val );
    },
    min : function() {
        let tmp = list.slice(); // copy array with out reference
        tmp.sort( ( a, b ) => a - b ); // sort array asc
        let min = tmp.shift();
        console.log( `min : ${min}` );
        return min;
    },
    remove : function() {
        let oldest = list.shift();
        console.log( `oldest : ${oldest}` );
    }
};



arrList.add( 5 ); // 출력 X
arrList.add( 2 ); // 출력 X
arrList.add( 6 ); // 출력 X
arrList.min(); // 출력 : 2
arrList.remove(); // 출력 5
// exit : 프로그램 종료


console.log( list );