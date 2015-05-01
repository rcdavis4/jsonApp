"use strict";

$(function(){

  /* materialize library */
  $('select').material_select();

  /* global youtube api key */
  var key = 'AIzaSyBb5cnb3RHtrmvI0u61NSB4sqoxdQk8NsU';


  /*--- FUNCTIONS ---*/
  function getSearchTerm() {
    /* stores user input */
    var searchTerm = $('#query').val();

    getRequest(searchTerm);
  }

  function getRequest(searchTerm) {
    /* creates object of parameters to pass into api call */
    var params = {
      part: 'snippet',
      q: searchTerm,
      key: key,
      maxResults: 20,
    };

    var url = 'https://www.googleapis.com/youtube/v3/search/';

    /* gets json data and stores in data argument */
    $.getJSON(url, params, function(data){
      displayResults(data);
    });
  }

  /* displays json data to the dom */
  function displayResults(data) {
    /* creates empty object */
    var html = '';
    var videoUrl = 'https://www.youtube.com/watch/';

    /* loops through the items in data object, storing in html object */
    for(var x in data.items) {
      html += '<div><a href="' + videoUrl + data.items[x].id.videoId + '" target="_blank"><img src="' + data.items[x].snippet.thumbnails.high.url + '"></a></div>';
    }

    /* passes in all data and tags to be displayed */
    $('#results-list').html(html);
  }


  /* --- EVENTS ---*/
  /* prevents reloading when submiting input */
  $('form').submit(function(event) {
    event.preventDefault();
  });

  /* gets and stores user input to access youtube api */
  $('#search-button').click(function() {
    getSearchTerm();
  });

  /* scroll event for sticky header */
  $(window).scroll(function() {
    /* if user scrolled downwards add sticky class */
    if($(this).scrollTop() > 1) {
      $('header').addClass('sticky');
    }
    else {
      $('header').removeClass('sticky');
    }
  });

}); // end doc.ready
