$(function(){
	var selector = "#menu";
	var body = ".switch";

	function changeActive(id){
		var listdata = $(body).find("img");

		$(body).find("img").css("display","none");
		$(selector).children("li").removeClass("active");
		$(listdata).children("li").removeClass("active");
		
		$("#"+id).addClass("active");
		$("."+id).addClass("active");

		// $("#"+id).find("img").css("display","none");
		$("."+id).css("display","block");

	}
	
	$(selector).find("li a").on("click", function(){
		changeActive($(this).parent().attr("id"));
		return false;
	});

});