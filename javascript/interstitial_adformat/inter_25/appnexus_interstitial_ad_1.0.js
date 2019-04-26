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
	_show_close_x: false,
	_timer_close: 15,
	_bg_opacity: 1, // 0 ~ 1
	_bg_color: "#000000",
	_close_button_color: "#FFFFFF",
	_gadget: "", // pc, mobile, tablet
	_browser: "",
	_orientation: "", // portrait, landscape
	_browser_width: "",
	_browser_height: "",
	_xbtn_img: "",
	_click_url: "",
	_adImages: [], // 1: portrait mobile, 2: landscape mobile, 3: portrait tablet, 4: landscape tablet
	_userAgent: [], // ["safari", "8.0", "mobile"]
	_backimg: "",
	_preview: "false",
	_imageMode: "img_1x1",

	// CLASS NAME
	_interstitial_outer_clsname      : "interstitial_outer_clsname",
	_interstitial_xbtn_clsname       : "interstitial_xbtn_clsname",
	_interstitial_xbtn_txt_clsname   : "interstitial_xbtn_txt_clsname",
	_interstitial_img_inner_clsname  : "interstitial_img_inner_clsname",
	_interstitial_html_inner_clsname : "interstitial_html_inner_clsname",

	// CSS
	_interstitial_outer_clsname_css      : "font-family: Arial, Verdana, Helvetica, sans-serif; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 100; background: #FFF; overflow: hidden;",
	_interstitial_xbtn_clsname_css       : "float: right; z-index: 11111; text-align: center; font-weight: bolder; color: #FFFFFF; position: fixed; top: 0px; right: 0px; width: 25px; height: 25px; font-size: 23px;",
	_interstitial_xbtn_txt_clsname_css   : "border-radius: 40px; margin: 5px 5px 0 0; border-style: solid; border-width: 5px; border-color: #FFFFFF;",
	_interstitial_img_inner_clsname_css  : "zoom: 5; max-width: 100%; max-height: 100%; margin: auto; display: block; top: 49.999%; left: 50%; transform: translate(-50%, -50%); position: absolute;",
	_interstitial_html_inner_clsname_css : "width: 100%; height: 100%; overflow: hidden"

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

		// Content
		var ele_content;
		if (this.conf._imageMode == "html") {
			ele_div.style.backgroundColor = "";
			// HTML
			ele_content = document.createElement("iframe");
			ele_content.className = this.conf._interstitial_html_inner_clsname;
			ele_content.style.cssText = this.conf._interstitial_html_inner_clsname_css;
			var html_content = document.getElementById("APPNEXUS_INTERSTITIAL_AD_IFRAME_INNER_CONTENTS").innerHTML;
			ele_content.src="javascript:'" + html_content + "'";
		} else {
			// Image
			ele_content = document.createElement("img");
			ele_content.className = this.conf._interstitial_img_inner_clsname;
			ele_content.style.cssText = this.conf._interstitial_img_inner_clsname_css;
			ele_content.src = this.conf._backimg;
			ele_content.alt = "";
			ele_content.onclick = function(evt) {
				if (evt.currentTarget.className != aat.conf._interstitial_xbtn_clsname) {
					aat.win.open(aat.conf._click_url, "_blank", "");
				}
			}
			if (this.conf._userAgent[0] == "firefox") {
				if (this.conf._orientation == "portrait") {
					ele_content.style.cssText = ele_content.style.cssText + "width: 100%";
				} else {
					ele_content.style.cssText = ele_content.style.cssText + "height: 100%";
				}
			}
		}

		// X Button
		// Resizing X button
		if (this.conf._browser_width < 360) {
			this.conf._interstitial_xbtn_clsname_css     += "width: 20px; height: 20px; font-size: 18px;";
			this.conf._interstitial_xbtn_txt_clsname_css += "border-width: 3px;";
		} else if (this.conf._browser_width > 1000) {
			this.conf._interstitial_xbtn_clsname_css     += "width: 50px; height: 50px; font-size: 45px;";
			this.conf._interstitial_xbtn_txt_clsname_css += "border-width: 8px;";
		}
		// Set Close Button Color
		this.conf._interstitial_xbtn_clsname_css     += "color: " + this.conf._close_button_color + ";";
		this.conf._interstitial_xbtn_txt_clsname_css += "border-color: " + this.conf._close_button_color + ";";

		var ele_xbtn = document.createElement("span");
		ele_xbtn.className = this.conf._interstitial_xbtn_clsname;
		ele_xbtn.style.cssText = this.conf._interstitial_xbtn_clsname_css;

		// Organize Ad
		ele_div.appendChild(ele_xbtn);
		ele_div.appendChild(ele_content);
		this.doc.body.appendChild(ele_div);
	},
	initVariables: function() {
		this.conf._userAgent = this.getBrowserAgent();
		this.getImgSize();
	},
	getScreenMode: function() {
		var widdth, height;
		width = this.win.innerWidth;
		height = this.win.innerHeight;
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

		if (aat.conf._imageMode == "html") {
			return false;
		}

		aat.getScreenMode(); // To Find Out Browser's Orientation
		var backimg;
		if (aat.conf._orientation == "portrait") {
			if (aat.conf._adImages.length == 4) {
				backimg = (aat.conf._userAgent[2] == "mobile") ? aat.conf._adImages[0] : aat.conf._adImages[2];
			} else if (aat.conf._adImages.length == 3) {
				backimg = (aat.conf._userAgent[2] == "mobile") ? aat.conf._adImages[0] : aat.conf._adImages[2];
			} else {
				backimg = aat.conf._adImages[0];
			}
		} else { // landscape
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
		aat.conf._backimg = backimg;
		var content_img = aat.doc.querySelector("." + aat.conf._interstitial_img_inner_clsname);
		if (content_img) {
			content_img.src = backimg;
		}

	},
	timerXbtn: function() {
		var aat = this;
		if (!aat.conf._show_close_x) {
			return false;
		}
		var xbtn = aat.doc.querySelector("." + aat.conf._interstitial_xbtn_clsname);
		var duration = aat.conf._timer_xbtn-1;
		var minites;
		var seconds;
		var timer = duration;

		if (aat.conf._timer_xbtn == 0) {
			xbtn.innerHTML = "X";
        	xbtn.style.cssText = xbtn.style.cssText + aat.conf._interstitial_xbtn_txt_clsname_css;
    		xbtn.addEventListener("click", function() {
    			var evt = arguments[0];
    			aat.closeInterstialAd(aat, evt);
    		});
		} else {
		    aat.conf.interval = setInterval(function (evt) {
		        minutes = parseInt(timer / 60, 10);
		        seconds = parseInt(timer % 60, 10);
		        if (timer < 0) {
		        	if (aat.conf._xbtn_img == "") { // Not using image for x button
		        		xbtn.innerHTML = "X";
		        		xbtn.style.cssText = xbtn.style.cssText + aat.conf._interstitial_xbtn_txt_clsname_css;
		        		xbtn.addEventListener("click", function() {
		        			var evt = arguments[0];
		        			aat.closeInterstialAd(aat, evt);
		        		});
		        	} else { // Using image for x button
		        		xbtn.innerHTML = "";
			            xbtn.style.backgroundImage = "url(" + aat.conf._xbtn_img + ")";
		        	}
		        	aat.win.clearInterval(aat.conf.interval);
		        } else {
		        	xbtn.textContent = seconds + 1;
		        	timer--;
		        }
		    }, 1000);
		}
	},
	timerCloser: function() {
		var aat = this;
		if (aat.conf._timer_close != 0) {
			setTimeout(function() {
				var outer = aat.doc.querySelector("." + aat.conf._interstitial_outer_clsname);
				if (outer) {
					outer.remove();
				}
				aat.win.clearInterval(aat.conf.interval);
			}, (aat.conf._timer_close+1) * 1000);
		}
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
	    return M;
	},
	whatDeviceIsThis: function() {
		var device = "";
		if (this.conf._preview) {
			device = "mobile";
		} else {
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

		// Find out if it's in iframe or not. For DX tag
		if (!aat.conf._preview && aat.win.self != aat.win.top) {
			aat.win = aat.win.parent;
			aat.doc = aat.win.document;
		}

		/*
		var img = new Image();
		img.src = aat.conf._adImages[0];
		img.onload = function() { // To load Ad after creative image is loaded
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
		*/

		if (aat.conf._imageMode == "html") {
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
		} else {
			var img = new Image();
			img.src = aat.conf._adImages[0];
			img.onload = function() { // To load Ad after creative image is loaded
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

	}
}
