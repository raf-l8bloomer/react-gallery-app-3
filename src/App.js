import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

// App components
import SearchForm from './components/SearchForm.js';
import Nav from './components/Nav.js';
import PhotoContainer from './components/PhotoContainer.js';


import apiKey from './config.js'
import './css/index.css';

console.log(apiKey);

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
  // Axios
  axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=99277c0f3ec693ba0aedf92a6e4e333c&tags=cats&per_page=24&format=json&nojsoncallback=1')
    .then(response => {
      // handle success
      setPhotos(response.data.photos.photo);
    })
    .catch(error => {
      // handle error
      console.log("Error fetching and parsing the data", error);
    })
  },[]);

  return (
    <div className='container'>
      <SearchForm />
      <Nav />
      <Routes>
        <Route path="cats" />
        <Route path="dogs" />
        <Route path="computers" />
      </Routes>
      <PhotoContainer data={photos}/>
    </div>
  );
}

export default App;
