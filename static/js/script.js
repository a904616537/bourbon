	browserRedirect();
	// 中英文切换
	var type=navigator.appName
	if (type=="Netscape"){
	var lang = navigator.language
	}
	else{
	var lang = navigator.userLanguage
	}
	//取得浏览器语言的前两个字母
	var lang = lang.substr(0,2)

	var cookie_lang = $.cookie('lang');
	if(cookie_lang) {
		setLang(cookie_lang);
	} else {
		setLang(lang);
	}
	
	
	$('.langToggle').on('click',function(){
		var lang = $('.langToggle .nav-img').attr('alt');
		$.cookie('lang', lang, { expires: 7 });
		setLang(lang);
	});
	function browserRedirect() {  
	    var sUserAgent = navigator.userAgent.toLowerCase();  
	    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";  
	    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";  
	    var bIsMidp = sUserAgent.match(/midp/i) == "midp";  
	    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  
	    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";  
	    var bIsAndroid = sUserAgent.match(/android/i) == "android";  
	    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";  
	    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";  
	    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
	        // window.location.href="http://106.14.94.210:8140";  
	    } else {
	        window.location.href="http://mobile.bourboncookhouse.com/";
	    }
	}
	
	function setLang(lang){
		if(lang == 'en'){
			$('.langToggle').html('<img src="static/imgs/china.png" class="nav-img" alt="zh"/>');
			$('.changeLang .zh').hide();
			$('.changeLang .en').show();
		}else{
			$('.langToggle').html('<img src="static/imgs/usa.png" class="nav-img" alt="en"/>');
			$('.changeLang .en').hide();
			$('.changeLang .zh').show();
		}
	}



