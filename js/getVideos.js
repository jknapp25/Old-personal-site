$(document).ready(function() {
  $.get(
    "https://www.googleapis.com/youtube/v3/channels", {
      part: 'contentDetails',
      id: 'UCJ_tseZpNhgkU1Ytw7gAooA',
      key: 'AIzaSyCqwFzWnEPthi_paxQIqu_xqj6DLPP5moQ'},
      function(data) {
        console.log(data);
        $.each(data.items, function(i, item) {
          console.log(item);
          pid = item.contentDetails.relatedPlaylists.uploads;
          getVids(pid);
        });
      }
  );

  function getVids(pid) {
    $.get(
      "https://www.googleapis.com/youtube/v3/playlistItems", {
        part: 'snippet',
        maxResults: 10,
        playlistId: pid,
        key: 'AIzaSyCqwFzWnEPthi_paxQIqu_xqj6DLPP5moQ'},
        function(data) {
          var output;
          $.each(data.items, function(i, item) {
            console.log(item);
            videoTitle = item.snippet.title;
            videoId = item.snippet.resourceId.videoId;
            outputTitle = '<p class="video-title">'+videoTitle+'</p>';
            output = '<div class="videoWrapper video-page-img"><iframe class="content" width="100%" height="auto" src=\"https://www.youtube.com/embed/'+videoId+'\"frameborder="0" allowfullscreen></iframe></div>';

            /* Append to results list */
            $(".video-page-content").append(outputTitle);
            $(".video-page-content").append(output);
          });
          videoOutro = '<p class="video-title">More to come!</p>';
          $(".video-page-content").append(videoOutro);
        }
    );
  }

});
