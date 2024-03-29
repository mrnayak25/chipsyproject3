import { useContext, useEffect, useState } from 'react';
import './App.css';
import ItemView from './components/ItemView';
import NavBar from './components/NavBar';
import {Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Home from './components/Home';
import Search from './components/Search';
import SingleItem from './components/SingleItem';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import { AuthContext } from './context/AuthContext';

function App() {
  const a = useContext(AuthContext)
  const [progress,setProgress]=useState(0)
  const [id,setId]=useState(0)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      a.setUser(storedUser);
      a.setLogedIn(true)
    }
  }, []);
  return (
   <div>
   <NavBar />  
   <LoadingBar height={5}
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path='/' element={<Home key="1" setId={setId} setProgress={setProgress} categoryName="Trends"/>}/>
        <Route exact path='/electronics' element={<ItemView  key="2" setProgress={setProgress} category="/category/electronics" setId={setId} categoryName="Electronics"/>}/>
        <Route exact path='/jewelery' element={<ItemView key="3" setProgress={setProgress} category="/category/jewelery" setId={setId} categoryName="Jewelery"/>}/>
        <Route exact path="/men's clothing" element={<ItemView key="4" setProgress={setProgress} category="/category/men's clothing" setId={setId} categoryName="Men's Clothing"/>}/>
        <Route exact path="/women's clothing" element={<ItemView key="5" setProgress={setProgress} category="/category/women's clothing" setId={setId} categoryName="Women's Clothing"/>}/>
        <Route exact path="/search" element={<Search key="6" setProgress={setProgress} setId={setId} />}/>
        <Route exact path="/singleproduct" element={<SingleItem key="7" setProgress={setProgress} id={id}/>}/>
    
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/cart/checkout" element={<CheckOut/>}/>
      </Routes>
    </div>  
  );
}

export default App;
