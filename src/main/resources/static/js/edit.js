let title_value

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');
console.log(id);

$.get("http://localhost:8080/guestbook/", function(data) {
	 title_value = data[id].title;
	 document.querySelector('#title').value = title_value;
	 comment_value = data[id].comment;
	 document.querySelector('#comment').value = comment_value;
	 commenter_value = data[id].commenter;
	 document.querySelector('#commenter').value = commenter_value;
});


/*$(document).ready(function() {
	
	$(".successarea").hide();
	
	$("#send").on("click", function() {
	
		var data = {
			title:$("#title").val(),
			comment:$("#comment").val(),
			commenter:$("#commenter").val()
		};
		
		$.ajax({
		
			url:"http://localhost:8080/guestbook/",
			method:"UPDATE",
			contentType:"application/json",
			data:JSON.stringify(data),
			success:function(data) {
				$(".successarea").show();
				$("form").hide();
			},
			error:function(data) {
				alert("Etwas hat nicht geklappt!");
			}
		});
	});

})*/