import React from 'react';
import '../itemv/VideoItem';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item'>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='titulo'>
                <div>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;