import React from 'react';
import Photo from './Photo.js';
import NotFound from './NotFound.js'

const PhotoContainer = () => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <Photo />
                <NotFound />
            </ul>
        </div>
    );
};



export default PhotoContainer;