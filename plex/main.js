// JavaScript Document
let showsOrig;
let shows;
let fallOn = false;
let summerOn = false;


$.ajax({
	url: 'shows.json',
	dataType: 'json',
	success: function(data){
		showsOrig = data;
		shows = [...showsOrig];
		shows.sort((a, b) => (a.en_name > b.en_name ? 1 : -1));
		summerOn = true;
		for (let i = 0; i < shows.length; i++){
			if (shows[i]["season"] == "Summer 2020"){
				shows.splice(i, 1);
				i--;
			}
		}
		createShows();
		summerCheck.checked = true;
		document.getElementById("seasonText").innerHTML = "Fall 2020";
      }
});

function hideSeason(){
	if (fallCheck.checked){
		let sortMethod = document.getElementById("sortid").value;
		fallOn = true;
		
		for (let i = 0; i < shows.length; i++){
			clearInterval(shows[i]["interval"]);
		}
		shows = [];
		shows = [...showsOrig];
		for (let i = 0; i < shows.length; i++){
			if (shows[i]["season"] == "Fall 2020"){
				shows.splice(i, 1);
				i--;
			}
		}
		sortOnly(sortMethod);
		createShows();
		fallCheck.checked = true;
		$("select#sortid").val(sortMethod);
		document.getElementById("seasonText").innerHTML = "Summer 2020";
	} else if (!fallCheck.checked){
		let sortMethod = document.getElementById("sortid").value;
		fallOn = false;
		
		for (let i = 0; i < shows.length; i++){
			clearInterval(shows[i]["interval"]);
		}
		shows = [];
		shows = [...showsOrig];
		sortOnly(sortMethod);
		createShows();
		$("select#sortid").val(sortMethod);
		document.getElementById("seasonText").innerHTML = "Summer 2020 / Fall 2020";
	}
	
}

function hideSeason2(){
	if (summerCheck.checked){
		let sortMethod = document.getElementById("sortid").value;
		summerOn = true;
		
		for (let i = 0; i < shows.length; i++){
			clearInterval(shows[i]["interval"]);
		}
		shows = [];
		shows = [...showsOrig];
		for (let i = 0; i < shows.length; i++){
			if (shows[i]["season"] == "Summer 2020"){
				shows.splice(i, 1);
				i--;
			}
		}
		sortOnly(sortMethod);
		createShows();
		summerCheck.checked = true;
		$("select#sortid").val(sortMethod);
		document.getElementById("seasonText").innerHTML = "Fall 2020";
	} else if (!summerCheck.checked){
		let sortMethod = document.getElementById("sortid").value;
		summerOn = false;
		
		for (let i = 0; i < shows.length; i++){
			clearInterval(shows[i]["interval"]);
		}
		shows = [];
		shows = [...showsOrig];
		sortOnly(sortMethod);
		createShows();
		$("select#sortid").val(sortMethod);
		document.getElementById("seasonText").innerHTML = "Summer 2020 / Fall 2020";
	}
}

function sortOnly(method){
	if (method == "Name"){
		shows.sort((a, b) => (a.en_name > b.en_name ? 1 : -1));
	} else {
		shows.sort((a, b) => (a.distance > b.distance ? 1 : -1));
	}
}

function sortBy(){
	if (document.getElementById("sortid").value === "Sort by:"){
		return;
	}
	for (let i = 0; i < shows.length; i++){
		clearInterval(shows[i]["interval"]);
	}
	
	if (document.getElementById("sortid").value === "Name"){
		shows.sort((a, b) => (a.en_name > b.en_name ? 1 : -1));
		createShows();
		$("select#sortid").val("Name");
		if (fallOn){
			document.getElementById("seasonText").innerHTML = "Summer 2020";
			fallCheck.checked = true;
		} else if (summerOn){
			document.getElementById("seasonText").innerHTML = "Fall 2020";
			summerCheck.checked = true;
		}
	} else if (document.getElementById("sortid").value === "Countdown"){
		shows.sort((a, b) => (a.distance > b.distance ? 1 : -1));
		createShows();
		$("select#sortid").val("Countdown");
		if (fallOn){
			document.getElementById("seasonText").innerHTML = "Summer 2020";
			fallCheck.checked = true;
		} else if (summerOn){
			document.getElementById("seasonText").innerHTML = "Fall 2020";
			summerCheck.checked = true;
		}
	}
}

