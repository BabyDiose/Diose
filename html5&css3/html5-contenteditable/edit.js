$("#edit_profile_link").hide();
var status = $("#status");
$("span[contenteditable]").blur(function(){
	var field = $(this).attr("id");
	var value = $(this).text();
	
	var resourceURL = $(this).closest("ul").attr("data-url");
	
	$.ajax({
		url:resourceURL,
		dataType:"json",
		method:"PUT",
		data:field+"="+value,
		success:function(data){
			status.html("the data save successfully!");
		},
		error:function(data){
			status.html("the data save fail...");
		}
	});
})