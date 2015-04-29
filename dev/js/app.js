"use strict";

$(function(){

  /* materialize library */
  $('select').material_select();

  var key = 'AIzaSyBb5cnb3RHtrmvI0u61NSB4sqoxdQk8NsU';

  function getSearchTerm() {
    var searchTerm = $('#query').val();

    getRequest(searchTerm);
  }

  function getRequest(searchTerm) {
    var params = { part: 'snippet', q: searchTerm, key: key };
    var url = 'https://www.googleapis.com/youtube/v3/search/';

    $.getJSON(url, params, function(data){
      displayResults(data);
    });
  }

  /* displays json data to the dom */
  function displayResults(data) {
    var html = '';

    for(var x in data.items) {
      html += '<li><img src="' + data.items[x].snippet.thumbnails.default.url + '"></li>';
    }

    $('#results-list').html(html);
  }

  /* prevents reloading when submiting input */
  $('form').submit(function(event) {
    event.preventDefault();
  });

  $('#search-button').click(function() {
    getSearchTerm();
  });

}); // end doc.ready
