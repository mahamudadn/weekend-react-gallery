import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Header from '../Header/Header'
import GalleryList from '../GalleryList/GalleryList';

function App() {

  let [galleryList, setGallery] = useState([]);

  useEffect(() => {
    getGallery();
  },[])


const getGallery = () => {
  axios.get('/gallery')
  .then(response => {
    setGallery(response.data)
  })
  .catch(err => {
    alert('error getting gallery')
    console.log(err);
  })
}















    return (
    <div>
      <Header/>
    
      <main>
    

    <GalleryList galleryList={galleryList} getGallery={getGallery}/>
    </main>
    </div>
    )
    
}

export default App;
