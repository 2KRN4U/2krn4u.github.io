// JavaScript Document
let shows;
let showList;

$.ajax({
	url: 'shows.json',
	dataType: 'json',
	success: function(data){
		shows = data;
		showList = shows.sort((a, b) => (a.en_name > b.en_name ? 1 : -1));
      }
});

function createShows(){
	document.getElementById("animelist").innerHTML = "";
	for (let i = 0; i < Object.keys(showList).length; i++){
		document.getElementById("animelist").innerHTML += "<div class=\"container py-3\"><div class=\"card\"><div class=\"row \"><div class=\"col-md-4\"><img src=\"" + showList[i]["img_link"] + "\" height=\"450px\" class=\"w-100\"></div><div class=\"col-md-8 px-3\"><div class=\"card-block px-3\"><h4 class=\"card-title\">" + showList[i]["en_name"] + "</h4><h5 class=\"card-title alttitle\">" + showList[i]["romaji"] + "</h5><h5 class=\"card-title alttitle\">" + showList[i]["jp_name"] + "</h5><p class=\"card-text description\">" + showList[i]["desc"] + "</p><a href=\"" + showList[i]["plex_link"] + "\" class=\"btn btn-primary\">Watch on Plex</a></div></div></div></div></div>";
	}
}