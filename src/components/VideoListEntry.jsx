var VideoListEntry = (props) => (


  // FOR PASSING THE ARGUMENT TO THE PARENT (App,js)
  // when we click on the title of the video that we're going to play
  // we want to send that title to the parent App.js component
  // and we want to call the click handler on the App.js component
  // with an argument from the video that we click on,
  // the argument needs to be

  // function clickTest() {
  //   console.log('clicked');
  // }
  // () => props.handleClick(props.video)
  <div className="video-list-entry media" onClick={console.log('clicked')}>
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      {/* () => props.handleClick(props.video) */}
      <div className="video-list-entry-title">{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;


