import { useState } from 'react';
import { axiosClient } from '../Utils/axiosClient';


function DeleteCatId() {
  const [catalogueId, setCatalogueId] = useState('');

  const handleDeleteSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosClient.delete('/catId/deleteCatId', {
        data: { catalogueId }
      });
      console.log(response);
      alert(`Catalogue ID ${catalogueId} deleted successfully!`);
      setCatalogueId('');
    } catch (error) {
      console.error(error);
      alert(`Error deleting catalogue ID ${catalogueId}: ${error.message}`);
    }
  };

  const handleCatalogueIdChange = (event) => {
    setCatalogueId(event.target.value);
  };

  return (
    <div className='Delete'>
      <form onSubmit={handleDeleteSubmit}>
        <h2>Delete Catalogue ID</h2>
        <label>
          Catalogue ID:
          <input type="text" value={catalogueId} onChange={handleCatalogueIdChange} />
        </label>
        <br />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteCatId;
