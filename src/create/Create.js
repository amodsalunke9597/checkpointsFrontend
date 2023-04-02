import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosClient } from '../Utils/axiosClient';
import './Create.scss'


function CreateAndUpdateCatId() {
  const [createCatalogueId, setCreateCatalogueId] = useState('');
  const [updateCatalogueId, setUpdateCatalogueId] = useState('');
  const [checkpoints, setCheckpoints] = useState([]);
  const [updateCheckpoints, setUpdateCheckpoints] = useState([]);

  const handleCreateSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosClient.post('/catId/createCatId', {
        catalogueId: createCatalogueId,
        checkpoints: checkpoints
      });
      console.log(response);
      alert(`Catalogue ID ${createCatalogueId} created successfully!`);
      setCreateCatalogueId('');
      setCheckpoints([]);
    } catch (error) {
      console.error(error);
      alert(`Error creating catalogue ID ${createCatalogueId}: ${error.message}`);
    }
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosClient.post('/catId/updateCatId', {
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
  

  const handleCreateCatalogueIdChange = (event) => {
    setCreateCatalogueId(event.target.value);
  };

  const handleUpdateCatalogueIdChange = (event) => {
    setUpdateCatalogueId(event.target.value);
  };

  const handleCheckpointsChange = (event) => {
    setCheckpoints(event.target.value);
  };

  const handleUpdateCheckpointsChange = (event) => {
    setUpdateCheckpoints(event.target.value);
  };


  return (
    <div className='Create'>
      <form onSubmit={handleCreateSubmit}>
        <h2>Create Catalogue ID</h2>
        <label>
          Catalogue ID:
          <input type="text" value={createCatalogueId} onChange={handleCreateCatalogueIdChange} />
        </label>
        <br />
        <label>
          Checkpoints:
          <textarea value={checkpoints} onChange={handleCheckpointsChange} />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
      <form onSubmit={handleUpdateSubmit}>
        <h2>Update Catalogue ID</h2>
        <label>
          Catalogue ID:
          <input type="text" value={updateCatalogueId} onChange={handleUpdateCatalogueIdChange} />
        </label>
        <br />
        <label>
          Checkpoints:
          <textarea value={updateCheckpoints} onChange={handleUpdateCheckpointsChange} />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default CreateAndUpdateCatId;
