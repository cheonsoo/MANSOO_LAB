SmartInterstitialConf = {
	id: 8459,
	insertionId: Number(4607876),
	time: Number(20),
	zindex: Number(1000),
	background: String('000000'),
	opacity: Number(50),
	maskOffset: Number(0),
	xPosition: String('center'),
	yPosition: String('middle'),
	yOffset: Number(0),
	xOffset: Number(0),
	fullscreen: Boolean(1),
	scroll: Boolean(1),
	cText: String(''),
	cColor: String('000000'),
	cSize: Number(14),
	cPosition: String('top-right'),
	cPositionProperty: String('inner-creative'),
	cDefaultButton: Boolean(1),
	cCounterTime: Number(2),
	logoUrl: String(''),
	logoClick: String(''),
	bgUrl: String(''),
	delay: Number(0),
	floating: Boolean(1),
	animation: String("slide from top"),
	animationSpeed: String("1"),
	imgPathDirectory: (document.location.protocol == 'https:' ? 'https://ec' : 'http://ak') + '-ns.sascdn.com/diff/templates/images/',
	disableZoom: Boolean(0),
	creative1: {
		id: Number(14383563),
		url: String("http://ced.sascdn.com/diff/92/4607876/lego_jurassic_world_iphone1.jpg"),
		width: Number(320),
		height: Number(460),
		clickUrl: String("http://www7.smartadserver.com/h/mcc?imgid=14383563&insid=4607876&pgid=582136&uid=6101845949496542212&tgt=%3b%24dt%3d1t%3b%24mct%3d0t%3b%24t%3djs%3b%24mctQuova%3d1t%3b%24hc&systgt=%24qc%3d1308609690%3b%24ql%3dmedium%3b%24qpc%3d0%3b%24qpp%3d0%3b%24qt%3d36_0_0t%3b%24dma%3d0%3b%24b%3d16460%3b%24o%3d12100%3b%24mdwi%3d0t%3b%24mdhi%3d0t&go=http%3a%2f%2fwww.lego.com%2fpl-pl%2fjurassicworld"),
		oryginalClickUrl: String("http://www.lego.com/pl-pl/jurassicworld"),
		clickTarget: String("_blank"),
		type: Number(1),
		agencyCode: String(''),
		flashVars: '',
		wMode: String("Opaque"),
		backup: {
			id: Number(),
			url: String(""),
			clickUrl: String(""),
			clickTarget: String("_blank"),
			width: Number(),
			height: Number()
		}
	},
	creative2: {
		id: Number(14383562),
		url: String("http://ced.sascdn.com/diff/92/4607876/lego_jurassic_world_iphone2.jpg"),
		width: Number(480),
		height: Number(287),
		clickUrl: String("http://www7.smartadserver.com/h/mcc?imgid=14383562&insid=4607876&pgid=582136&uid=6101845949496542212&tgt=%3b%24dt%3d1t%3b%24mct%3d0t%3b%24t%3djs%3b%24mctQuova%3d1t%3b%24hc&systgt=%24qc%3d1308609690%3b%24ql%3dmedium%3b%24qpc%3d0%3b%24qpp%3d0%3b%24qt%3d36_0_0t%3b%24dma%3d0%3b%24b%3d16460%3b%24o%3d12100%3b%24mdwi%3d0t%3b%24mdhi%3d0t&go=http%3a%2f%2fwww.lego.com%2fpl-pl%2fjurassicworld"),
		oryginalClickUrl: String("http://www.lego.com/pl-pl/jurassicworld"),
		clickTarget: String("_blank"),
		type: Number(1),
		agencyCode: String(''),
		flashVars: '',
		wMode: String("Opaque"),
		backup: {
			id: Number(),
			url: String(""),
			clickUrl: String(""),
			clickTarget: String("_blank"),
			width: Number(),
			height: Number()
		}
	}
};

(function () {
    var scr = String('');
    if('0'!='1') scr += String('');
    if('0'!='1') scr += String('');

	var lib = (document.location.protocol == 'https:' ? 'https://ec-ns.sascdn.com' : 'http://ak-ns.sascdn.com') + '/diff/templates/js/interstitial-two-creatives/sas-interstitial-1.2.js';

	if ('undefined' != typeof sas_ajax && sas_ajax) {
		var js = document.createElement('script'); js.src = lib;
		sas_appendToContainer(8459, js);
		if (scr.replace(/\r\n/gm, '')) {
			var ifr = document.createElement('iframe');
			ifr.src = 'about:blank';
			var css = 'position:absolute;left:-1000px;width:1px;height:1px';
			ifr.setAttribute('style', css);
			ifr.style.cssText = css;
			sas_appendToContainer(8459, ifr);
			var d = ifr.contentWindow.document;
			d.open('text/html', 'replace');
			d.write('<!DOCTYPE html><head></head><body>' + scr + '</body></html>');
			d.close();
		}
	} else {
		if(!document.getElementById("sas_8459")) document.write('<div id="sas_8459"></div>');
		document.write('<scr'+'ipt type="text/javascript" src="'+lib+'"></scr'+'ipt>' + scr);
	}
})();
