$(function(){
	$('.news-tab li').click(function(){
	    var tabli = $(this).index();//获取选中元素的下标
	    $(this).addClass("news-tabact").siblings().removeClass("news-tabact");
	    $(".news-conlist").eq(tabli).show().siblings(".news-conlist").hide();
	});
 
})
