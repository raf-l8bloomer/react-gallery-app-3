import React from 'react';
import Photo from './Photo.js';
import NotFound from './NotFound.js'

const PhotoContainer = (props) => {
    const results = props.data;
     console.log(results);
    let photos = results.map(photo => <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />);

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos}
                <NotFound />
            </ul>
        </div>
    );
};



export default PhotoContainer;