var hero = {
    name : "cpark",
    getName : function() {
        return this.name;
    }
};

var a = hero.getName;
console.log( a() );
console.log( hero.getName() );