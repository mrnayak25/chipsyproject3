import { useState } from 'react';
import './App.css';
import ItemView from './components/ItemView';
import NavBar from './components/NavBar';
import {Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Home from './components/Home';

function App() {
  const [progress,setProgress]=useState(0)
  return (
   <div>
   <NavBar/>  
   <LoadingBar height={5}
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path='/' element={<Home key="1" setProgress={setProgress}/>}/>
        <Route exact path='/electronics' element={<ItemView  key="2" setProgress={setProgress} category="/category/electronics"  categoryName="Electronics"/>}/>
        <Route exact path='/jewelery' element={<ItemView key="3" setProgress={setProgress} category="/category/jewelery"  categoryName="Jewelery"/>}/>
        <Route exact path="/men's clothing" element={<ItemView key="4" setProgress={setProgress} category="/category/men's clothing"  categoryName="Men's Clothing"/>}/>
        <Route exact path="/women's clothing" element={<ItemView key="5" setProgress={setProgress} category="/category/women's clothing"  categoryName="Women's Clothing"/>}/>
      </Routes>
    </div>  
  );
}

export default App;
