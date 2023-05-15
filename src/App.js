import React, { useEffect, useState } from 'react';
// import axious from 'axious';
import SearchForm from './components/SearchForm.js';
import Nav from './components/Nav.js';
import PhotoContainer from './components/PhotoContainer.js';
import apiKey from './config.js'
import './css/index.css';

console.log(apiKey);

function App() {
  // const [photos, setPhotos] = useState([]);

  // // Axios
  // axios.get('https://api.flickr.com/services?api_key=99277c0f3ec693ba0aedf92a6e4e333c')
  //   .then( response => {
  //     // handle success
  //     setPhotos(response.data.data);
  //   })
  //   .catch(err0r => {
  //     // handle error
  //     console.log("Error fetching and parsing the data", error);
  //   })

  return (
    <div className='container'>
      <SearchForm />
      <Nav />
      <PhotoContainer />
    </div>
  );
}

export default App;
