/**
 * written by Cheonsoo Park
 * mansoo1500@gmail.com
 * 2015.11.16
 */
AppNexInterstitialConf = {
	
	// VARIABLES
	_timer_xbtn: 0,
	_timer_close: 15,
	_bg_opacity: 1, // 0 ~ 1
	_bg_color: "#000000", // 0 ~ 1
	_gadget: "", // pc, mobile, tablet
	_browser: "",
	_orientation: "", // portrait, landscape
	_width_landscape: "",
	_height_landscape: "",
	_browser_width: "",
	_browser_height: "",
	_xbtn_img: "close_54x54.png",
	_click_url: "",
	_adImages: [], // 1: portrait mobile, 2: landscape mobile, 3: portrait tablet, 4: landscape tablet
	_userAgent: [], // ["safari", "8.0", "mobile"]
	
	// CLASS NAME
	_interstitial_outer_clsname : "interstitial_outer_clsname",
	_interstitial_xbtn_clsname  : "interstitial_xbtn_clsname",
	_interstitial_img_clsname   : "interstitial_img_clsname",
	
	// CSS
	_interstitial_outer_clsname_css : "font-family: Arial, Verdana, Helvetica, sans-serif; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 100; background: #FFF; overflow: hidden;",
	_interstitial_xbtn_clsname_css  : "width: 54px; height: 54px; float: right; z-index: 11111; text-align: center; font-size: 45px; font-weight: bolder; color: #FFF;",
	_interstitial_img_clsname_css   : "height: 100%; background-repeat: round; background-size: 100% 100%; cursor: pointer; z-index: 111; margin: auto;",
	
}

var aia = aia || {};

aia.AppNexInterstitial = aia.AppNexInterstitial || {};

