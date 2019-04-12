class Mansoo {
	constructor( firstname, lastname, nickname ) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.nickname = nickname;
	}

	getAge() {
		return 40;
	}

	getWife() {
		return "JIHYE"
	}

	static getFullName( firstname, lastname ) {
		return `${firstname} ${lastname}`;
	}
}

let mansoo = new Mansoo( "cheonsoo", "park", "mansoo" );
debugger;
console.log( mansoo.firstname );
console.log( mansoo.lastname );
console.log( mansoo.getAge() );
console.log( mansoo.getWife() );
console.log( Mansoo.getFullName( "Cheonsoo", "Park" ) );

let test = {
	test : 1
	, test2 : 222
}