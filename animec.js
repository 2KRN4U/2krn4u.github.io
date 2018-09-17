"use strict";
let anime;
let animejson;
let animeArr = [];

function loadJSON(){
	jQuery.ajaxSetup({async:false});
	let malid = document.getElementById("malids").value;
	malid = parseFloat(malid);
	if (isNaN(malid) == false){
			animejson = $.getJSON('https://api.jikan.moe/v3/anime/'+malid);
			animejson = animejson.responseJSON;
		} else{
			alert("Enter MAL ID");
		}
	
}

function loading(){
	document.getElementById("row").innerHTML = "<img src=\"https://i.4pcdn.org/pol/1504460046223.gif\">";
	setTimeout(searching, 50);
}
function searching(){
	jQuery.ajaxSetup({async:false});
	let searchq = document.getElementById("searchapi").value;
	searchq = searchq.toLowerCase();
	animeArr = [];
	animejson = $.getJSON('https://api.jikan.moe/v3/search/anime?q='+searchq+'&limit=6');
	animejson = animejson.responseJSON;
	for (let i = 0; i<animejson.results.length; i++){
		let animejson2;
		animejson2 = $.getJSON('https://api.jikan.moe/v3/anime/'+animejson.results[i].mal_id);
		animejson2 = animejson2.responseJSON;
		let genre = false;
			for (let i = 0; i<animejson2.genres.length;i++){
				if (genre == false){
					genre = animejson2.genres[i].name;
				} else {
					genre += ", " + animejson2.genres[i].name;
				}
				
			}
		if (animejson2.title_english == null){
			animejson2.title_english = animejson2.title;
		}
		if (animejson2.episodes == null){
			animejson2.episodes = "N/A";
		}
		if (animejson2.synopsis == null){
			animejson2.synopsis = "N/A";
		}
		anime = new CreateAnime(animejson2.title_english,animejson2.title_japanese,animejson2.synopsis,animejson2.url,animejson2.image_url,genre,animejson2.episodes);
		animeArr.push(anime);
	}
	
	createHTML();
}

function CreateAnime(name,japanese,desc,mal,cover,genre,eps){
	this.name = name;
	this.japanese = japanese;
	this.desc = desc;
	this.mal = mal;
	this.cover = cover;
	this.genre = genre;
	this.eps = eps;

}

function addAnime(){
	loadJSON();
	if (animejson.title_english == null){
		animejson.title_english = animejson.title;
	}
	let name = animejson.title_english;
	let japanese = animejson.title_japanese;
	let desc = animejson.synopsis;
	let mal = animejson.url;
	let cover = animejson.image_url;
	let genre = false;
	for (let i = 0; i<animejson.genres.length;i++){
		if (genre == false){
			genre = animejson.genres[i].name;
		} else {
			genre += ", " + animejson.genres[i].name;
		}
	}
	let eps= animejson.episodes;
	
	anime = new CreateAnime(name,japanese,desc,mal,cover,genre,eps);
	animeArr.push(anime);
}

function createHTML(){
	document.getElementById("row").innerHTML = "";
	for (let i = 0; i<animeArr.length;i++) {
			document.getElementById("row").innerHTML += "<div class=\"col-xs-3 col-md-2 thumbnail\">" + "<a href=\"" + animeArr[i].mal + "\" target=\"_blank\">" +"<img src=\""+animeArr[i].cover+"\"></a><h2 align=\"center\">"+animeArr[i].name+"</h2><h4 align=\"center\">"+animeArr[i].japanese+"</h4>"+"<h6 align=\"center\">"+animeArr[i].genre+"<h6>"+"<h6 align=\"center\">"+"Episodes:" + animeArr[i].eps+"</h6>" + "<p class=\"description2\">"+animeArr[i].desc+"</p>"
				
		}
	}
	
