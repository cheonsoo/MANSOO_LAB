// ES5
function Person( firstname, lastname ) {
    this.firstname = firstname;
    this.lastname = lastname;

    this.getFullname = () => {
        return this.firstname + " " + this.lastname;
    };
};

let p = new Person( "Cheonsoo", "Park" );

console.log( p.getFullname() );



// ES6
class Man {

    constructor( firstname, lastname ) {

        this.firstname = firstname;
        this.lastname = lastname;

        this.getNickname = () => {
            return "cpark";
        };
    }

    getFullname() {
        return `${this.firstname} ${this.lastname}`;
    };
}
;

let m = new Man( "Mansoo", "Park" );

console.log( m.getFullname() );
console.log( m.getNickname() );