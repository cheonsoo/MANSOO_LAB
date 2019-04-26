/**
 * written by Cheonsoo Park
 * mansoo1500@gmail.com
 * 2015.11.16
 */
var AppNexusAdTemplate = AppNexusAdTemplate || {};

AppNexusAdTemplate.AppNexInterstitial = AppNexusAdTemplate.AppNexInterstitial || {};

AppNexusAdTemplate.AppNexInterstitialConf = {
		
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
	_xbtn_img: "",
	_click_url: "",
	_adImages: [], // 1: portrait mobile, 2: landscape mobile, 3: portrait tablet, 4: landscape tablet
	_userAgent: [], // ["safari", "8.0", "mobile"]
	
	// CLASS NAME
	_interstitial_outer_clsname    : "interstitial_outer_clsname",
	_interstitial_xbtn_clsname     : "interstitial_xbtn_clsname",
	_interstitial_xbtn_txt_clsname : "interstitial_xbtn_txt_clsname",
	_interstitial_img_clsname      : "interstitial_img_clsname",
	
	// CSS
	_interstitial_outer_clsname_css    : "font-family: Arial, Verdana, Helvetica, sans-serif; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 100; background: #FFF; overflow: hidden;",
	_interstitial_xbtn_clsname_css     : "width: 54px; height: 54px; float: right; z-index: 11111; text-align: center; font-size: 35px; font-weight: bolder; color: #FFF; cursor: pointer;",
	_interstitial_xbtn_txt_clsname_css : "width: 40px; height: 40px; border: 7px #FFF solid; border-radius: 40px; margin: 5px 5px 0 0;",
	_interstitial_img_clsname_css      : "height: 100%; background-repeat: round; background-size: 100% 100%; cursor: pointer; z-index: 111; margin: auto;",
	
}

