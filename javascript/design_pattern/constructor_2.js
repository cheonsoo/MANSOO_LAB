let Person = (function() {

    function Person( firstname, lastname ) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    Person.prototype.getFullname = function() {
        return `${this.firstname} ${this.lastname}`;
    };
    return Person;
})();

let p = new Person( "Cheonsoo", "Park" );
console.log( p.getFullname() );