aia.AppNexInterstitial = {
	conf: AppNexInterstitialConf,
	win: window,
	doc: window.document,
	
	initializeInterstitial: function() {
		
		// Outer Div
		var ele_div = document.createElement("div");
		ele_div.className = this.conf._interstitial_outer_clsname;
		ele_div.style.cssText = this.conf._interstitial_outer_clsname_css;
		ele_div.style.top = "-" + this.conf._browser_height + "px";
		ele_div.style.backgroundColor = "rgba(" + this.hex2rgb(this.conf._bg_color) + ", " + this.conf._bg_opacity + ")";
		
		// X Button
		var ele_xbtn = document.createElement("span");
		ele_xbtn.className = this.conf._interstitial_xbtn_clsname;
		ele_xbtn.style.cssText = this.conf._interstitial_xbtn_clsname_css;
		ele_xbtn.addEventListener("click", this.closeInterstialAd);

		// Image
		var ele_img = document.createElement("div");
		ele_img.className = this.conf._interstitial_img_clsname;
		ele_img.style.cssText = this.conf._interstitial_img_clsname_css;
		ele_img.onclick = function(evt) {
			var conf = aia.AppNexInterstitial.conf;
			if (evt.currentTarget.className != conf._interstitial_xbtn_clsname) {
				location.href = conf._click_url;
			}
		}
		
		// Organize Ad
		ele_img.appendChild(ele_xbtn);
		ele_div.appendChild(ele_img);
		this.doc.body.appendChild(ele_div);
		
	},
	initVariables: function() {
		this.conf._userAgent = this.getBrowserAgent();
		this.getImgSize();
	},
	getScreenMode: function() {
		var widdth, height;
		if (this.conf._userAgent[0] == "safari") {
			width = this.win.screen.width;
			height = this.win.screen.height;
		} else {
			width = this.win.innerWidth;
			height = this.win.innerHeight;
		}
		
		this.conf._browser_width = width;
		this.conf._browser_height = height;
		
		if (width < height) {
			this.conf._orientation = "portrait";
		} else {
			this.conf._orientation = "landscape";
		}
	},
	closeInterstialAd: function(evt) {
		var conf = aia.AppNexInterstitial.conf;
		var outer = document.querySelector("." + conf._interstitial_outer_clsname);
		outer.remove();
		evt.stopPropagation();
	},
	getImgSize: function() {
		var that = this;
		var img = new Image();
		
		that.getScreenMode(); // To Find Out Browser's Orientation
		
		var backimg, width;
		if (that.conf._orientation == "portrait") {
			width = "100%";
			if (that.conf._adImages.length == 4) {
				backimg = (that.conf._userAgent[2] == "mobile") ? that.conf._adImages[0] : that.conf._adImages[2];
			} else {
				backimg = that.conf._adImages[0];
			}
		} else { // landscape
			if (that.conf._adImages.length == 4) {
				width = "100%";
				backimg = (that.conf._userAgent[2] == "mobile") ? that.conf._adImages[1] : that.conf._adImages[3];
			} else if (that.conf._adImages.length == 2) {
				width = "100%";
				backimg = that.conf._adImages[1];
			} else {
				width = that.conf._width_landscape + "px";
				backimg = that.conf._adImages[0];
			}
		}
		
		img.src = backimg;
		
		img.onload = function() {
			
			if (that.conf._orientation == "landscape" && that.conf._adImages.length == 1) {
				// width : height = x_ratio : 1
				var x_ratio = (img.width / img.height * 1).toFixed(2);
				width = that.conf._browser_height * x_ratio + "px";
			}
			var content_img = document.querySelector("." + that.conf._interstitial_img_clsname);
			content_img.style.width = width;
			content_img.style.backgroundImage = "url(" + backimg + ")";
		};
	},
	timerXbtn: function() {
		var that = this;
		var duration = this.conf._timer_xbtn;
		var display = this.doc.querySelector('.' + this.conf._interstitial_xbtn_clsname);
	    var timer = duration, minutes, seconds;
	    if (duration > 0) {
		    this.conf.interval = setInterval(function (evt) {
		        minutes = parseInt(timer / 60, 10);
		        seconds = parseInt(timer % 60, 10);
	
		        if (timer < 0) {
		            that.doc.querySelector("." + that.conf._interstitial_xbtn_clsname).innerHTML = "";
		            that.doc.querySelector("." + that.conf._interstitial_xbtn_clsname).style.backgroundImage = "url(" + that.conf._xbtn_img + ")";
		        	that.win.clearInterval(that.conf.interval);
		        } else {
		       		display.textContent = seconds;
		        	timer--;
		        }
		    }, 1000);
	    } else {
	    	that.doc.querySelector("." + that.conf._interstitial_xbtn_clsname).innerHTML = "";
            that.doc.querySelector("." + that.conf._interstitial_xbtn_clsname).style.backgroundImage = "url(" + that.conf._xbtn_img + ")";
	    }
	},
	timerCloser: function() {
		var that = this;
		setTimeout(function() {
			var outer = document.querySelector("." + that.conf._interstitial_outer_clsname);
			outer.remove();
			that.win.clearInterval(that.conf.interval);
		}, this.conf._timer_close * 1000);
	},
	BoxAnimation: function() {
		
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
	    		if (this.win.screen.width < "700") {
		    		whatGadget = "mobile";
		    	} else {
		    		whatGadget = "tablet";
		    	}
	    	} else {
	    		if (this.win.screen.height < "700") {
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
	hex2rgb: function(colour) {
		var r,g,b;
		if (colour.charAt(0) == "#") {
			colour = colour.substr(1);
		}
		r = colour.charAt(0) + '' + colour.charAt(1);
		g = colour.charAt(2) + '' + colour.charAt(3);
		b = colour.charAt(4) + '' + colour.charAt(5);
		r = parseInt(r, 16);
		g = parseInt(g, 16);
		b = parseInt(b, 16);
		return r + "," + g + "," + b;
	},
	init: function() {
		this.initVariables();
		this.initializeInterstitial();
		this.win.addEventListener("resize", function() {
			var that = aia.AppNexInterstitial;
			that.getImgSize();
		});
		var box = new this.BoxAnimation;
		box.startAnimation();
	    display = this.doc.querySelector('.' + this.conf._interstitial_xbtn_clsname);
		this.timerXbtn();
		this.timerCloser();
	}
}