AppNexusAdTemplate.AppNexInterstitial = {
	conf: AppNexusAdTemplate.AppNexInterstitialConf,
	win: window,
	doc: window.document,
	
	initializeInterstitial: function(aat) {
		
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
		ele_xbtn.addEventListener("click", function() {
			var evt = arguments[0];
			aat.closeInterstialAd(aat, evt);
		});

		// Image
		var ele_img = document.createElement("div");
		ele_img.className = this.conf._interstitial_img_clsname;
		ele_img.style.cssText = this.conf._interstitial_img_clsname_css;
		ele_img.onclick = function(evt) {
			if (evt.currentTarget.className != aat.conf._interstitial_xbtn_clsname) {
				location.href = aat.conf._click_url;
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
	closeInterstialAd: function(aat, evt) {
		var outer = aat.doc.querySelector("." + aat.conf._interstitial_outer_clsname);
		if (outer) {
			outer.remove();
		}
		evt.stopPropagation();
	},
	getImgSize: function() {
		
		var aat = this;
		
		if (aat.conf._adImages.length == 0) {
			return false;
		}
		
		var img = new Image();
		
		aat.getScreenMode(); // To Find Out Browser's Orientation
		
		var backimg, width;
		if (aat.conf._orientation == "portrait") {
			width = "100%";
			if (aat.conf._adImages.length == 4) {
				backimg = (aat.conf._userAgent[2] == "mobile") ? aat.conf._adImages[0] : aat.conf._adImages[2];
			} else if (aat.conf._adImages.length == 3) {
				backimg = (aat.conf._userAgent[2] == "mobile") ? aat.conf._adImages[0] : aat.conf._adImages[2];
			} else {
				backimg = aat.conf._adImages[0];
			}
		} else { // landscape
			width = "100%";
			if (aat.conf._adImages.length == 4) {
				backimg = (aat.conf._userAgent[2] == "mobile") ? aat.conf._adImages[1] : aat.conf._adImages[3];
			} else if (aat.conf._adImages.length == 3) {
				backimg = (aat.conf._userAgent[2] == "mobile") ? aat.conf._adImages[0] : aat.conf._adImages[2];
			} else if (aat.conf._adImages.length == 2) {
				backimg = aat.conf._adImages[1];
			} else {
				backimg = aat.conf._adImages[0];
			}
		}
		img.src = backimg;
		
		img.onload = function() {
			
			var content_img = aat.doc.querySelector("." + aat.conf._interstitial_img_clsname);
			if (content_img) {
				content_img.style.backgroundImage = "url(" + backimg + ")";
				
				if (aat.conf._orientation == "landscape" && (aat.conf._adImages.length == 1 || aat.conf._adImages.length == 3) ) {
					// width : height = x_ratio : 1
					var x_ratio = (img.width / img.height * 1).toFixed(2);
					//width = aat.conf._browser_height * x_ratio + "px";
					width = content_img.scrollHeight * x_ratio + "px";
				}
				content_img.style.width = width;
			}
		};
	},
	timerXbtn: function() {
		var aat = this;
		var duration = aat.conf._timer_xbtn;
		var display = aat.doc.querySelector('.' + aat.conf._interstitial_xbtn_clsname);
	    var timer = duration, minutes, seconds;
	    if (duration > 0) {
		    aat.conf.interval = setInterval(function (evt) {
		        minutes = parseInt(timer / 60, 10);
		        seconds = parseInt(timer % 60, 10);
	
		        if (timer < 0) {
		        	var xbtn = aat.doc.querySelector("." + aat.conf._interstitial_xbtn_clsname);
		        	if (aat.conf._xbtn_img == "") { // Not using image for x button
		        		xbtn.innerHTML = "X";
			        	xbtn.style.cssText = xbtn.style.cssText + aat.conf._interstitial_xbtn_txt_clsname_css;
		        	} else { // Using image for x button
		        		xbtn.innerHTML = "";
			            xbtn.style.backgroundImage = "url(" + aat.conf._xbtn_img + ")";
		        	}
		        	aat.win.clearInterval(aat.conf.interval);
		        } else {
		       		display.textContent = seconds;
		        	timer--;
		        }
		    }, 1000);
	    } else {
	    	aat.doc.querySelector("." + aat.conf._interstitial_xbtn_clsname).innerHTML = "";
            aat.doc.querySelector("." + aat.conf._interstitial_xbtn_clsname).style.backgroundImage = "url(" + aat.conf._xbtn_img + ")";
	    }
	},
	timerCloser: function() {
		var aat = this;
		setTimeout(function() {
			var outer = aat.doc.querySelector("." + aat.conf._interstitial_outer_clsname);
			if (outer) {
				outer.remove();
			}
			aat.win.clearInterval(aat.conf.interval);
		}, aat.conf._timer_close * 1000);
	},
	BoxAnimation: function(aat) {
		
		var animationStartTime = 0;
		var animationDuration = 50;
		var target = aat.doc.querySelector("." + aat.conf._interstitial_outer_clsname);
		
		this.startAnimation = function() {
			animationStartTime = Date.now();
			requestAnimationFrame(update);
		};
		
		function update() {
			var currentTime = Date.now();
			var positionInAnimation = (currentTime - animationStartTime) / animationDuration;
			
			var xPosition = 0;
			var yPosition = positionInAnimation * 100;
			target.style.transform = 'translate(' + xPosition + 'px, ' + yPosition + 'px)';
			
			if (yPosition < aat.conf._browser_height) {
				requestAnimationFrame(update);
			} else {
				target.style.transform = 'translate(0px, ' + aat.conf._browser_height + 'px)';
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
	    
	    M.push(this.whatDeviceIsThis());
	    console.log(M);
	    return M;
	},
	whatDeviceIsThis: function() {
		console.log("userAgent : " + navigator.userAgent);
		console.log("width : " + this.win.screen.width);
		console.log("height : " + this.win.screen.height);
		
		var device = "";
		if (navigator.userAgent.match(/Android/i) || 
			navigator.userAgent.match(/webOS/i) || 
			navigator.userAgent.match(/iPhone/i) || 
			navigator.userAgent.match(/iPad/i) || 
			navigator.userAgent.match(/iPod/i) || 
			navigator.userAgent.match(/BlackBerry/i) || 
			navigator.userAgent.match(/Windows Phone/i) ) {
			
			if (navigator.userAgent.match(/pad/i)) {
				device = "tablet";
			} if (navigator.userAgent.match(/phone/i) || navigator.userAgent.match(/pod/i)) {
				device = "mobile";
			} else if (this.conf._orientation == "portrait" && this.win.screen.width > "740") {
				device = "tablet";
			} else if (this.conf._orientation == "landscape" && this.win.screen.height > "740") {
				device = "tablet";
			} else {
				device = "mobile";
			}
		} else {
			device = "pc";
		}
		return device;
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
		var aat = this;
		aat.initVariables();
		aat.initializeInterstitial(aat);
		function rotateScreen() {
			aat.getImgSize();
		}
		aat.win.addEventListener("resize", rotateScreen);
		
		var box = new aat.BoxAnimation(aat);
		box.startAnimation();
		aat.timerXbtn();
		aat.timerCloser();
	}
}