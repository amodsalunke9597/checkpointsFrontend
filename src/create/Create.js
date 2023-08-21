import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosClient } from '../Utils/axiosClient';
import './Create.scss'


function CreateAndUpdateCatId() {
  const [updateCatalogueId, setUpdateCatalogueId] = useState('');
  const [updateExistingCatalogueId, setUpdateExistingCatalogueId] = useState('');

  const [updateCheckpoints, setUpdateCheckpoints] = useState([]);
  const [updateExistingCheckpoints, setUpdateExistingCheckpoints] = useState([]);

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosClient.post('/catId/createCatId', {
        catalogueId: updateCatalogueId,
        checkpoints: updateCheckpoints // Pass the array directly
      });
      console.log(response);
      alert(`Catalogue ID ${updateCatalogueId} updated successfully!`);
      setUpdateCheckpoints([]);
    } catch (error) {
      console.error(error);
      alert(`Error updating catalogue ID ${updateCatalogueId}: ${error.message}`);
    }
  };

  const handleUpdateExistingSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosClient.put('/catId/updateExistingCatId', {
        catalogueId: updateExistingCatalogueId,
        checkpoints: updateExistingCheckpoints // Pass the array directly
      });
      console.log(response);
      alert(`Catalogue ID ${updateCatalogueId} updated successfully!`);
      setUpdateExistingCheckpoints([]);
    } catch (error) {
      console.error(error);
      alert(`Error updating catalogue ID ${updateCatalogueId}: ${error.message}`);
    }
  };
  

  const handleUpdateCatalogueIdChange = (event) => {
    setUpdateCatalogueId(event.target.value);
  };

  const handleUpdateExistingCatalogueIdChange = (event) => {
    setUpdateExistingCatalogueId(event.target.value);
  };

  
  const handleUpdateCheckpointsChange = (event) => {
    const value = event.target.value;
    const checkpointsArray = value.split(/[#]/); // Split using , or #
    setUpdateCheckpoints(checkpointsArray);
  };
  

  const handleUpdateExistingCheckpointsChange = (event) => {
    const value = event.target.value;
    const checkpointsArray = value.split(/[#]/);
    setUpdateExistingCheckpoints(checkpointsArray);
  };
  
  


  return (
    <div className='Create'>
      <form onSubmit={handleUpdateSubmit}>
        <h2>Create Lines</h2>
        <label>
         Event Name/Catalogue
          <input type="text" value={updateCatalogueId} onChange={handleUpdateCatalogueIdChange} />
        </label>
        <br />
        <label>
          Lines:
          <textarea value={updateCheckpoints} onChange={handleUpdateCheckpointsChange} />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>

      <form onSubmit={handleUpdateExistingSubmit}>
        <h2>Update Existing Lines</h2>
        <label>
          Event Name/Catalogue
          <input type="text" value={updateExistingCatalogueId} onChange={handleUpdateExistingCatalogueIdChange} />
        </label>
        <br />
        <label>
          Lines:
          <textarea value={updateExistingCheckpoints} onChange={handleUpdateExistingCheckpointsChange} />
        </label>
        <br />
        <button type="submit">Update Existing</button>
      </form>
    </div>
  );
}

export default CreateAndUpdateCatId;
