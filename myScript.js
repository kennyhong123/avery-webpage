$(document).ready(function(){
	$("#imagetoggler").click(function(){
		$("img").slideToggle();
	});
	
	$("#p1").click(function(){
		$(".disappear").toggle();
	});
	
	$("#h1").click(function(){
		$("p").css({"color":"red","background-color":"green"});
		$("body").css({"background-color":"lightblue"})
	});
});