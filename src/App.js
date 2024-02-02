import { useState } from 'react';
import './App.css';
import ItemView from './components/ItemView';
import NavBar from './components/NavBar';
import {Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress,setProgress]=useState(0)
  return (
   <>
   <NavBar/>  
   <LoadingBar height={5}
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path='/' element={<ItemView setProgress={setProgress} category=""/>}/>
        <Route exact path='/electronics' element={<ItemView setProgress={setProgress} category="/category/electronics"/>}/>
        <Route exact path='/jewelery' element={<ItemView setProgress={setProgress} category="/category/jewelery"/>}/>
        <Route exact path='/mensclothing' element={<ItemView setProgress={setProgress} category="/category/men's clothing"/>}/>
        <Route exact path='/womensclothing' element={<ItemView setProgress={setProgress} category="/category/women's clothing"/>}/>
      </Routes>
    </>  
  );
}

export default App;
