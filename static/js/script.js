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
	setLang(lang);	
	
	$('.langToggle').on('click',function(){
		var lang = $('.langToggle .nav-img').attr('alt');
		setLang(lang);
	});
	
	
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



