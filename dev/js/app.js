"use strict";

$(function(){

  /* materialize library */
  $('select').material_select();

  function getSearchTerm() {
    var searchTerm = $('#query').val();

    getRequest(searchTerm);
  }

  function getRequest(searchTerm) {
    var params = { s: searchTerm, r: 'json'};
    var url = 'http://omdbapi.com';

    $.getJSON(url, params, function(data){
      displayResults(data.Search);
    });
  }

  /* displays json data to the dom */
  function displayResults(data) {
    var html = '';
//    var searchFor = value.Title;

    $.each(data, function(index, value) {
      html += '<p>' + value.Title + '</p>';
      console.log(value);
    });

    $('#search-results').html(html);
  }

  /* prevents reloading when submiting input */
  $('form').submit(function(event) {
    event.preventDefault();
  });

  $('#searchButton').click(function() {
    getSearchTerm();
  });


}); // end doc.ready
