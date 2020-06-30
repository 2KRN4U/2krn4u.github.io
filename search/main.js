// JavaScript Document
let searchjson;
let animeArr = [];
let anime;
let animeArrSort = [];

function CreateAnime(name, japanese, desc, mal, cover, genre, eps) {
    this.name = name;
    this.japanese = japanese;
    this.desc = desc;
    this.mal = mal;
    this.cover = cover;
    this.genre = genre;
    this.eps = eps;

}

function CreateManga(name, japanese, desc, mal, cover, genre, eps, type) {
    this.name = name;
    this.japanese = japanese;
    this.desc = desc;
    this.mal = mal;
    this.cover = cover;
    this.genre = genre;
    this.eps = eps;
    this.type = type;
}

function createHTML() {
    document.getElementById("animesearch").innerHTML = "";
    for (let i = 0; i < animeArrSort.length; i++) {
        document.getElementById("animesearch").innerHTML += "<div class=\"container py-3\"><div class=\"card\"><div class=\"row \"><div class=\"col-md-4\"><img src=\"" + animeArrSort[i]["cover"] + "\" height=\"450px\" class=\"w-100\"></div><div class=\"col-md-8 px-3\"><div class=\"card-block px-3\"><h4 class=\"card-title\">" + animeArrSort[i]["name"] + "</h4><h5 class=\"card-title alttitle\">" + animeArrSort[i]["japanese"] + "</h5><h5 class=\"card-title alttitle\">" + animeArrSort[i]["genre"] + "</h5><p class=\"card-text description\">" + animeArrSort[i]["desc"] + "<h6>Episodes: " + animeArrSort[i]["eps"] + "</h6></p><a href=\"" + animeArrSort[i]["mal"] + "\" class=\"btn btn-primary\">MAL</a></div></div></div></div></div>";

    }
}

function searching() {
    document.getElementById("animesearch").innerHTML = "<h1>Now Loading</h1><br><img src=\"https://i2.kym-cdn.com/photos/images/original/001/102/419/e94.gif\">"
    let searchq = document.getElementById("malsearch").value;
    searchq = searchq.toLowerCase();
    if (document.getElementById("animeactive").value === "Anime") {
        $.getJSON('https://api.jikan.moe/v3/search/anime?q=' + searchq + '&limit=6', function(results) {
            searchjson = results;
            animeArr = [];
            animeArrSort = [];
            searched();
        });
    } else if (document.getElementById("animeactive").value === "Manga/Light Novel") {
        $.getJSON('https://api.jikan.moe/v3/search/manga?q=' + searchq + '&limit=6', function(results) {
            searchjson = results;
            animeArr = [];
            animeArrSort = [];
            searched2();
        });

    }
}

function searching2(e) {
    if (e.keyCode === 13) {
        document.getElementById("animesearch").innerHTML = "<h1>Now Loading</h1><br><img src=\"https://i2.kym-cdn.com/photos/images/original/001/102/419/e94.gif\">"
        let searchq = document.getElementById("malsearch").value;
        searchq = searchq.toLowerCase();
        if (document.getElementById("animeactive").value === "Anime") {
            $.getJSON('https://api.jikan.moe/v3/search/anime?q=' + searchq + '&limit=6', function(results) {
                searchjson = results;
                animeArrSort = [];
                animeArr = [];
                searched();
            });
        } else if (document.getElementById("animeactive").value === "Manga/Light Novel") {
            $.getJSON('https://api.jikan.moe/v3/search/manga?q=' + searchq + '&limit=6', function(results) {

                searchjson = results;
                animeArrSort = [];
                animeArr = [];
                searched2();
            });

        }
    }
}
let q = 0

function timer(ms) {
 return new Promise(res => setTimeout(res, ms));
}

async function searched() {
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
            if (animeArr.length == searchjson.length) {

                for (let i = 0; i < animeArr.length; i++) {
                    if (q < animeArr.length) {
                        if (animeArr[i].mal == searchjson[q].url) {
                            animeArrSort.push(animeArr[i]);
                            q++;
                            if (animeArrSort.length != animeArr.length && i == animeArr.length - 1) {
                                i = -1;
                            }
                        } else if (animeArrSort.length != animeArr.length && i == animeArr.length - 1) {
                            i = -1;
                        }
                    }
                }

            }
            if (animeArrSort.length == searchjson.length) {
                createHTML();
                q = 0;
            }
        });
        await timer(1000);
    }

}

async function searched2() {
    searchjson = searchjson.results
    for (let i = 0; i < searchjson.length; i++) {
        $.getJSON('https://api.jikan.moe/v3/manga/' + searchjson[i].mal_id, function(jsonresult) {
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
            if (animejson2.chapters == null) {
                animejson2.chapters = "N/A";
            }
            if (animejson2.synopsis == null) {
                animejson2.synopsis = "N/A";
            }
            anime = new CreateManga(animejson2.title_english, animejson2.title_japanese, animejson2.synopsis, animejson2.url, animejson2.image_url, genre, animejson2.chapters, animejson2.type);
            animeArr.push(anime);
            if (animeArr.length == searchjson.length) {

                for (let i = 0; i < animeArr.length; i++) {
                    if (q < animeArr.length) {
                        if (animeArr[i].mal == searchjson[q].url) {
                            animeArrSort.push(animeArr[i]);
                            q++;
                            if (animeArrSort.length != animeArr.length && i == animeArr.length - 1) {
                                i = -1;
                            }
                        } else if (animeArrSort.length != animeArr.length && i == animeArr.length - 1) {
                            i = -1;
                        }
                    }
                }

            }
            if (animeArrSort.length == searchjson.length) {
                createHTML2();
                q = 0
            }
        });
        await timer(1000);
    }

}

function createHTML2() {
    document.getElementById("animesearch").innerHTML = "";
    for (let i = 0; i < animeArrSort.length; i++) {
        document.getElementById("animesearch").innerHTML += "<div class=\"container py-3\"><div class=\"card\"><div class=\"row \"><div class=\"col-md-4\"><img src=\"" + animeArrSort[i]["cover"] + "\" height=\"450px\" class=\"w-100\"></div><div class=\"col-md-8 px-3\"><div class=\"card-block px-3\"><h4 class=\"card-title\">" + animeArrSort[i]["name"] + "</h4><h5 class=\"card-title alttitle\">" + animeArrSort[i]["japanese"] + "</h5><h5 class=\"card-title alttitle\">" + animeArrSort[i]["genre"] + "</h5><h5 class=\"card-title alttitle\">" + animeArrSort[i]["type"] + "</h5><p class=\"card-text description\">" + animeArrSort[i]["desc"] + "<h6>Chapters: " + animeArrSort[i]["eps"] + "</h6></p><a href=\"" + animeArrSort[i]["mal"] + "\" class=\"btn btn-primary\">MAL</a></div></div></div></div></div>";

    }
}