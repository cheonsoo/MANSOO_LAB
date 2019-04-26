var Astar = Astar || {};

Astar.conf = {
	x_size : 10,
	y_size : 10,
	start : [ 2, 5 ],
	walls : [ [1,1], [2,2], [3,3] ]
}

Astar.PathFinder = {
		
	conf : Astar.conf,
	win : window,
	doc : window.document,
	
	init : function() {
		console.log("INIT");
		var map = $("#map");
		var isWall = "n";
		
		
		for (var y=0; y<this.conf.y_size; y++) {
			
			var row = $("<div></div>");
			row.attr("class", "row")
			row.attr("y", y);
			map.append(row);
			
			for (var x=0; x<this.conf.x_size; x++) {
				
				isWall = "n";
				
				$.each(this.conf.walls, function(idx, wall) {
					// console.log("x : " + wall[0] + ", y : " + wall[1]);
					if (x == wall[0] && y == wall[1]) {
						isWall = "y";
						return false;
					}
				});
				
				var node = $("<span></span>");
				node.attr("class", "node");
				node.attr("x", x);
				node.attr("y", y);
				node.attr("wall", isWall);
				node.bind("click", function(evt) {
					var x = $(this).attr("x");
					var y = $(this).attr("y");
					console.log("target : " + x + ", " + y);
				});
				if (isWall == "y") {
					node.addClass("wall");
				}
				if (isWall == "n" && x == this.conf.start[0] && y == this.conf.start[1]) {
					node.addClass("start");
				}
				row.append(node);
				
			}
		}
		
	}
}
