import React from 'react';
import SearchForm from './components/SearchForm.js';
import Nav from './components/Nav.js';
import Photo from './components/Photo.js';
import './css/index.css';

function App() {
  return (
    <div className='container'>
      <SearchForm />
      <Nav />
      <Photo />
    </div>
  );
}

export default App;
