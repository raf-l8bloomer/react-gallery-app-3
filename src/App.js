import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

// App components
import SearchForm from './components/SearchForm.js';
import Nav from './components/Nav.js';
import PhotoContainer from './components/PhotoContainer.js';


import apiKey from './config.js'
import './css/index.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
  // Axios
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      // handle success
      setPhotos(response.data.photos.photo);
    })
    .catch(error => {
      // handle error
      console.log("Error fetching and parsing the data", error);
    })
  },[query]);

  const handleQueryChange = searchText => {
    setQuery(searchText);
  }


  return (
    <div className='container'>
      <SearchForm changeQuery={handleQueryChange} />
      <Nav />
      <Routes>
        <Route path="cats" />
        <Route path="dogs" />
        <Route path="computers" />
      </Routes>
      <PhotoContainer data={photos} query={query}/>
    </div>
  );
}

export default App;
