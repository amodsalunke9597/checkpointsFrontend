import Search from "./search/Search";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from "./create/Create"
import './App.scss'

function App() {
  return (
    <div className="App">
    <Search />




    
    <Create />
    </div>
  );
}

export default App;
