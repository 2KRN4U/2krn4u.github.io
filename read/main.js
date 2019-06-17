// JavaScript Document
let manga;

$.ajax({
      url: 'manga.json',
      contentType: 'application/json',
      success: function(data){
            manga = data;
      }
});