let Person = (() => {

    let instance;

    let firstname = "";
    let lastname = "";

    function init( _firstname, _lastname ) {
        firstname = _firstname;
        lastname = _lastname;
        return {
            getFullname : getFullname
        };
    }

    function getInstance( _firstname, _lastname ) {
        if ( !instance ) {
            instance = init( _firstname, _lastname );
        }

        return instance;
    }

    function getFullname() {
        return `${firstname} ${lastname}`;
    }

    let o = {
        getInstance : getInstance
    };

    return o;
})();

let person1 = Person.getInstance( "Cheonsoo", "Park" );
let person2 = Person.getInstance( "Mansoo", "Park" );

console.log( `### ${person1}` );
console.log( `### ${person1.getFullname()}` );
console.log( `### ${person2}` );
console.log( `### ${person2.getFullname()}` );