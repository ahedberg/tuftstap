var API_KEY = 'AIzaSyD7ZT3_MTKi5tth533xbP8JyA7y-NhTsn4';
var CHANNEL_ID = 'UCwVmYIaSebiCamxAxR4zYwQ';
/* two playlists per academic year, so it will be at least 2025 before this
 * doesn't return all of the playlists. */
var NUM_RESULTS = 50;

function onLoadCallback() {
  console.log('got to callback');
  gapi.client.setApiKey(API_KEY);
  gapi.client.load('youtube', 'v3', function() {console.log('loaded')});
  loadVideos();
}

function loadVideos() {
  var request = gapi.client.youtube.playlists.list({part: 'id', channelId: CHANNEL_ID});
  console.log('executing request...');
  request.execute(
    function(resp) {
      var container = document.getElementById('videoDiv');
      for (var item in resp.items) {
        var url = '//www.youtube.com/embed/videoseries?list=' + item.id;
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', url);
        iframe.style.width = 560;
        iframe.style.height = 315;
        iframe.setAttribute('frameborder', 0)
        iframe.setAttribute('allowfullscreen', true);
        container.appendChild(iframe);
      }
    }
  );
}
