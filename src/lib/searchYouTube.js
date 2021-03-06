var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      key: options.key,
      type: 'video'
    },
    contentType: 'application/json',
    success: function (data) {
      callback(data.items);
    },
    error: function(error) {
      console.error('', error);
    }
  });
};

export default searchYouTube;
