// JavaScript Document
let searchjson;
let animeArr = [];
let anime;

function CreateAnime(name, japanese, desc, mal, cover, genre, eps) {
    this.name = name;
    this.japanese = japanese;
    this.desc = desc;
    this.mal = mal;
    this.cover = cover;
    this.genre = genre;
    this.eps = eps;

}

function createHTML() {
    document.getElementById("animesearch").innerHTML = "";
    for (let i = 0; i < animeArr.length; i++) {
        document.getElementById("animesearch").innerHTML += "<div class=\"col-sm\"><div class=\"card\" style=\"width: 18rem;\"><img class=\"card-img-top\" src=\""+animeArr[i].cover+"\" alt=\""+animeArr[i].name+"\" height=\"100%\" width=\"100%\"><div class=\"card-body\"><h2 class=\"card-title\">"+animeArr[i].name+"</h2><h4 class=\"card-title\">"+animeArr[i].japanese+"</h4><h6 class=\"card-subtitle genres\">"+animeArr[i].genre+"</h6><p class=\"description\">"+animeArr[i].desc+"</p><h6>Episodes: "+animeArr[i].eps+"</h6><a href=\""+animeArr[i].mal+"\" class=\"btn btn-primary\" target=\"_blank\">MAL</a></div></div></div>"

    }
}

function searching() {
	document.getElementById("animesearch").innerHTML = "<img src=\"https://i2.kym-cdn.com/photos/images/original/001/102/419/e94.gif\">"
    let searchq = document.getElementById("malsearch").value;
    searchq = searchq.toLowerCase();
    $.getJSON('https://api.jikan.moe/v3/search/anime?q=' + searchq + '&limit=6', function(results) {
        searchjson = results;
		animeArr = [];
        searched();
    });

}

function searched() {
    searchjson = searchjson.results
    for (let i = 0; i < searchjson.length; i++) {
        $.getJSON('https://api.jikan.moe/v3/anime/' + searchjson[i].mal_id, function(jsonresult) {
                let animejson2 = jsonresult;
                let genre = false;
                for (let i = 0; i < animejson2.genres.length; i++) {
                    if (genre == false) {
                        genre = animejson2.genres[i].name;
                    } else {
                        genre += " ・ " + animejson2.genres[i].name;
                    }

                }
                if (animejson2.title_english == null) {
                    animejson2.title_english = animejson2.title;
                }
                if (animejson2.episodes == null) {
                    animejson2.episodes = "N/A";
                }
                if (animejson2.synopsis == null) {
                    animejson2.synopsis = "N/A";
                }
                anime = new CreateAnime(animejson2.title_english, animejson2.title_japanese, animejson2.synopsis, animejson2.url, animejson2.image_url, genre, animejson2.episodes);
                animeArr.push(anime);
				if (animeArr.length == 6){
					createHTML();
				}
            });
        }

	
}