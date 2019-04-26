AppNexInterstitialConf = {
	
	// VARIABLES
	_timeout: 1,
	_browser_mode: "mobile", // pc, mobile, tablet
	_image_mode: "two_image",
	_orientation: "", // portrait, landscape
	_width_landscape: "",
	_height_landscape: "",
	_browser_width: "",
	_browser_height: "",
	_image_width: "",
	_image_height: "",
	_background_img: "../../img/a_man.jpg",
	_background_img_landscape: "../../img/solid_snake.jpg",
	_xbtn_img: "../../img/close_54x54.png",
	_click_url: "http://google.com",
	
	// CLASS NAME
	_interstitial_outer_clsname   : "interstitial_outer_clsname",
	_interstitial_content_clsname : "interstitial_content_clsname",
	_interstitial_xbtn_clsname    : "interstitial_xbtn_clsname",
	_interstitial_img_clsname     : "interstitial_img_clsname"
	
}

var aia = aia || {};

aia.AppNexInterstitial = aia.AppNexInterstitial || {};

aia.AppNexInterstitial = {
	conf: AppNexInterstitialConf,
	win: window,
	doc: window.document,
	
	initialize_interstitial: function() {
		
		// Outer Div
		var ele_div = document.createElement("div");
		ele_div.className = this.conf._interstitial_outer_clsname;
		ele_div.style.top = "-" + this.conf._browser_height + "px";
		
		// Content Div
		var ele_content = document.createElement("div");
		ele_content.className = this.conf._interstitial_content_clsname;
		
		// X Button
		var ele_xbtn = document.createElement("span");
		ele_xbtn.className = this.conf._interstitial_xbtn_clsname;
		ele_xbtn.addEventListener("click", this.close_interstial_ad);

		// Image
		var ele_img = document.createElement("div");
		ele_img.className = this.conf._interstitial_img_clsname;
		ele_img.onclick = function(evt) {
			var conf = aia.AppNexInterstitial.conf;
			console.log(evt.currentTarget.className);
			if (evt.currentTarget.className != "interstitial_xbtn") {
				location.href = conf._click_url;
			}
		}
		
		// Organize Ad
		ele_content.appendChild(ele_img);
		ele_img.appendChild(ele_xbtn);
		ele_div.appendChild(ele_content);
		this.doc.body.appendChild(ele_div);
		
	},
	init_variables: function() {
		this.getScreenMode();
		this.figureoutUserAgent();
		this.getImgSize();
	},
	getScreenMode: function() {
		// Chrome
		var width = window.innerWidth;
		var height = window.innerHeight;
		
		this.conf._browser_width = width;
		this.conf._browser_height = height;
		
		if (width < height) {
			this.conf._orientation = "portrait";
		} else {
			this.conf._orientation = "landscape";
		}
	},
	figureoutUserAgent: function() {
		//console.log(navigator.userAgent);
	},
	close_interstial_ad: function(evt) {
		console.log("close_interstial_ad");
		evt.currentTarget.parentElement.parentElement.parentElement.remove();
		evt.stopPropagation();
	},
	getImgSize: function() {
		var that = this;
		var img = new Image();
		img.src = this.conf._background_img;
		
		img.onload = function() {
			that.conf._image_width = img.width;
			that.conf._image_height = img.height;
			
			var x_ratio = (img.width / img.height * 1).toFixed(2);
			
			that.getScreenMode();
			
			// width : height = x_ratio : 1
			that.conf._width_landscape = that.conf._browser_height * x_ratio;
			
			var outer = document.querySelector("." + that.conf._interstitial_outer_clsname);
			var content = document.querySelector("." + that.conf._interstitial_content_clsname);
			var content_img = document.querySelector("." + that.conf._interstitial_img_clsname);
			
			if (that.conf._orientation == "portrait") {
				content.style.width = "100%";
				content_img.style.backgroundImage = "url(" + that.conf._background_img + ")";
			} else {
				if (that.conf._image_mode == "two_image") {
					content.style.width = "100%";
					content_img.style.backgroundImage = "url(" + that.conf._background_img_landscape + ")";
				} else {
					content.style.width = _width_landscape;
					content_img.style.backgroundImage = "url(" + _background_img + ")";
				}
			}
		};
	},
	startTimer: function(duration, display) {
		var that = this;
	    var timer = duration, minutes, seconds;
	    var interval = setInterval(function (evt) {
	        minutes = parseInt(timer / 60, 10);
	        seconds = parseInt(timer % 60, 10);

	        if (timer < 0) {
	            document.querySelector("." + that.conf._interstitial_xbtn_clsname).innerHTML = "";
	            document.querySelector("." + that.conf._interstitial_xbtn_clsname).style.backgroundImage = "url(" + that.conf._xbtn_img + ")";
	        	window.clearInterval(interval);
	        } else {
	       		display.textContent = seconds;
	        	timer--;
	        }
	        
	    }, 1000);
	},
	Box: function() {
		
		var conf = aia.AppNexInterstitial.conf;
		
		var animationStartTime = 0;
		var animationDuration = 50;
		var target = document.querySelector("." + conf._interstitial_outer_clsname);
		
		this.startAnimation = function() {
			animationStartTime = Date.now();
			requestAnimationFrame(update);
		};
		
		function update() {
			var that = aia.AppNexInterstitial;
			var currentTime = Date.now();
			var positionInAnimation = (currentTime - animationStartTime) / animationDuration;
			
			var xPosition = 0;
			var yPosition = positionInAnimation * 100;
			target.style.transform = 'translate(' + xPosition + 'px, ' + yPosition + 'px)';
			
			if (yPosition < that.conf._browser_height) {
				requestAnimationFrame(update);
			} else {
				target.style.transform = 'translate(0px, ' + that.conf._browser_height + 'px)';
			}
		}
	},
	init: function() {
		this.init_variables();
		
		this.initialize_interstitial();
		
		this.win.addEventListener("resize", function() {
			console.log("rotated");
			var that = aia.AppNexInterstitial;
			that.getImgSize();
		});
		
		var box = new this.Box;
		box.startAnimation();
		
	    display = this.doc.querySelector('.' + this.conf._interstitial_xbtn_clsname);
		this.startTimer(this.conf._timeout, display);
	}
}

window.onload = function() {
	aia.AppNexInterstitial.init();
}