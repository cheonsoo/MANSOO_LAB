function Person( firstname, lastname ) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.getFullname = function() {
    return `${this.firstname} ${this.lastname}`;
}

let person1 = new Person( "Cheonsoo", "Park" );

console.log( person1.getFullname() );