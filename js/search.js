// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result).index(0);
    var id = str[id][videoid]
    $('#search-container').html(
      '<iframe width="560" height="315" src=https://www.youtube.com/embed/' + id + 'frameborder="0" allowfullscreen></iframe>')
  });
}
