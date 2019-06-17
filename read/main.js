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
	window.location = manga[mangaCode];
}