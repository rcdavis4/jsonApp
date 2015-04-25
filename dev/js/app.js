"use strict";

$(function(){

  $('select').material_select();

  $.getJSON('http://omdbapi.com/?s=star%20wars&r=json', function (data) {
    var myData = data.Search;
    displayResults(myData);
  });

//  function displayResults(results) {
//    $.each(results, function(index, value) {
//        console.log(value.Title);
//      $('#search-results').append('<br>' + value.Title + '<br>');
//    });
//  }

//  function displayResults(results) {
//    var html = "";
//    $.each(results, function(index, value) {
//      html += '<p>' + value.Title + '</p>';
//      console.log(value.Title); // to make sure data is coming in
//    });
//
//    $('#search-results').html(html);
//  }

  function displayResults(results) {
    var html = [];

    for (var x in results) {
      html.push('<p>' + results.Title + '</p>');
    };

    $('#search-results').innerHTML = html.join('');
  }



}); // end of document.ready
