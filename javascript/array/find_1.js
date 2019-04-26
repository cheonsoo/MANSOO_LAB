var arr = [
	{id:1, name:"bob"},
	{id:2, name:"dan", "test" : "test2" },
	{id:3, name:"dan2", "test" : "test3" },
	{id:4, name:"dan2", "test" : "test4" },
	{id:5, name:"barb"},
]

var found = arr.find(function( item ) {
	if ( item.name === "dan2" && item.test === "test3" ) {
		return item;
	}
});

console.log(found);
// expected output: 12