/*<select class=\"form-control input-group\" id=\"sortid\" onChange=\"sortBy()\"> <option>Name</option> <option>Countdown</option>*/

let bothSeasons = "<input type=\"checkbox\" id=\"summerCheck\" onChange=\"hideSeason2()\"><label class=\"placeholderText\" for=\"summerCheck\" id=\"summerText\">Hide Summer Season</label><input type=\"checkbox\" id=\"fallCheck\" onChange=\"hideSeason()\"><label class=\"placeholderText\" for=\"fallCheck\" id=\"fallText\">Hide Fall Season</label>"

let summerSeason = "<input type=\"checkbox\" id=\"summerCheck\" onChange=\"hideSeason2()\"><label class=\"placeholderText\" for=\"summerCheck\" >Hide Summer Season</label>"

let fallSeason = "<input type=\"checkbox\" id=\"fallCheck\" onChange=\"hideSeason()\"><label class=\"placeholderText\" for=\"fallCheck\">Hide Fall Season</label>"

function createShows(){
	document.getElementById("animelist").innerHTML = "<h3 class=\"placeholderText\" id=\"seasonText\">Fall 2020</h3><select class=\"form-control input-group\" id=\"sortid\" onChange=\"sortBy()\"> <option disabled>Sort by:</option><option value=\"Name\">Name</option> <option value=\"Countdown\">Countdown</option>";
	
	if (!summerOn && !fallOn){
		document.getElementById("animelist").innerHTML += bothSeasons;
	} else if (summerOn){
		//document.getElementById("animelist").innerHTML += summerSeason;
		document.getElementById("animelist").innerHTML += "";
	} else {
		document.getElementById("animelist").innerHTML += fallSeason;
	}

	for (let i = 0; i < shows.length; i++){
		let base = "<div class=\"container py-3\"><div class=\"card\"><div class=\"row \"><div class=\"col-md-4\"><img src=\"" + shows[i]["img_link"] + "\" height=\"450px\" class=\"w-100\"></div><div class=\"col-md-8 px-3\"><div class=\"card-block px-3\"><h4 class=\"card-title\">" + shows[i]["en_name"] + "</h4><h5 class=\"card-title alttitle\">" + shows[i]["romaji"] + "</h5><h5 class=\"card-title alttitle\">" + shows[i]["jp_name"] + "</h5><p class=\"card-text description\">" + shows[i]["desc"] + "</p><h5>Episodes: ";
		
		if (shows[i]["ep_unknown"] == "true") {
			document.getElementById("animelist").innerHTML += base + "N/A" + "</h5><h5 id=\"show" + i + "\"></h5></div></div></div></div></div>";
		} else {
			document.getElementById("animelist").innerHTML += base + shows[i]["episodes"] + "</h5><h5 id=\"show" + i + "\"></h5></div></div></div></div></div>";
		}
		
		var startTime = Date.parse(shows[i]["start_date"]);
		var endTime = Date.parse(shows[i]["end_date"]);
		var episodes = shows[i]["episodes"];
		timer(i, startTime, endTime, episodes);
		if (shows[i]["distance"] != 999999999999999){
			shows[i]["interval"] = startInterval(i, startTime, endTime, episodes);	
		}
		
		
	}
	
	spoilerAlert('spoiler, .spoiler', {max: 5, partial: 3});
}

function startInterval(i, startTime, endTime, episodes){
	return setInterval(function() {
			timer(i, startTime, endTime, episodes);
		}, 1000);
}

function timer(i, startTime, endTime, episodes){
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
				shows[i]["distance"] = distance;
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
				shows[i]["distance"] = distance;
				document.getElementById("show" + i).innerHTML = statement;

			} else if (curDate > endTime) {
				shows[i]["distance"] = 999999999999999;
				document.getElementById("show" + i).innerHTML = "Finished Airing";
			}
}