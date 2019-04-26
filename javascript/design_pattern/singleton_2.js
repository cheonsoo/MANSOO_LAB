let Person = (function () {

    let instance;
    var firstname;
    var lastname;

    let getFullname = () => {
        return `${this.firstname} ${this.lastname}`;
    };

    function initiate( firstname, lastname ) {

        this.firstname = firstname;
        this.lastname = lastname;

        let o = {
            getFullname : getFullname
        };
        return o;
    }

    function getInstance( firstname, lastname ) {
        if ( !instance ) {
            instance = initiate( firstname, lastname );
        }
        return instance;
    }

    let o = {
        getInstance : getInstance
    };

    return o;
})();

let first = Person.getInstance( "Cheonsoo", "Park" );
console.log( first.getFullname() );
let second = Person.getInstance( "Mansoo", "Park" );
console.log( first.getFullname() );

console.log( first === second ); // true;