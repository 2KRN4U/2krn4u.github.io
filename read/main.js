// JavaScript Document
let manga;

$.ajax({
	url: 'test.json',
	dataType: 'json',
	success: function(data){
		manga = data;
      }
});

function readManga() {
	window.open(manga[4040677978], '_blank');
}