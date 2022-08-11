import React from 'react';
import Search from '../search/Search';
import youtube from '../api/Youtube';
import VideoList from '../listav/VideoList';
import VideoDetail from '../detalhev/VideoDetail';
import '../style/app.css'

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div>
                <Search handleFormSubmit={this.handleSubmit}/>
                <div>
                    <div>
                        <div className="wide-column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div>
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;