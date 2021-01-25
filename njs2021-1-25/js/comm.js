function nav() {
	//导航
	var vNavWaitSlide,NavWaitSlide;
		//if($('.nav').css('display')=='none'){
			// 去除了hover事件，以确保手机屏幕下可以点击
		   $('#nav ul > li').bind({
		   	mouseenter: function(e){
				 $(this).addClass("on");
				  $(this).find(".minfoWrap").fadeIn(0);
				  /*var current_li=$(this),targ=$(current_li).find('ul:first');
				  NavWaitSlide = setTimeout(function() { 
					 // if(!$(targ).is(':visible'))
					 // {
							$(targ).slideDown(200);
					 // }
				  },100)*/
			  },
			 mouseleave:function(e){
				  //clearTimeout(NavWaitSlide);
				  $(this).find('.minfoWrap').fadeOut(100);
				  $(this).removeClass("on");
			  }
			
		})
	//}
	//ie6
	
	if ( $.support.msie){
		 if(parseInt( $.browser.version )<7){
			 $("header.header").prepend("<div class='ie6' style='display:none;'><span>关闭</span>非常抱歉，本站不再支持您的浏览器，请升级您的浏览器到 <a href='http://www.microsoft.com/zh-cn/download/internet-explorer-8-details.aspx' target='_blank'>更高的版本</a>！以获得更好的观看效果。</div>");
			 $(".ie6").animate({height:"toggle",opacity:"toggle"},1000);
			 $(".ie6 span").click(function(){$(".ie6").slideUp()})
	}}
}


