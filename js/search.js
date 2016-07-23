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
    var str = JSON.stringify(response.result); 
    var id = response.result['items'][0]['id']['videoId'] 
    var src = 'https://www.youtube.com/embed/' + id
     $('#search-container').html(
            '<iframe width="560" height="315" src="' + src + '" frameborder="0" allowfullscreen></iframe>')
    var id1 = response.result['items'][1]['id']['videoId'] 
    var src1 = 'https://www.youtube.com/embed/' + id1
     $('#search-container1').html(
            '<iframe width="560" height="315" src="' + src1 + '" frameborder="0" allowfullscreen></iframe>')
    var id2 = response.result['items'][2]['id']['videoId'] 
    var src2 = 'https://www.youtube.com/embed/' + id2
     $('#search-container2').html(
            '<iframe width="560" height="315" src="' + src2 + '" frameborder="0" allowfullscreen></iframe>')
    var id3 = response.result['items'][3]['id']['videoId'] 
    var src3 = 'https://www.youtube.com/embed/' + id3
     $('#search-container3').html(
            '<iframe width="560" height="315" src="' + src3 + '" frameborder="0" allowfullscreen></iframe>')
    var id4 = response.result['items'][4]['id']['videoId'] 
    var src4 = 'https://www.youtube.com/embed/' + id4
     $('#search-container4').html(
            '<iframe width="560" height="315" src="' + src4 + '" frameborder="0" allowfullscreen></iframe>')
      
       
    });
}
