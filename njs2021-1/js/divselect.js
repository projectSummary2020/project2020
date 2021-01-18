function divSelect(){
	 // 模拟下拉选择框
    $('.select001').each(function(i,el){
        var clickStatus = false;

        $(this).click(function(e){
        	//$(this).siblings().find('ul').slideUp(200)
            e.stopPropagation();
            if(clickStatus == false){
                $(this).children('ul').slideDown(200);
                clickStatus = true;
            } else {

                $(this).children('ul').slideUp(200);
                clickStatus = false;
            }
        });
        $(this).attr({
            'd-value': $(this).find('.option_cur').text()
        });
        $(this).find('.optionList li').each(function(i,el){
            $(this).click(function(){
                $(this).parent().parent().attr({
                    'd-value': $(this).text()
                }).find('.option_cur span').text($(this).text());
            })
        });
        $('.select001').click(function(){
            if($(this).siblings('.optionList').css('display')=='none'){
                $(this).siblings('.optionList').show();
    
            }else{
                $(this).siblings('.optionList').hide();
    
            }
        });
    });




 
    $('.footernavlist p').click(function(){
        $('.footernavlist ul').hide();

        $(this).siblings('ul').show();

    })
    $('.footernavlist ul li').click(function(){
        $(this).parent().siblings('p').children('font').text($(this).children('a').text());

        $(this).parent('ul').hide();
        
    })




        var selectHeight = $('.select001 ul').each(function(){
        var currentHeight = $(this).height();
        
        if(currentHeight >= 290){
        	$(this).css('top',"-290px")
        	$(this).height(290)
        }else{
        	$(this).css('top',-currentHeight+"px")
        }

    })
    $(document).click(function(){
        $('.select001 ul').slideUp(200);
    });
}
divSelect();//调用下拉列表框
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