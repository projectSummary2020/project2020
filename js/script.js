//搜索点击弹出效果
function SerMax(){
    $('#btn_ser').click(function(){
    	$('#ser').toggle(300);
    })
}
//导航置顶
$(window).resize(function(){
	var sWSon = document.documentElement.clientWidth;
		nav();
		if(sWSon>991){  //宽度判断
				$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop > 180){  //卷曲高度
				$('.wraq_header').addClass('current');
				// $("#nav ul > li").unbind("mouseenter").unbind("mouseleave");
				}
				
			else{
				$('.wraq_header').removeClass('current');
				// nav();
				// $("#nav ul > li").bind("mouseenter").bind("mouseleave");
	
				}
		});
			
		}else{
			$ (window).unbind ('scroll');
			// $('.topWrap').css({display:'none'});
			$('.union_top').removeClass('current');
		}
	newsImgHeight();

	})

//12.移动端顶部点击弹出下拉菜单
function Menu(menu,main){
    var onOff = true;
    $(menu).bind('click',function (){
        $(main).slideToggle();
        if($(this).find('span').hasClass('glyphicon-menu-hamburger')){
			$(this).find('span').removeClass('glyphicon-menu-hamburger');
			$(this).find('span').addClass('glyphicon-remove');
		}else{
			$(this).find('span').addClass('glyphicon-menu-hamburger');
			$(this).find('span').removeClass('glyphicon-remove');
			}
		
    })
    $(main).find('li > span').bind('click',function (){
    	if($(this).hasClass('glyphicon-menu-right')){
			$(this).removeClass('glyphicon-menu-right');
			$(this).addClass('glyphicon-menu-down');
		}else{
			$(this).addClass('glyphicon-menu-right');
			$(this).removeClass('glyphicon-menu-down');
			}
        if($(this).parent().hasClass('on')){
            $(this).parent().find('.subNavs').slideUp();
            $(this).parent().removeClass('on');
            return false;
        };
        $(this).parent().siblings().removeClass('on');
        $(this).parent().siblings().find('.subNavs').slideUp();
        $(this).parent().addClass('on');
        $(this).parent().find('.subNavs').slideDown();
    })
	
};


// 二级页头部大图高度
function SubImgHeight(){
   

}

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
//大图切换高度问题
function ImgHeight(){
	//var oSlider = document.getElementById('slider');
	// var aLiSlider = oSlider.getElementsByTagName('img');
	function ImgHeight02(){
		var iWSon = document.documentElement.clientWidth;
	 	if(iWSon>=1600){
	    	$('.mode01 .slides,.mode01 .slides li').css('height', 902+'px');
		 	//$(".iosSliderDemo").css("padding-bottom", 380+'px');

	    }
		else{
	    	$('.mode01 .slides,.mode01 .slides li').css('height',iWSon * (371/661)+'px');
	  		//$(".iosSliderDemo").css("padding-bottom", iWSon * (380/1178)+'px');
	    }
		

	
	}
	ImgHeight02();
	marqueeWidth()
	    $(window).resize(function(){
	    	
	    	ImgHeight02();
			marqueeWidth()
	    })
		
}
function marqueeWidth(){
	var iWSon = document.documentElement.clientWidth;
	if(iWSon >= 1198){
		$('.marquee').css('width', 1050+'px');
		}else {
			$('.marquee').css('width', iWSon-163+'px');
			}
	}
//大图切换高度问题
function newsImgHeight(){
	function newsImgHeight02(){
		var iWSon = document.documentElement.clientWidth;
	 	if(iWSon>=711){
	    	$('.fluidHeight,.sliderContainer').css('height', 224+'px');
		 	$(".iosSliderDemo").css("padding-bottom", 224+'px');
	    }else if(iWSon<=800){
	    	$('.fluidHeight,.sliderContainer').css('height',iWSon * (198/721)+'px');
	  		$(".iosSliderDemo").css("padding-bottom", iWSon * (198/721)+'px');
	    }
	}
	newsImgHeight02();
	    // $(window).resize(function(){
	    // 	newsImgHeight02();
	    // 	alert(3)
	    // })
		
}


/*回到顶部*/

 	$(window).resize(function(){
					var h = $(window).height();
					$('.goTop').css('top',h-150);
					
					$(window).scroll(function(){				
						var scrollTop = $(document).scrollTop();					  
						$('.goTop').stop().animate({
							top: h + scrollTop-150
						},300);
					});
					//zTop();
					liHide();//最新多余li隐藏
					notice_liHide()//通知公告多余四个隐藏
	}).resize();
	
//gotop

		$('.goTop').click(function(){

			$('body,html').stop().animate({scrollTop:0});

			return false;

		});
		
$(function(){
	$("#main li").mousemove(function(){
		
		$(this).find('.til_slides').fadeIn(500);
		
		})
	$("#main li").mouseleave(function(){
		$(this).find('.til_slides').fadeOut(2000);
		
		})
	});
function getCurrentDate() {
         var date = new Date();
         var monthArray=new Array
         ("Jan.","Feb.","Mar.","Apr.","May.","June.","July.","Aug.",
         "Sept.","Oct.","Nov.","Dec.");
         var weekArray = new Array("Sunday","Monday","Tuesday",
              "Wednesday","Thursday","Friday","Saturday");
         month=date.getMonth();
         day=date.getDate();
         if(day.toString().length == 1){
             day="0"+day.toString();
         }
         /*document.write(monthArray[month]+" "+day+", "+
             date.getFullYear() + "  " + weekArray[date.getDay()]);*/
		$('.day').text(day);
		$('.month').text(monthArray[month]);
		$('.year').text(date.getFullYear())
    }
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
//function notice_liHide(){
//	var iWSon = document.documentElement.clientWidth;
//	if(iWSon<=640){
//		$('.noticeList').find('li').each(function(e){
//			if(e>=4){
//			$(this).remove()
//			}
//			})
//	}
//	
//}
function notice_liHide(){
	var iWSon = document.documentElement.clientWidth;
	if(iWSon<640){
		$('.noticeList').each(function(){
		$(this).find('li').each(function(e){
			if(e>=4){
			$(this).remove()
			}
		})
		
	})
	}
	
}

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


//友情链接*相关链接
/*function location1(s) {
         var d = s.options[s.selectedIndex].value; 
         window.open(d); s.selectedIndex=0; 
        } 
function location2(s) { 
        var d = s.options[s.selectedIndex].value; 
        s.selectedIndex=0; window.top.location.href = d; 
        }
*/

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
		