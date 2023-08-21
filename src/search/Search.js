import React, { useState } from 'react';
import './Search.scss'
import axios from 'axios';
import { axiosClient } from '../Utils/axiosClient';

function Search() {
  const [catalogueId, setCatalogueId] = useState('');
  const [catalogue, setCatalogue] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(catalogueId);
    try {
      const response = await axiosClient.post('/catId/getCatId', {
        catalogueId: catalogueId
      });
      console.log(response);
      setCatalogue(response.data);
    } catch (error) {
      console.log(error);
      alert(`Catalogue ID ${catalogueId} not found !`);
    }
  };
  

  const handleChange = (event) => {
    setCatalogueId(event.target.value);
  };

  return (
    <div className='Search'>
      <form onSubmit={handleSubmit}>
      <div className='searchBar'>
         <label >
          Search Catalogue ID:
          <br />
          <input type="text" value={catalogueId} onChange={handleChange} />
         </label>
        <button type="submit">Search</button>
      </div>
        
      </form>
      {catalogue && (
        <div>
          <h2>Release/Product ID/Product Series: => {catalogueId} </h2>
          <h3>CTQ Points/Major Discussion:</h3>
          <ul>
            {catalogue.checkpoints.map((checkpoint) => (
              <li key={checkpoint}>{checkpoint}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
