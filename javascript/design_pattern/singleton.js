let Person = (function () {

    let instance;
    let a = 'hello';

    function initiate() {
        let o = {
            a : a,
            b : () => {
                alert(a);
            }
        };
        return o;
    }

    function getInstance() {
        if ( !instance ) {
            instance = initiate();
        }
        return instance;
    }

    let o = {
        getInstance : getInstance
    };

    return o;
})();

let first = Person.getInstance();
let second = Person.getInstance();

console.log( first === second ); // true;