	// $(document).ready(function(){
	// 	$(".panel-primary").click(function(){
	// 		$(this).hide();
	// 	});
	// });

	$(document).ready(function(){
		// $.post("retrieveData.php",
		// 	function(data){
		// //alert(data);
		// 		$("#cat").html(data);
		// 	});

		$.ajax({
			url: "retrieveData.php",
			type: "POST",
			
		})
			.done(function(result){
				$("#cat").html(result);
			})
			.fail(function(xhr, status, errorThrown){
				alert("Problem Occured!");
				console.log("Error: " +errorThrown);
				console.log("Status: "+status);
				console.dir(xhr);
			})
			// .always(function(xhr, status){
			// 	alert("The request is complete!");
			// })

		//$("").ready(function(){
			$("#cat").on("change",function(){
				//$("input[type=checkbox]:checked").val();
				
				$("#top").text($(".checkitem:checked").val());
				console.log("Hello");
				//$("#top").html($("#rad1").val());
				//$(this).hide();
			})
		//})
	});