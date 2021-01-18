$(function(){
  //超过一定高度导航添加类名
  var nav=$("header"); //得到导航对象  
  var win=$(window); //得到窗口对象  
  var sc=$(document);//得到document文档对象。  
      $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(sc.scrollTop()>=100){  
      nav.addClass("on");   
    }else{  
     nav.removeClass("on");  
    }  
  })
  
  

  //移动端展开nav
  $('#navToggle').on('click',function(){
    $('.m_nav').addClass('open');
  })
  //关闭nav
  $('.m_nav .top .closed').on('click',function(){
    $('.m_nav').removeClass('open');
  })
  
  //二级导航  移动端
    $(".m_nav .ul li").click(function() {
    $(this).children("div.dropdown_menu").slideToggle('slow')
        $(this).siblings('li').children('.dropdown_menu').slideUp('slow');				
    });

})


  // 文字滚动新闻
  $('.marquee').kxbdMarquee({
    direction: 'left',
    eventA: 'mouseenter',
    scrollDelay: 40, //时长
    eventB: 'mouseleave'
  });

// banner

  $(".mode01 .flexslider").flexslider({
    pauseOnHover: true,
    slideshowSpeed: 4000,
    animationSpeed: 400,
    touch: true
});

$(".topic .flexslider").flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 250,
    itemMargin: 10,
    minItems: 2,
    maxItems: 4
    // pausePlay: true
});

// 首页全屏
$('.sliders_banner .flexslider').flexslider({
  directionNav: true,
  pauseOnAction: false,
  slideshowSpeed: 5000
});



var swiper = new Swiper('.banner_ind .swiper-container', {
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
  speed: 500,
  loop: true, //必须
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  effect: 'fade',
  fadeEffect: {
      crossFade: true,
  }

});





  //字号大小
function FontSize2(Size,obj){
  var iNum = 16;

  $(Size).find('.max').bind('click',function (){
      iNum+=2;
      if(iNum>=24){
          iNum = 24;
      }
      $(obj).css('font-size',iNum + 'px');
      return iNum;
  })

  $(Size).find('.mid').bind('click',function (){
      iNum = 17;
      $(obj).css('font-size',iNum + 'px');
      return iNum;
  })

  $(Size).find('.min').bind('click',function (){
      iNum-=2;
      if(iNum<=16){
          iNum = 14;
      }
      $(obj).css('font-size',iNum + 'px');
      return iNum;
  })
};




// 微信二维码
function weixin01(){
	$('.weixin01').hover(function(){
		$('.codeWrap').show();
	},function(){
		$('.codeWrap').hide();
	})
}
function phoneWeixin(){
	
	$('.weixin02').click(function(){
		$('.lightbox_back').show(500);
		$('.lightbox_fore').show(500);
		$('body').css('overflow','hidden');
	})
	$('.boxClose').click(function(){
		$(".lightbox_back").hide(500);
		$(".lightbox_fore").hide(500);
		$("body").css("overflow", "auto");
	})
}


// banner
var swiper = new Swiper('.banner .swiper-container', {
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	autoplay: 5000,
	loop: true,
	pagination: '.swiper-pagination',
	paginationClickable: true,
	paginationBulletRender: function (swiper, index, className) {
		return '<span class="' + className + '">' + (index + 1) + '</span>';
	}
  
  });


  // 侧导航
  $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
  
      // Variables privadas
      var links = this.el.find('.link');
      // Evento
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };
  
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
        $this = $(this);
        $next = $this.next();
  
      $next.slideToggle();
      $this.parent().toggleClass('open');
  
      if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      }
  
  
    };
    
    var accordion = new Accordion($('#accordion'), false);
    $('.submenu li').click(function () {
      $(this).addClass('current').siblings('li').removeClass('current');
    });
  
  
  });
  
  
    
      $('.accordion li').click(function () {
         $(this).addClass('open').siblings('li').removeClass('open');
       });
  
  
  // $(".account-l .menuNav").click(function(){
  // 	if($(".accordion").css("display")=="none"){
  // 		$('.accordion').fadeIn(300);
  // 	}else{
  // 	$(".accordion").fadeOut(300);
  // 	}
  // 	});
  
  
    $('.account-l .menuNav').click(function(){//点击a标签  
          if($('.accordion').is(':hidden')){//如果当前隐藏  
           $('.accordion').addClass( "curr" ).show();//那么就显示div 
          }else{//否则  
          $('.accordion').removeClass( "curr" ).hide();//就隐藏div 
          }  
    });
    
      $('.submenu li').click(function () {
        $(this).addClass('current').siblings('li').removeClass('current');
      });
      

// tab切换
function tab(id){
	var oTab = $(id);
	var oLi = oTab.find('ul').eq(0).find('li');
	var oDd = oTab.find('dd');
	var oMore = oTab.find('.tabMore span')
	 oLi.hover(function(e) {
		 var thisLi =$(this);
           //setTimeout(function(){
			   thisLi.siblings('li').removeClass('active');  // 删除其他兄弟元素的样式
				thisLi.addClass('active');                            // 添加当前元素的样式
				oDd.css('display','none');
				oDd.eq(thisLi.index()).css('display','block').siblings().css('display','none');
				oMore.css('display','none');
				oMore.eq(thisLi.index()).css('display','block').siblings().css('display','none');
			   }
			   //,100)
        //}
		);
	}
function subTab(id){
	var oTab = $(id);
	var oLi = oTab.find('ul').eq(0).find('li');
	var oDd = oTab.find('dd');
	 oLi.hover(function(e) {
		 var thisLi =$(this);
            //$(this).addClass('active').sibling('li').removeClass('active');
           //setTimeout(function(){
			   thisLi.siblings('li').removeClass('active');  // 删除其他兄弟元素的样式
				thisLi.addClass('active');                            // 添加当前元素的样式
				oDd.css('display','none');
				oDd.eq(thisLi.index()).css('display','block').siblings().css('display','none');
			   }
			   //,100)
        //}
		);
	}
function liHide(){
	var iWSon = document.documentElement.clientWidth;
	if(iWSon<640){
		$('.ddList00').each(function(){
		$(this).find('li').each(function(e){
			if(e>=5){
			$(this).remove()
			}
		})
		
	})
	}
	
}



// 返回顶部

jQuery(document).ready(function($){
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
       }, scroll_top_duration
    );
  });

});