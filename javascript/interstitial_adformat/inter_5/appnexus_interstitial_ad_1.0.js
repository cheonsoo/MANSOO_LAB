AppNexInterstitialConf = {
	
	// VARIABLES
	_timeout: 1,
	_gadget: "", // pc, mobile, tablet
	_browser: "",
	_image_mode: "one_image", // one_image, two_image
	_orientation: "", // portrait, landscape
	_width_landscape: "",
	_height_landscape: "",
	_browser_width: "",
	_browser_height: "",
	_image_width: "",
	_image_height: "",
	//_background_img: "a_man.jpg",
	//_background_img_landscape: "solid_snake.jpg",
	_xbtn_img: "close_54x54.png",
	_click_url: "http://google.com",
	_adImages: ["mobile_portrait.jpg", "mobile_landscape.jpg", "table_portrait.jpg", "tablet_landscape.png"], // 1: portrait mobile, 2: landscape mobile, 3: portrait tablet, 4: landscape tablet
	
	// CLASS NAME
	_interstitial_outer_clsname : "interstitial_outer_clsname",
	_interstitial_xbtn_clsname  : "interstitial_xbtn_clsname",
	_interstitial_img_clsname   : "interstitial_img_clsname"
	
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
		
		// X Button
		var ele_xbtn = document.createElement("span");
		ele_xbtn.className = this.conf._interstitial_xbtn_clsname;
		ele_xbtn.addEventListener("click", this.close_interstial_ad);

		// Image
		var ele_img = document.createElement("div");
		ele_img.className = this.conf._interstitial_img_clsname;
		ele_img.onclick = function(evt) {
			var conf = aia.AppNexInterstitial.conf;
			if (evt.currentTarget.className != "interstitial_xbtn") {
				//location.href = conf._click_url;
				console.log("move to " + conf._click_url);
			}
		}
		
		// Organize Ad
		ele_img.appendChild(ele_xbtn);
		ele_div.appendChild(ele_img);
		this.doc.body.appendChild(ele_div);
		
	},
	init_variables: function() {
		var agent = this.getBrowserAgent();
		_browser = agent[0];
		_gadget = agent[2];
		//this.getScreenMode();
		this.getImgSize();
	},
	getScreenMode: function() {
		var widdth, height;
		width = window.innerWidth;
		height = window.innerHeight;
		
		this.conf._browser_width = width;
		this.conf._browser_height = height;
		
		if (width < height) {
			this.conf._orientation = "portrait";
		} else {
			this.conf._orientation = "landscape";
		}
	},
	close_interstial_ad: function(evt) {
		var conf = aia.AppNexInterstitial.conf;
		var outer = document.querySelector("." + conf._interstitial_outer_clsname);
		outer.remove();
		evt.stopPropagation();
	},
	getImgSize: function() {
		var that = this;
		var img = new Image();
		img.src = this.conf._adImages[0];
		
		img.onload = function() {
			that.conf._image_width = img.width;
			that.conf._image_height = img.height;
			
			var x_ratio = (img.width / img.height * 1).toFixed(2);
			
			that.getScreenMode();
			
			// width : height = x_ratio : 1
			that.conf._width_landscape = that.conf._browser_height * x_ratio;
			
			var outer       = document.querySelector("." + that.conf._interstitial_outer_clsname);
			var content_img = document.querySelector("." + that.conf._interstitial_img_clsname);
			
			if (that.conf._orientation == "portrait") {
				content_img.style.width = "100%";
				content_img.style.backgroundImage = "url(" + that.conf._adImages[0] + ")";
			} else {
				if (that.conf._image_mode == "two_image") {
					content_img.style.width = "100%";
					content_img.style.backgroundImage = "url(" + that.conf._adImages[1] + ")";
				} else {
					content_img.style.width = that.conf._width_landscape + "px";
					content_img.style.backgroundImage = "url(" + that.conf._adImages[0] + ")";
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
	getBrowserAgent: function() {
		var N = navigator.appName, ua = navigator.userAgent, tem;
	    // if IE11+
	    if (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(ua) !== null) {
	        var M = ["Internet Explorer"];
	        if(M && (tem = ua.match(/rv:([0-9]{1,}[\.0-9]{0,})/)) != null)
	        	M[2] = tem[1];
	        M = M ? [M[0], M[2]] : [N, navigator.appVersion,'-?'];
	        return M;
	    }
	    var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
	    if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) {
	    	M[2] = tem[1];
	    }
	    M = M ? [M[1].toLowerCase(), M[2]] : [N, navigator.appVersion, '-?'];
	    
	    this.getScreenMode();
	    
	    var whatGadget = "";
	    if (this.isMobileBrowser()) {
	    	if (this.conf._orientation == "portrait") {
	    		if (this.win.screen.width < "600") {
		    		whatGadget = "mobile";
		    	} else {
		    		whatGadget = "tablet";
		    	}
	    	} else {
	    		if (this.win.screen.height < "600") {
		    		whatGadget = "mobile";
		    	} else {
		    		whatGadget = "tablet";
		    	}
	    	}
	    } else {
	    	whatGadget = "pc";
	    }
	    M.push(whatGadget);
	    console.log(M);
	    return M;
	},
	isMobileBrowser: function() { 
		if (navigator.userAgent.match(/Android/i) || 
			navigator.userAgent.match(/webOS/i) || 
			navigator.userAgent.match(/iPhone/i) || 
			navigator.userAgent.match(/iPad/i) || 
			navigator.userAgent.match(/iPod/i) || 
			navigator.userAgent.match(/BlackBerry/i) || 
			navigator.userAgent.match(/Windows Phone/i) ) {
			return true;
		} else {
			return false;
		}
	},
	init: function() {
		this.init_variables();
		
		this.initialize_interstitial();
		
		this.win.addEventListener("resize", function() {
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