$(document).ready(function(){

	$(".calcbutton").click(function(){
		var text=document.getElementById("field").value;
		
		if (text.length<=0){
			$("#field").val($(this).text());
		}
		else{
			$("#field").val(text+=$(this).text());			
		}

	});
	$("#equal").click(function(){
		var text=document.getElementById("field").value;
		$("#field").val(math.eval(text));
	});
	$("#ce").click(function(){
		$("#field").val("");
	});

});