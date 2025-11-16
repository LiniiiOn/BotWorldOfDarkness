import React, { useEffect} from 'react';
import './App.css';
import { useTelegram } from './hook/useTelegram';
import Header from './components/Header/Header';
import {Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';


function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<ProductList />}></Route>
        <Route path={'form'} element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
