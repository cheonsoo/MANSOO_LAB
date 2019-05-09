let factory = (function() {
    
    let hr = {};
    
    function addDivision( division, Class ) {
        hr[ division ] = Class;
    }

    function create( division, options ) {
        let Object = hr[ division ];
        return Object ? new Object( options ) : null;
    }

    let o = {
        addDivision : addDivision
    };
    return o;
})();

let B2labs = (function() {

    let member = [];

    function B2labs( options ) {
        

    }

    function addPerson( name ) {
        member.push( name );
    }
})();