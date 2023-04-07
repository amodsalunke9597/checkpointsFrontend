import { useState } from 'react';
import Search from "./search/Search";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from "./create/Create"
import './App.scss'
import { axiosClient } from '../src/Utils/axiosClient';
import DeleteCatId from './deleteCatId/delete';

function App() {
  const [catIds, setCatIds] = useState([]);

  const handleLoadAllCatIds = async () => {
    try {
      const response = await axiosClient.get('/catId/getAllCatId');
      console.log(response.data.catalogueData);
      
      setCatIds(response.data.catalogueData);
    } catch (error) {
      console.error(error);
      alert(`Error loading all catalogue IDs: ${error.message}`);
    }
  };
  
  
  return (
    <div className="App">
      <h1>Important Checkpoint Related to CatalogueID</h1>
      <Search />
     
      <button onClick={handleLoadAllCatIds}>Load All Catalogue IDs</button>
      <div className="catIds-grid-item">
           {catIds.length > 0 &&
           <ul>
             {catIds.map((cat) => (
               <li key={cat.catalogueId}>
                 <p href={`/catId/getCatId/${cat.catalogueId}`}>{cat.catalogueId}</p>
               </li>
             ))}
           </ul>
      }
      </div>
  
      <p>Add <span className='bold'> , </span> after your one point end whenever you try update or create new cat ID</p>
      <Create />
      <DeleteCatId />
    </div>
  );
}

export default App;
