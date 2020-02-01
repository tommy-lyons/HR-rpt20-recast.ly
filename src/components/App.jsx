import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    console.log("props --->", props);
    super(props);
    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
    // binds the this context for the method, so it has the correct context.......
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {

    getYouTubeVideo('cats');
    // how do we access the data returned from the API call
    // do we use the callback that we pass into the searchYouTube function to extract the data
    // searchYouTube();
  }

  // finish implementing this
  getYouTubeVideo(query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
      max: 5
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState ( {
        videoList: videos,
        currentVideo: videos[0]
      });
    });

  }

  // componentWillUnmount() {
  // }

  // method that's called by the onClick in VideoListsEntry - passed through props
  handleClick (clickedVideo) {
    this.setState({
      currentVideo: clickedVideo // video that's clicked on
    });
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList handler={this.handleClick} videos={this.state.videoList} /></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
