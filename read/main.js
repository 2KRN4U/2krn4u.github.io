// JavaScript Document
let manga;

$.ajax({
	url: 'manga.json',
	dataType: 'json',
	success: function(data){
		manga = data;
      }
});

function readManga(mangaCode) {
	if (manga[mangaCode]["chapterlink"] == undefined) {
		alert("This manga has not been properly parsed yet.");
	} else {
		document.getElementById("mainText").innerHTML = "";
		document.getElementById("mainText").innerHTML = "<div class=\"col-sm\"> <div class=\"container py-3\"> <div class=\"card\"> <div class=\"row \"> <div class=\"col-md-4\"> <img src=\"" + manga[mangaCode]["image"] + "\" height=\"450px\" class=\"w-100\"> </div> <div class=\"col-md-8 px-3\"> <div class=\"card-block px-3\"> <h4 class=\"card-title\">" + manga[mangaCode]["en_name"] + "</h4> <h5 class=\"card-title alttitle\">"+ manga[mangaCode]["romaji"] + "</h5> <h5 class=\"card-title alttitle\">"+manga[mangaCode]["jp_name"]+ "</h5><p class=\"card-text description\">"+ manga[mangaCode]["desc"]+"</p><h6>Volume: "+manga[mangaCode]["volume"]+"</h6><h6>Chapter: "+manga[mangaCode]["chapter"]+ "</h6><div><a href=\""+manga[mangaCode]["mdexlink"]+"\" class=\"btn btn-primary buttondiv\">MangaDex</a><a href=\""+manga[mangaCode]["chapterlink"]+"\" class=\"btn btn-primary buttondiv\">Read</a> </div></div> </div> </div> </div> </div> </div>"
	}
}
