// JavaScript Document
let shows;

$.ajax({
	url: 'shows.json',
	dataType: 'json',
	success: function(data){
		shows = data;
		shows.sort((a, b) => (a.en_name > b.en_name ? 1 : -1));
		createShows();
      }
});

function createShows(){
	document.getElementById("animelist").innerHTML = "<h3 class=\"placeholderText\">Summer 2020</h3>";
	for (let i = 0; i < shows.length; i++){
		document.getElementById("animelist").innerHTML += "<div class=\"container py-3\"><div class=\"card\"><div class=\"row \"><div class=\"col-md-4\"><img src=\"" + shows[i]["img_link"] + "\" height=\"450px\" class=\"w-100\"></div><div class=\"col-md-8 px-3\"><div class=\"card-block px-3\"><h4 class=\"card-title\">" + shows[i]["en_name"] + "</h4><h5 class=\"card-title alttitle\">" + shows[i]["romaji"] + "</h5><h5 class=\"card-title alttitle\">" + shows[i]["jp_name"] + "</h5><p class=\"card-text description\">" + shows[i]["desc"] + "</p><h5>Episodes: " + shows[i]["episodes"] + "</h5><h5 id=\"show" + i + "\"></h5></div></div></div></div></div>";
		
		var startTime = Date.parse(shows[i]["start_date"]);
		var endTime = Date.parse(shows[i]["end_date"]);
		var episodes = shows[i]["episodes"];
		
		startInterval(i, startTime, endTime, episodes);
		
	}
}

function startInterval(i, startTime, endTime, episodes){
	setInterval(function() {
			let curDate = Date.now();
			if (curDate > startTime && endTime > curDate){
				let newDate;
				let curEp;
				for (curEp = 2; curEp <= episodes; curEp++){
					newDate = startTime + ((curEp - 1) * 604800000);
					if (curDate < newDate) {
						break;
					}
				}
				let distance = newDate - curDate;

				let days = Math.floor(distance / (1000 * 60 * 60 * 24));
				let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				let seconds = Math.floor((distance % (1000 * 60)) / 1000);

				let statement = "Epsiode " + curEp + " in " + days;

				if (days == 0 || days > 1){
					statement += " days, ";
				} else {
					statement += " day, ";
				}

				statement += hours;

				if (hours == 0 || hours > 1){
					statement += " hours, ";
				} else {
					statement += " hour, ";
				}

				statement += minutes;

				if (minutes == 0 || minutes > 1){
					statement += " minutes, ";
				} else {
					statement += " minute, ";
				}

				statement += seconds;

				if (seconds == 0 || seconds > 1){
					statement += " seconds";
				} else {
					statement += " second";
				}

				document.getElementById("show" + i).innerHTML = statement;

			} else if (curDate < startTime) {
				let distance = startTime - curDate;

				let days = Math.floor(distance / (1000 * 60 * 60 * 24));
				let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				let seconds = Math.floor((distance % (1000 * 60)) / 1000);

				let statement = "Epsiode 1" + " in " + days;

				if (days == 0 || days > 1){
					statement += " days, ";
				} else {
					statement += " day, ";
				}

				statement += hours;

				if (hours == 0 || hours > 1){
					statement += " hours, ";
				} else {
					statement += " hour, ";
				}

				statement += minutes;

				if (minutes == 0 || minutes > 1){
					statement += " minutes, ";
				} else {
					statement += " minute, ";
				}

				statement += seconds;

				if (seconds == 0 || seconds > 1){
					statement += " seconds";
				} else {
					statement += " second";
				}

				document.getElementById("show" + i).innerHTML = statement;

			} else if (curDate > endTime) {
				document.getElementById("show" + i).innerHTML = "Finished Airing";
			}
		}, 1000);
}