$(document).ready(function () {
	var retrievedObject = localStorage.getItem('savedtweets');
	document.getElementById("list").innerHTML = retrievedObject;
	$("#inputnum").keydown(function (event) {


		if (event.keyCode == 13) {
			myFunction();
		}
	});
});

//My function, which is called to get tweets and input them in the page.
var tweetIdObj = {};
console.log(localStorage.getItem('tweetIdObj'));
if (localStorage.getItem('tweetIdObj') != null) {
	tweetIdObj = JSON.parse(localStorage.getItem('tweetIdObj'));
}
console.log(tweetIdObj);
console.log(typeof tweetIdObj);
var myFunction = function () {
	var tweet = $("#inputnum").val();
	if (tweet == "") {
		alert("Enter a name.");
	} else {
		$(".loaderImg").show();
		var url = "http://tweetsaver.herokuapp.com";
		$.ajax({
			type: 'POST',
			jsonp: "callback",
			dataType: 'jsonp',
			data: {
				q: tweet,
				count: 10
			},
			url: url,
			success: function (data) {
				$("#tweetInput").html(" ");
				$(".loaderImg").hide();
				var tweets = data.tweets;
				if (tweets.length == 0) {
					$("#tweetInput").html("No tweets found.");
				} else {
					var tweetUL = document.createElement("ul");
					var tweetHTML = "";
					document.getElementById("tweetInput").appendChild(tweetUL);
					for (var j = 0; j < tweets.length; j++) {
						tweetHTML = "<li class= 'tweets' jagga=" + tweets[j].id + ">" + "<img height = '25' width ='25' src=" + tweets[j].user.profileImageUrlHttps + "><b class='tweetName'><a href=" + tweets[j].user.url + "target='_blank'>" + tweets[j].user.screenName + ": </a></b>" + "<strong>" + new Date(tweets[j].user.createdAt) + "</strong>" + " " + tweets[j].text + "</li>";
						$(tweetUL).append(tweetHTML);
					}
					$('li').draggable({
						containment: '#list',
						revert: true
					});
					$('#list').droppable({
						drop: function (event, ui) {
							dragDropFunction(event, ui);
						}
					});
				}
			}
		});
	}
}

//drag drop handler
var dragDropFunction = function (event, ui) {
	var t_id = ui.draggable.attr("jagga");
	if (typeof tweetIdObj[t_id] != "undefined") {
		alert("tweet is already saved");
	} else {
		$('#list').append("<li jagga=" + t_id + ">" + ui.draggable.html() + "</li>");
		ui.draggable.remove();
		tweetIdObj[t_id] = "present";
		var savedtweets1 = document.getElementById("list").innerHTML;
		localStorage.setItem('savedtweets', savedtweets1);
		localStorage.setItem('tweetIdObj', JSON.stringify(tweetIdObj));
	}
}