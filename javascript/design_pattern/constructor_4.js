let Person = (() => {

    let firstname;
    let lastname;

    function Person() {
        firstname = "Cheonsoo";
        lastname = "Park";
    }

    Person.prototype.getFullname = () => {
        return `${firstname} ${lastname}`;
    };

    return Person;
})();

let person1 = new Person();
console.log( person1.getFullname() );