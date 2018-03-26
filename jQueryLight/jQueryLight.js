$(document).ready(function(){
 $(".box").on("click", changeBackground());
});
var body = document.queryselector('body');
	

	function changeBackground(){
	console.log("Something");
	if ($('body').css("background-color") == "rgb(0, 0, 0)"){
		$('body').css("background-color", "white");
	}
	else{
		$('body').css("background-color", "black");
	}
	}
