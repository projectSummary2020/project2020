/*banner 导航切换*/
// $('.cpnav').click(function () {
//   $(this).siblings().fadeToggle(1000);
// })

// $('.erwem').click(function () {
//   $(this).children('span').fadeToggle();
// })


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

    // $(Size).find('.mid').bind('click',function (){
    //     iNum = 17;
    //     $(obj).css('font-size',iNum + 'px');
    //     return iNum;
    // })

    $(Size).find('.min').bind('click',function (){
        iNum-=2;
        if(iNum<=16){
            iNum = 14;
        }
        $(obj).css('font-size',iNum + 'px');
        return iNum;
    })
};

/* 招聘点击/展开 */
$(".biji-oth").click(function () {
  var arrow = $(this).find("span.arrow");
  var txts = $(this).find(".arrow");
  if (arrow.hasClass("up")) {
    $(this).children().text("查看详情");
    arrow.removeClass("up");
    arrow.addClass("down");
  } else if (arrow.hasClass("down")) {
    $(this).children().text("收起");
    arrow.removeClass("down");
    arrow.addClass("up");
  }

  $(this).parent().find("div.biji-content").slideToggle();
  

});

// 页面导航JS代码
// $(function () {
//   $(".dropdown").mouseover(function () {
//     $(this).addClass("open");
//   });
//   $(".dropdown").mouseleave(function () {
//     $(this).removeClass("open");
//   })
// })
// // 判断向下和向上滚动时，LOGO变色的JS代码
// if ($(window).width() >= 1024) {
//   var banH = $('.mainBanner').height() - 100;
//   $(window).scroll(function () {
//     if ($(window).scrollTop() > banH) {
//       $('.navbar-default').addClass('scrollword')
//     } else {
//       $('.navbar-default').removeClass('scrollword')
//     }
//   })
//   $(window).resize(function () {
//     var banH = $('.mainBanner').height() - 100;
//     $(window).scroll(function () {

//       if ($(window).scrollTop() > banH) {
//         $('.navbar-default').css('background', '#fff')
//         $('.navbar-default .navbar-nav>li>a').css('color', '#666')
//         $('.navbar-default').css('box-shadow', '0px 2px 2px #e3e3e3')
//         $('.logo-c').show()
//         $('.logo-h').hide()
//       } else {
//         $('.navbar-default').css('background', 'rgba(255, 255, 255, 0.8)')
//         $('.navbar-default .navbar-nav>li>a').css('color', '#333')
//         $('.navbar-default').css('box-shadow', 'none')
//         $('.logo-c').hide()
//         $('.logo-h').show()
//       }
//     })
//   })
// } else if($(window).width() < 1024){
//   var banH = $('.mainBanner').height() - 100;
//   $(window).scroll(function () {
//     if ($(window).scrollTop() > banH) {
//       $('.navbar-default').css('background', '#fff')
//       $('.navbar-default .navbar-nav>li>a').css('color', '#333')
//       $('.navbar-default').css('box-shadow', '0px 2px 2px #e3e3e3')
//       $('.logo-h').show()
//       $('.logo-c').hide()
//       $('.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:hover, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>a, .navbar-default .navbar-nav>a:hover, .navbar-default .navbar-nav>a:focus').css('color','#01b4ee')
//       $('.navbar-default .navbar-toggle .icon-bar').css('background','#fff')
//     } else {
//       $('.navbar-default').css('background', 'rgba(255, 255, 255, 0.8)')
//       $('.navbar-default .navbar-nav>li>a').css('color', '#333')
//       $('.navbar-default').css('box-shadow', 'none')
//       $('.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:hover, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>a, .navbar-default .navbar-nav>a:hover, .navbar-default .navbar-nav>a:focus').css('color','#01b4ee')
//       $('.logo-h').hide()
//       $('.logo-c').show()
//     }
//   })
// }

//导航置顶
// $(window).resize(function(){
// 	var sWSon = document.documentElement.clientWidth;
// 		nav();
// 		if(sWSon>900){
// 				$(window).scroll(function(){
// 			var scrollTop = $(window).scrollTop();
// 			if(scrollTop > 140){
// 				$('.wraq_header').addClass('current');
// 				$("#nav ul > li").unbind("mouseenter").unbind("mouseleave");
// 				}
				
// 			else{
// 				$('.wraq_header').removeClass('current');
// 				nav();
// 				$("#nav ul > li").bind("mouseenter").bind("mouseleave");
	
// 				}
// 		});
			
// 		}else{
// 			$ (window).unbind ('scroll');
// 			// $('.topWrap').css({display:'none'});
// 			$('.header').removeClass('current');
// 		}
// 	newsImgHeight();

// 	})
//导航置顶
$(window).resize(function(){
	var sWSon = document.documentElement.clientWidth;
		nav();
		if(sWSon>900){
				$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop > 100){
				$('.wraq_header').addClass('current');
				$("#nav ul > li").unbind("mouseenter").unbind("mouseleave");
				}
				
			else{
				$('.wraq_header').removeClass('current');
				nav();
				$("#nav ul > li").bind("mouseenter").bind("mouseleave");
	
				}
		});
			
		}else{
			$ (window).unbind ('scroll');
			// $('.topWrap').css({display:'none'});
			$('.union_top').removeClass('current');
		}
	newsImgHeight();

  })
  

 