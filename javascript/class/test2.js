var person = {
    name : "",
    getName : function() {
        return this.name;
    }
};

var p1 = Object.create( person );
p1.name = "cpark";

var p2 = Object.create( person );
p2.name = "mansoo";

console.log( p1.getName() );
console.log( p2.getName() );