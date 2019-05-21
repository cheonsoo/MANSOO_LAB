function Person( _firstname, _lastname ) {
    this.firstname = _firstname;
    this.lastname = _lastname;
    this.fullname = "";
    Person.prototype.setFullName = ( _fullname ) => {
        this.fullname = _fullname;
    };
    Person.prototype.getFullName = () => {
        return this.firstname;
        // return this.fullname;
        // return `${this.firstname} ${this.lastname}`;
    };
}

let p1 = new Person( "cheonsoo", "park" );
let p2 = new Person( "mansoo", "Park" );

// debugger;

console.log( p1.firstname );
console.log( p2.firstname );

// console.log( p1.setFullName( "aaa" ) );
// console.log( p2.setFullName( "bbb" ) );
debugger;
console.log( p1.getFullName() );
console.log( p2.getFullName() );